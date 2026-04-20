import { carBrands } from '@/app/data/carBrands';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BrandClientPage from './BrandClientPage';

// Generate static pages at build time
export async function generateStaticParams() {
    return carBrands.map((brand) => ({
        brand: brand.slug,
    }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: { params: { brand: string } }): Promise<Metadata> {
    const brandData = carBrands.find(b => b.slug === params.brand);
    
    if (!brandData) {
        return {
            title: 'Страница не найдена | Авто14',
            description: 'Автосервис в Казани',
        };
    }

    return {
        title: `Ремонт и Сход-развал ${brandData.name} (${brandData.nameRu}) в Казани | Авто14`,
        description: `Стук в подвеске? Профессиональный ремонт ходовой, ТО и 3D сход-развал для автомобилей ${brandData.name} в Казани. Опытные мастера, честные цены от 600 рублей.`,
    };
}

export default function BrandPage({ params }: { params: { brand: string } }) {
    const brandData = carBrands.find(b => b.slug === params.brand);

    if (!brandData) {
        notFound();
    }

    return <BrandClientPage brand={brandData} />;
}
