import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ремонт ходовой и подвески в Казани | Диагностика | Avto14',
    description: 'Профессиональный ремонт ходовой части и подвески автомобиля в Казани. Диагностика, замена рычагов, сайлентблоков, амортизаторов. Гарантия.',
    alternates: {
        canonical: 'https://auto-14.ru/remont-podveski',
    },
    openGraph: {
        title: 'Ремонт ходовой части в Казани | Автосервис Avto14',
        description: 'Диагностика и устранение любых стуков. Вернем вашему авто комфорт и безопасность.',
        url: 'https://auto-14.ru/remont-podveski',
        siteName: 'Автосервис Avto14',
        locale: 'ru_RU',
        type: 'website',
        images: ['/job/hodovaya.jpg'],
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
            "name": "Ремонт Ходовой",
            "image": "https://auto-14.ru/job/hodovaya.jpg",
            "provider": { "@id": "https://auto-14.ru/#organization" },
            "areaServed": "Казань",
            "description": "Диагностика и устранение любых стуков. Вернем вашему авто комфорт и безопасность.",
            "offers": {
                "@type": "Offer",
                "price": "600",
                "priceCurrency": "RUB",
                "description": "Цена за услугу (прессовка 1 сайлентблока)"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Какова минимальная стоимость ремонта?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "От 600 ₽. Это цена за прессовку одного сайлентблока на снятом рычаге (если вы принесли деталь)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Сколько стоит диагностика?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Диагностика ходовой стоит 500₽. При последующем ремонте у нас – диагностика БЕСПЛАТНО."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Можно ли со своими запчастями?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, можно. Но гарантию мы дадим только на работу. На сами запчасти гарантию дает ваш магазин."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Как долго длится ремонт?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Мелкий ремонт (стойки стабилизатора, колодки) – 30-60 минут. Серьезный ремонт (переборка подвески) – от 3 часов до дня."
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
