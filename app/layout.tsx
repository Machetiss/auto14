import { Suspense } from 'react';
import type { Metadata } from 'next';
import './globals.css';

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
                <body className="antialiased">
                    <Suspense fallback={null}>
                        <YandexMetrika />
                    </Suspense>
                    <Analytics />
                    <SchemaMarkup />

                    <BookingProvider>
                        {children}
                    </BookingProvider>
                </body>
            </html>
        </LanguageProvider>
    );
}
