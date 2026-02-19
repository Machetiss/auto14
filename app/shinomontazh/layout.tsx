import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Шиномонтаж в Казани (Константиновка) | Балансировка колес | Avto14',
    description: 'Услуги шиномонтажа в Казани: сезонная переобувка, точная балансировка, ремонт проколов. Быстро, качественно, без очередей (по записи).',
    alternates: {
        canonical: 'https://auto-14.ru/shinomontazh',
    },
    openGraph: {
        title: 'Шиномонтаж в Казани | Балансировка | Переобувка | Авто14',
        description: 'Профессиональный шиномонтаж и балансировка колес. Правка дисков. Сезонная переобувка без очередей по записи.',
        url: 'https://auto-14.ru/shinomontazh',
        siteName: 'Автосервис Avto14',
        locale: 'ru_RU',
        type: 'website',
        images: ['/job/shin.jpg'],
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Шиномонтаж и Балансировка",
            "image": "https://auto-14.ru/job/shin.jpg",
            "provider": { "@id": "https://auto-14.ru/#organization" },
            "areaServed": "Казань",
            "description": "Сезонная переобувка без очередей (по записи). Бережное отношение к датчикам давления и низкому профилю.",
            "offers": {
                "@type": "Offer",
                "price": "2200",
                "priceCurrency": "RUB",
                "description": "Цена за комплект (R14)"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Какая цена на шиномонтаж?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Комплексная переобувка (R14) — от 2200 ₽ за комплект. В цену входит снятие/установка, монтаж и балансировка."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Можно ли записаться день в день?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "В пик сезона (первый снег) лучше записываться за 2-3 дня. В остальное время — возможно, звоните!"
                    }
                },
                {
                    "@type": "Question",
                    "name": "Сколько времени занимает переобувка?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Обычно полный комплекс (4 колеса) занимает от 30 до 40 минут."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Датчики давления не сломаете?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Нет, наши мастера умеют работать с датчиками TMPS, мы знаем их особенности."
                    }
                }
            ]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
