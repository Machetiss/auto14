import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { handleApiError } from '@/lib/api-error';

export async function GET() {
    try {
        const services = await prisma.service.findMany();
        return NextResponse.json(services);
    } catch (error) {
        return handleApiError(error);
    }
}
