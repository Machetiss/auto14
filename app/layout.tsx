import { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';

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
    description: "Точный 3D сход-развал на немецком стенде Hoffman и ремонт ходовой в Казани. Исправим стуки за 1 визит. Цены от 600₽. Рейтинг 5.0. Бесплатная диагностика!",
    keywords: "автосервис казань, ремонт авто казань, 3d развал схождение, ремонт ходовой, замена масла, автозапчасти, константиновка, диагностика подвески",
    openGraph: {
        title: 'Авто14 — Честный автосервис в Казани',
        description: 'Сделаем вашу машину идеальной! Сход-развал, ремонт ходовой, ТО. Записывайтесь!',
        url: 'https://www.auto-14.ru',
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
                </head>
                <body className="antialiased">
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
