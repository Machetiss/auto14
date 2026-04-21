import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Отзывы об автосервисе Авто14 в Казани | Реальные клиенты',
    description: 'Читайте отзывы реальных клиентов о автосервисе Авто14 в Казани. Рейтинг 5.0. Ремонт ходовой, 3D сход-развал, шиномонтаж, замена масла. Константиновка, ул. Заречная 5Б.',
    alternates: {
        canonical: 'https://www.auto-14.ru/otzyvy',
    },
    openGraph: {
        title: 'Отзывы о Авто14 — Автосервис в Казани с рейтингом 5.0',
        description: 'Сотни довольных клиентов. Реальные отзывы о ремонте ходовой, развал-схождении и ТО в Казани.',
        url: 'https://www.auto-14.ru/otzyvy',
        siteName: 'Автосервис Авто14',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function OtzyvyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
