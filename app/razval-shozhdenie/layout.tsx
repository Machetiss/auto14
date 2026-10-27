import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '3D Развал-схождение в Казани | Стенд Hofmann',
    description: 'Сделать 3D развал-схождение в Казани (Константиновка). Высокоточный стенд Hofmann, гарантия на работы. Цены от 1500 руб.',
    alternates: {
        canonical: '/razval-shozhdenie',
    },
    openGraph: {
        title: '3D Развал-схождение в Казани | Стенд Hofmann | Автосервис Avto14',
        description: 'Идеальная точность на стенде Hofmann. Устраним жор резины и увод руля за 20 минут. Гарантия 7 дней.',
        url: 'https://auto-14.ru/razval-shozhdenie',
        siteName: 'Автосервис Avto14',
        locale: 'ru_RU',
        type: 'website',
        images: ['/job/razval.jpg'],
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
            "name": "3D Развал-схождение",
            "image": "https://auto-14.ru/job/razval.jpg",
            "provider": { "@id": "https://auto-14.ru/#organization" },
            "areaServed": "Казань",
            "description": "Идеальная точность на стенде Hofmann. Устраним жор резины и увод руля за 20 минут.",
            "offers": {
                "@type": "Offer",
                "price": "1500",
                "priceCurrency": "RUB",
                "description": "Цена за одну ось"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Сколько стоит развал-схождение?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "От 1500 ₽ за одну ось (например, Kia Rio). Две оси — от 2500 ₽ (схождение + развал)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Нужно ли делать развал после смены резины?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да. Износ деталей подвески меняет углы, новая резина требует идеальных настроек для долгой службы."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Если ходовая разбита, сделаете?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Нет. С люфтами в шаровых или наконечниках точный развал невозможен. Сначала ремонт (можно у нас), потом регулировка."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Даете гарантию?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да. 7 дней после регулировки: если руль стоит криво или машину тянет, переделаем бесплатно."
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
