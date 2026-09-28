import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Бесплатная диагностика подвески в Казани | СТО Авто14',
    description: 'Бесплатная диагностика ходовой части автомобиля на подъемнике в Казани (Константиновка, Заречная 5Б). Проверка рычагов, сайлентблоков, амортизаторов за 0 руб.',
    alternates: {
        canonical: '/diagnostika',
    },
    openGraph: {
        title: 'Бесплатная диагностика подвески и ходовой в Казани | Avto14',
        description: 'Бесплатная диагностика ходовой части автомобиля на подъемнике в Казани (Константиновка, Заречная 5Б). Проверка рычагов, сайлентблоков, амортизаторов за 0 руб.',
        url: 'https://auto-14.ru/diagnostika',
        siteName: 'Автосервис Avto14',
        locale: 'ru_RU',
        type: 'website',
        images: ['/job/diagnostika.jpg'],
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
            "name": "Диагностика подвески",
            "image": "https://auto-14.ru/job/diagnostika.jpg",
            "provider": { "@id": "https://auto-14.ru/#organization" },
            "areaServed": "Казань",
            "description": "Тщательный осмотр ходовой части на подъемнике. Найдем причину стука, люфтов и неустойчивости на дороге.",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "RUB",
                "description": "Бесплатная диагностика подвески для всех клиентов"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Диагностика платная?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Диагностика подвески бесплатна. Осмотр ходовой части на подъёмнике проводится без скрытых условий."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Сколько времени занимает диагностика?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Обычно осмотр занимает 20-30 минут."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Можно ли присутствовать в ремзоне?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, вы можете пройти к подъемнику и мастер покажет вам все найденные неисправности."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Нужно ли записываться заранее?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Да, рекомендуем предварительно записаться по телефону +7 (999) 269-93-59, чтобы подъёмник был свободен точно к вашему приезду без очередей."
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
