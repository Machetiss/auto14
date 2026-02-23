
import Script from 'next/script';

export default function SchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Авто14",
        "alternateName": "Автосервис Авто14",
        "image": "https://auto-14.ru/logo-wheel.png",
        "@id": "https://auto-14.ru/#organization",
        "url": "https://auto-14.ru",
        "telephone": "+79992699359",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Заречная ул., 5Б",
            "addressLocality": "Казань, жилой массив Константиновка",
            "addressRegion": "Республика Татарстан",
            "postalCode": "420083",
            "addressCountry": "RU"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 55.827663,
            "longitude": 49.227284
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "19:00"
            }
        ],
        "priceRange": "$$",
        "areaServed": {
            "@type": "City",
            "name": "Казань"
        },
        "sameAs": [
            "https://t.me/avto14_bot",
            "https://wa.me/79992699359"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги автосервиса",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "3D Развал-схождение"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ремонт подвески"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Шиномонтаж"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Замена масла"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Компьютерная диагностика"
                    }
                }
            ]
        }
    };

    return (
        <Script
            id="schema-markup"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
