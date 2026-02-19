import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { handleApiError } from '@/lib/api-error';

export async function GET() {
    try {
        const faqs = await prisma.faq.findMany();
        return NextResponse.json(faqs);
    } catch (error) {
        return handleApiError(error);
    }
}
