import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Диагностика подвески и ходовой в Казани | Бесплатно при ремонте | Avto14',
    description: 'Диагностика ходовой части автомобиля на подъемнике. Проверка рычагов, сайлентблоков, амортизаторов. Бесплатно при последующем ремонте. Казань, Константиновка.',
    alternates: {
        canonical: 'https://auto-14.ru/diagnostika',
    },
    openGraph: {
        title: 'Диагностика подвески и ходовой в Казани | Бесплатно при ремонте | Avto14',
        description: 'Диагностика ходовой части автомобиля на подъемнике. Проверка рычагов, сайлентблоков, амортизаторов. Бесплатно при последующем ремонте. Казань, Константиновка.',
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
                "description": "Цена за услугу (условно бесплатно при ремонте)"
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
                        "text": "0 ₽ — если вы ремонтируете автомобиль у нас. В остальных случаях — 500 ₽ за осмотр подвески."
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
                    "name": "Если я буду ремонтироваться у вас?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "При последующем ремонте ходовой части у нас — диагностика подвески БЕСПЛАТНО."
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
