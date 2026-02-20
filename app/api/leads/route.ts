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

        // Save to Database
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

        // Send to Telegram (Fire and forget or await?)
        // Better to await to report error if telegram fails, or catch it separately.
        if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
            try {
                let message = `
🔥 *Новая заявка!* (ID: ${lead.id})
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

        // Send to Google Sheets (Fire and forget)
        if (GOOGLE_SHEETS_WEBHOOK_URL) {
            try {
                await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        service: service || '',
                        name: name || 'Клиент',
                        phone,
                        car: car || '',
                        description: description || '',
                        utm: utm?.source || 'direct',
                        createdAt: new Date().toISOString()
                    })
                });
            } catch (sheetError) {
                console.error("Google Sheets notification failed:", sheetError);
            }
        }

        return NextResponse.json({ success: true, leadId: lead.id });
    } catch (error) {
        return handleApiError(error);
    }
}
