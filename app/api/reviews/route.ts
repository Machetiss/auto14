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

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Basic validation for manual review addition
        if (!body.author || !body.text || !body.rating) {
             return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }
        
        const review = await prisma.review.create({
            data: {
                author: body.author,
                text: body.text,
                rating: body.rating,
                source: body.source || 'manual',
                date: new Date()
            }
        });
        return NextResponse.json(review, { status: 201 });
    } catch (error) {
        return handleApiError(error);
    }
}
