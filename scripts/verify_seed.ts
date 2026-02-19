import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    console.error("Starting verification...");
    const serviceCount = await prisma.service.count();
    const reviewCount = await prisma.review.count();
    const faqCount = await prisma.faq.count();

    console.error(`Services: ${serviceCount}`);
    console.error(`Reviews: ${reviewCount}`);
    console.error(`FAQs: ${faqCount}`);

    if (serviceCount === 0) {
      console.error("No services found! Seeding might have failed.");
      process.exit(1);
    }
  } catch (e) {
    console.error("Error accessing DB:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
