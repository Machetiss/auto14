import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter, Unbounded } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-inter',
    display: 'swap',
});

const unbounded = Unbounded({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-unbounded',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://auto-14.ru'),
    title: {
        template: '%s | Авто14',
        default: 'Авто14 — Автосервис в Казани | Ремонт ходовой, Сход-развал 3D',
    },
    description: "Профессиональный автосервис в Казани (Константиновка). 3D развал-схождение, ремонт подвески, плановое ТО, замена масла. Гарантия на работы.",
    keywords: "автосервис казань, ремонт авто казань, 3d развал схождение, ремонт ходовой, замена масла, автозапчасти, константиновка, диагностика подвески",
    openGraph: {
        title: 'Авто14 — Честный автосервис в Казани',
        description: 'Сделаем вашу машину идеальной! Сход-развал, ремонт ходовой, ТО. Записывайтесь!',
        url: 'https://auto-14.ru',
        siteName: 'Авто14',
        locale: 'ru_RU',
        type: 'website',
    },
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
    }
};

import { BookingProvider } from './context/BookingContext';
import Analytics from './components/Analytics';

import YandexMetrika from './components/YandexMetrika';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={`${inter.variable} ${unbounded.variable}`}>
            <body className="font-sans antialiased">
                <Suspense fallback={null}>
                    <YandexMetrika />
                </Suspense>
                <Analytics />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AutoRepair",
                            "@id": "https://auto-14.ru/#organization",
                            "name": "Авто14",
                            "alternateName": "Автосервис Авто14",
                            "image": "https://auto-14.ru/logo-wheel.png",
                            "description": "Профессиональный ремонт ходовой, 3D развал-схождение, плановое ТО и подбор запчастей в Казани. Константиновка.",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Заречная ул., 5Б",
                                "addressLocality": "Казань, жилой массив Константиновка",
                                "addressRegion": "Республика Татарстан",
                                "postalCode": "420083",
                                "addressCountry": "RU"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 55.827663,
                                "longitude": 49.227284
                            },
                            "url": "https://auto-14.ru",
                            "telephone": "+79992699359",
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                    "opens": "09:00",
                                    "closes": "19:00"
                                }
                            ],
                            "priceRange": "$$",
                            "areaServed": {
                                "@type": "City",
                                "name": "Казань"
                            },
                            "sameAs": [
                                "https://t.me/avto14_bot",
                                "https://wa.me/79992699359"
                            ]
                        }),
                    }}
                />
                <BookingProvider>
                    {children}
                </BookingProvider>
            </body>
        </html>
    );
}
