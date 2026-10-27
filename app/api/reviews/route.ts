import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { handleApiError } from '@/lib/api-error';

export async function GET() {
    try {
        const reviews = await prisma.review.findMany({
            orderBy: { date: 'desc' }
        });
        return NextResponse.json(reviews);
    } catch (error) {
        return handleApiError(error);
    }
}

// POST убран 27.10.2026: эндпоинт был открыт без авторизации, сайт им не пользуется.
// Отзывы теперь приходят из выгрузки штаба (data/hq/reviews.json).
