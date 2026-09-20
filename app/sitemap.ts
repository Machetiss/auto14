import { MetadataRoute } from 'next';
import { carBrands } from '@/app/data/carBrands';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.auto-14.ru';

    // Основные конверсионные посадочные страницы (высокий приоритет)
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
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
            priority: 0.9,
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
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/kontakty`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Целевые брендовые хабы (35 популярных марок в Татарстане)
    const dynamicBrandRoutes: MetadataRoute.Sitemap = carBrands.map((brand) => ({
        url: `${baseUrl}/brands/${brand.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Полезные статьи блога
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
        },
    ];

    // Очищенный sitemap без 3300+ пустых дублей: спасаем краулинговый бюджет для Яндекса
    return [...staticRoutes, ...dynamicBrandRoutes, ...blogRoutes];
}
