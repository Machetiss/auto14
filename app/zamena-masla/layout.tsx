import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Замена масла в двигателе Казань | Плановое ТО | Avto14',
    description: 'Экспресс замена масла в двигателе и фильтров. Плановое ТО автомобиля в Константиновке (Казань). Качественные масла и расходники в наличии.',
    alternates: {
        canonical: 'https://auto-14.ru/zamena-masla',
    },
    openGraph: {
        title: 'Замена масла в Казани | Экспресс-замена | Avto14',
        description: 'Экспресс-замена масла в двигателе и КПП. Качественные расходные материалы и профессиональный подход.',
        url: 'https://auto-14.ru/zamena-masla',
        siteName: 'Автосервис Avto14',
        locale: 'ru_RU',
        type: 'website',
        images: ['/job/oil1.jpg'],
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
            "name": "Замена масла в двигателе",
            "image": "https://auto-14.ru/job/oil1.jpg",
            "provider": { "@id": "https://auto-14.ru/#organization" },
            "areaServed": "Казань",
            "description": "Экспресс-замена масла в двигателе и КПП. Качественные расходные материалы и профессиональный подход.",
            "offers": {
                "@type": "Offer",
                "price": "1000",
                "priceCurrency": "RUB",
                "description": "Цена за работу по замене"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Сколько стоит замена масла?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Работа по замене — от 1000 ₽. Если снятие защиты картера не требует слесарных работ, доплаты не берем."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Как часто нужно менять масло?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Мы рекомендуем интервал 5-7 тысяч км для городских условий. Это продлит жизнь вашему двигателю."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Можно ли со своим маслом?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, конечно. Вы платите только за работу по замене."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Меняете ли вы масло в АКПП?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, производим как частичную, так и полную замену масла в коробках передач."
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
