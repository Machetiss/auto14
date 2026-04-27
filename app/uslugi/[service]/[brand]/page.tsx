import { carBrands } from '@/app/data/carBrands';
import { services } from '@/app/data/services';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceBrandClientPage from './ServiceBrandClientPage';

interface Params {
  service: string;
  brand: string;
}

// Генерируем все статические пути: 8 услуг × 35 брендов = 280 страниц
export async function generateStaticParams(): Promise<Params[]> {
  const params: Params[] = [];
  for (const service of services) {
    for (const brand of carBrands) {
      params.push({ service: service.slug, brand: brand.slug });
    }
  }
  return params;
}

// SEO мета-теги для каждой комбинации
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const serviceData = services.find(s => s.slug === params.service);
  const brandData = carBrands.find(b => b.slug === params.brand);

  if (!serviceData || !brandData) {
    return {
      title: 'Страница не найдена | Авто14',
      description: 'Автосервис в Казани',
    };
  }

  const title = `${serviceData.nameRu} ${brandData.name} в Казани`;
  const description = `${serviceData.nameRu} для ${brandData.nameRu} (${brandData.name}) в Казани. Опытные мастера, честные цены от ${serviceData.priceFrom > 0 ? serviceData.priceFrom + ' руб' : 'бесплатно при ремонте'}, гарантия на работы. Запись по телефону или онлайн.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default function ServiceBrandPage({ params }: { params: Params }) {
  const serviceData = services.find(s => s.slug === params.service);
  const brandData = carBrands.find(b => b.slug === params.brand);

  if (!serviceData || !brandData) {
    notFound();
  }

  return <ServiceBrandClientPage service={serviceData} brand={brandData} />;
}
