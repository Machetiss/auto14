import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const serviceCount = await prisma.service.count();
    const reviewCount = await prisma.review.count();
    const faqCount = await prisma.faq.count();

    console.log(`Services: ${serviceCount}`);
    console.log(`Reviews: ${reviewCount}`);
    console.log(`FAQs: ${faqCount}`);
  } catch (e) {
    console.error("Error accessing DB:", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
