import { MetadataRoute } from 'next';
import { carBrands } from '@/app/data/carBrands';
import { services } from '@/app/data/services';
import { getCarSpecs } from '@/lib/cars';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.auto-14.ru';

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/razval-shozhdenie`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/remont-podveski`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/zamena-masla`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/diagnostika`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/shinomontazh`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/otzyvy`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/kontakty`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // /brands/[brand] — 35 страниц
    const dynamicBrandRoutes: MetadataRoute.Sitemap = carBrands.map((brand) => ({
        url: `${baseUrl}/brands/${brand.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // /uslugi/[service]/[brand] — 280 страниц (8 услуг × 35 брендов)
    const dynamicServiceBrandRoutes: MetadataRoute.Sitemap = services.flatMap((service) =>
        carBrands.map((brand) => ({
            url: `${baseUrl}/uslugi/${service.slug}/${brand.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.65,
        }))
    );

    // /catalog — Главная страница каталога
    const catalogMainRoute: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/catalog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    // /catalog/[brand] и /catalog/[brand]/[model]
    const catalogRoutes: MetadataRoute.Sitemap = getCarSpecs().flatMap((spec) => [
        {
            url: `${baseUrl}/catalog/${spec.brand.toLowerCase()}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/catalog/${spec.brand.toLowerCase()}/${encodeURIComponent(spec.model)}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.75,
        },
    ]);

    // Удаление дубликатов для брендов
    const uniqueCatalogRoutes = Array.from(new Map(catalogRoutes.map(route => [route.url, route])).values());

    // /blog
    const blogRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/kogda-delat-shod-razval`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog/kak-vybrat-maslo`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        }
    ];

    return [...staticRoutes, ...dynamicBrandRoutes, ...dynamicServiceBrandRoutes, ...catalogMainRoute, ...uniqueCatalogRoutes, ...blogRoutes];
}
