import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Inter, Unbounded, Caveat } from 'next/font/google';
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

const caveat = Caveat({
    subsets: ['cyrillic', 'latin'],
    variable: '--font-caveat',
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
import SchemaMarkup from './components/SchemaMarkup';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={`${inter.variable} ${unbounded.variable} ${caveat.variable}`}>
            <body className="font-sans antialiased">
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
    );
}
