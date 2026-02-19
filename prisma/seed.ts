import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const services = [
  {
    slug: "wheel-alignment",
    title: "3D Развал-схождение",
    description: "Настройка углов установки колес на современном 3D стенде Hunter. Устраняем жор резины и увод руля.",
    price: "1200",
    features: "40 мин",
    icon: "Target"
  },
  {
    slug: "chassis-repair",
    title: "Ремонт ходовой",
    description: "Диагностика и замена рычагов, сайлентблоков, амортизаторов, шаровых опор. Гарантия на запчасти.",
    price: "500",
    features: "от 1 часа",
    icon: "Wrench"
  },
  {
    slug: "tire-fitting",
    title: "Шиномонтаж",
    description: "Сезонная переобувка, балансировка, ремонт проколов и боковых порезов. Бережное отношение к дискам.",
    price: "1500",
    features: "30 мин",
    icon: "Circle"
  },
  {
    slug: "oil-change",
    title: "Замена масла",
    description: "Экспресс-замена масла в двигателе и КПП. Все фильтры и масла в наличии.",
    price: "500",
    features: "20 мин",
    icon: "Droplet"
  },
  {
    slug: "diagnostics",
    title: "Диагностика",
    description: "Компьютерная диагностика двигателя, АКПП и электронных систем. Поиск неисправностей.",
    price: "500",
    features: "30 мин",
    icon: "Activity"
  }
];

const reviews = [
  {
    author: "Алексей С.",
    date: new Date("2024-02-10"),
    rating: 5,
    text: "Заехал на развал после замены рулевых наконечников. Сделали быстро, руль теперь стоит ровно, машина едет как по рельсам. Рекомендую!",
    source: "Yandex"
  },
  {
    author: "Марина К.",
    date: new Date("2024-02-05"),
    rating: 5,
    text: "Беспокоил стук спереди справа. Ребята быстро нашли проблему (стойка стабилизатора), запчасть была в наличии. Поменяли за полчаса. Очень вежливые мастера.",
    source: "Google"
  },
  {
    author: "Руслан",
    date: new Date("2024-01-28"),
    rating: 5,
    text: "Переобуваюсь здесь уже третий сезон. Нравится, что все по записи, не надо ждать в очереди. Диски не царапают, грузики клеят аккуратно.",
    source: "2GIS"
  }
];

const faqs = [
  {
    question: "Нужно ли записываться заранее?",
    answer: "Мы рекомендуем записываться заранее, чтобы не ждать в очереди. Особенно в сезон шиномонтажа. Но если у нас есть свободное окно, мы примем вас сразу."
  },
  {
    question: "Даете ли вы гарантию на работу?",
    answer: "Да, на все виды работ мы даем гарантию. На запчасти, купленные у нас, также распространяется гарантия производителя."
  },
  {
    question: "Какие способы оплаты вы принимаете?",
    answer: "Мы принимаем наличные, банковские карты и переводы. Для юридических лиц возможна оплата по счету."
  },
  {
    question: "Сколько времени занимает развал-схождение?",
    answer: "Обычно процедура занимает 30-40 минут, если все регулировочные болты откручиваются нормально. В сложных случаях может потребоваться больше времени."
  }
];

async function main() {
  console.log('Start seeding ...');

  // Clean up existing data? Maybe better to upsert or just create.
  // For simplicity using createMany which is supported in SQLite for recent Prisma versions, 
  // but standard loop is safer for relationships/upserts.

  for (const s of services) {
    const service = await prisma.service.upsert({
      where: { slug: s.slug },
      update: {},
      create: s,
    });
    console.log(`Created service with id: ${service.id}`);
  }

  for (const r of reviews) {
    // Reviews don't have unique slug, so just create.
    // To avoid duplicates on re-run, maybe delete all first? 
    // Or just check if exists.
    // Deleting for development simplicity.
    await prisma.review.create({
      data: r
    });
    console.log(`Created review from: ${r.author}`);
  }

  for (const f of faqs) {
    await prisma.faq.create({
      data: f
    });
    console.log(`Created FAQ: ${f.question}`);
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
