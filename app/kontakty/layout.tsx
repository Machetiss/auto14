import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Контакты автосервиса Авто14 в Казани | Адрес, телефон, режим работы',
    description: 'Адрес автосервиса Авто14: г. Казань, Константиновка, ул. Заречная 5Б. Режим работы: Пн–Сб 09:00–19:00. Телефон: +7 (999) 269-93-59. Запись онлайн.',
    alternates: {
        canonical: 'https://www.auto-14.ru/kontakty',
    },
    openGraph: {
        title: 'Контакты Авто14 — Автосервис в Казани',
        description: 'Казань, Константиновка, ул. Заречная 5Б. Работаем Пн–Сб 09:00–19:00. Звоните: +7 (999) 269-93-59.',
        url: 'https://www.auto-14.ru/kontakty',
        siteName: 'Автосервис Авто14',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function KontaktyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
