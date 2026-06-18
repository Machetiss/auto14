import { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Unbounded, Caveat } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['cyrillic', 'latin'],
    weight: ['400', '700', '900'],
    variable: '--font-inter',
    display: 'optional',
});

const unbounded = Unbounded({
    subsets: ['cyrillic', 'latin'],
    weight: ['400', '700', '900'],
    variable: '--font-unbounded',
    display: 'optional',
});

const caveat = Caveat({
    subsets: ['cyrillic', 'latin'],
    weight: ['400', '700'],
    variable: '--font-caveat',
    display: 'optional',
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://www.auto-14.ru'),
    title: {
        template: '%s | Авто14',
        default: 'Сход-развал 3D и Ремонт ходовой в Казани | СТО Авто14',
    },
    description: "Точный 3D сход-развал на немецком стенде Hoffman и ремонт ходовой в Казани (Константиновка, ул. Заречная 5Б). Исправим стуки за 1 визит. Цены от 600₽. Рейтинг 5.0. Бесплатная диагностика!",
    keywords: "автосервис казань, ремонт авто казань, 3d развал схождение, ремонт ходовой, замена масла, автозапчасти, константиновка, диагностика подвески, советский район, заречная 5б, авто14, авто114, авто 114, auto114, auto 114",
    openGraph: {
        title: 'Авто14 — Честный автосервис в Казани',
        description: 'Сделаем вашу машину идеальной! Сход-развал, ремонт ходовой, ТО. Записывайтесь!',
        url: 'https://www.auto-14.ru',
        siteName: 'Авто14',
        locale: 'ru_RU',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
    verification: {
        google: 'ezvh9INv48dll0s1Q9eGkHoUoQWSVrqfPaB9rSZs05Q',
    },
};

import { BookingProvider } from './context/BookingContext';
import { LanguageProvider } from './context/LanguageContext';
import Analytics from './components/Analytics';

import YandexMetrika from './components/YandexMetrika';
import SchemaMarkup from './components/SchemaMarkup';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LanguageProvider>
            <html lang="ru">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="google-site-verification" content="ezvh9INv48dll0s1Q9eGkHoUoQWSVrqfPaB9rSZs05Q" />
                    <link rel="preconnect" href="https://mc.yandex.ru" />
                    <link rel="dns-prefetch" href="https://mc.yandex.ru" />
                </head>
                <body className={`antialiased ${inter.variable} ${unbounded.variable} ${caveat.variable}`}>
                    <Suspense fallback={null}>
                        <YandexMetrika />
                    </Suspense>
                    <Suspense fallback={null}>
                        <Analytics />
                    </Suspense>
                    <SchemaMarkup />

                    <BookingProvider>
                        {children}
                    </BookingProvider>
                </body>
            </html>
        </LanguageProvider>
    );
}
