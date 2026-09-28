import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { leadSchema } from '@/lib/validations';
import { handleApiError } from '@/lib/api-error';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const GOOGLE_SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate input
        const validationResult = leadSchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                { error: "Validation failed", details: validationResult.error.format() },
                { status: 400 }
            );
        }

        const { service, name, phone, car, description, utm } = body;
        const fallbackId = `lead-${Date.now()}`;
        let leadId: string | number = fallbackId;

        // Save to Database (isolated try-catch so DB issues never drop a lead)
        try {
            const lead = await prisma.lead.create({
                data: {
                    name,
                    phone,
                    message: description, // Map description to message
                    service: service || null,
                    car: car || null,
                    source: utm?.source || 'direct',
                    status: 'new'
                }
            });
            leadId = lead.id;
        } catch (dbError) {
            console.error("Database lead creation failed, continuing with notification:", dbError);
        }

        // Send to Telegram (Always notify team, even if DB write failed)
        if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
            try {
                let message = `
🔥 *Новая заявка!* (ID: ${leadId})
🛠 *Услуга:* ${service || 'Не указано'}
👤 *Имя:* ${name || 'Не указано'}
📞 *Телефон:* ${phone}
🚗 *Авто:* ${car || 'Не указано'}
`;
                if (description) {
                    message += `📝 *Проблема:* ${description}\n`;
                }

                message += `📍 *Источник:* ${utm?.source || 'прямой'}`;

                await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: message,
                        parse_mode: 'Markdown'
                    })
                });
            } catch (tgError) {
                console.error("Telegram notification failed:", tgError);
                // Don't fail the request if TG fails, but log it.
            }
        }

        // Send to Google Sheets (fire-and-forget, don't block API response)
        if (GOOGLE_SHEETS_WEBHOOK_URL) {
            const sheetPayload = JSON.stringify({
                service: service || '',
                name: name || 'Клиент',
                phone,
                car: car || '',
                description: description || '',
                utm: utm?.source || 'direct',
                createdAt: new Date().toISOString()
            });

            // Don't await — fire and forget with timeout
            fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: sheetPayload,
                signal: AbortSignal.timeout(10000), // 10s timeout
            }).then(r => {
                console.log('[Sheets] Status:', r.status);
            }).catch(err => {
                console.error('[Sheets] Error:', err.message);
            });
        }

        return NextResponse.json({ success: true, leadId });
    } catch (error) {
        return handleApiError(error);
    }
}
