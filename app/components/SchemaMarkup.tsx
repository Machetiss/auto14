export default function SchemaMarkup() {
    const autoRepairSchema = {
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness", "AutoRepair"],
        "name": "Авто14",
        "alternateName": ["Автосервис Авто14", "СТО Авто14", "Auto14"],
        "image": "https://www.auto-14.ru/logo-wheel.png",
        "@id": "https://www.auto-14.ru/#organization",
        "url": "https://www.auto-14.ru",
        "dateModified": "2026-09-28",
        "description": "Автосервис в Казани (Константиновка, ул. Заречная 5Б). Компьютерный 3D сход-развал Hoffman, ремонт подвески, шиномонтаж и ТО.",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "165"
        },
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
            "latitude": 55.809049,
            "longitude": 49.264877
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
            "https://yandex.ru/maps/org/avto14/108623850068/",
            "https://2gis.ru/kazan/firm/70000001065947100",
            "https://www.avito.ru/brands/i165449740",
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
                        "name": "Диагностика ходовой"
                    }
                }
            ]
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Павел Парамошков" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "Сделал Сход-Развал который не мог нормально сделать 2.5 года Цена супер !Сервис На высоте ! Мастер Золотые Руки !!! Всем советую не пожалеете"
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Светлана Ханова" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                "reviewBody": "Выбрала в 2ГИС по отзывам. Нужна была хорошая балансировка, развал и попросила сделать диагностику ходовой. После диагностики нужен был ремонт, заказали запчасти и все сделали быстро и качественно."
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Где в Казани (в Константиновке) сделать качественную диагностику ходовой и нужно ли записываться?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Наш автосервис «Авто14» находится по адресу ул. Заречная 5Б (жилой массив Константиновка, Советский район). Мы проводим тщательную диагностику подвески на подъемнике. Рекомендуем записываться заранее, чтобы не ждать в очереди. Осмотр занимает около 30 минут."
                }
            },
            {
                "@type": "Question",
                "name": "Сколько стоит 3D сход-развал на Заречной 5Б и сколько времени это занимает?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Цена на 3D развал-схождение начинается от 1400 рублей (зависит от оси и марки авто). Мы используем точный немецкий стенд Hoffman. Если все регулировочные болты откручиваются нормально, настройка геометрии колес занимает 30-40 минут."
                }
            },
            {
                "@type": "Question",
                "name": "Даете ли вы гарантию на ремонт подвески и запчасти?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Да, СТО «Авто14» дает честную гарантию на все выполненные работы по ремонту ходовой части. Если вы заказываете автозапчасти через нас, на них также действует официальная гарантия производителя."
                }
            },
            {
                "@type": "Question",
                "name": "Машину тянет в сторону или неравномерно изнашивается резина. Где это исправить в Казани?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Скорее всего, нарушена геометрия колес или есть износ элементов ходовой. Приезжайте в автосервис «Авто14» (ул. Заречная 5Б). Наши мастера найдут причину и при необходимости сделают высокоточный 3D сход-развал, чтобы вернуть автомобилю идеальную управляемость и спасти ваши шины."
                }
            },
            {
                "@type": "Question",
                "name": "Какие запчасти использует автосервис Авто14 в Казани?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Автосервис «Авто14» использует только сертифицированные запчасти с официальной гарантией производителя. Наши мастера со стажем от 10 лет строго контролируют качество всех резьбовых соединений и расходников. Мы беремся за ремонт ходовой любой сложности — от замены сайлентблоков до полной переборки подвески."
                }
            },
            {
                "@type": "Question",
                "name": "Нужно ли ждать в очереди в автосервисе Авто14?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Нет, в автосервисе «Авто14» не нужно ждать в очереди. Мы принимаем автомобили строго по предварительной записи, что гарантирует обслуживание точно в назначенное время без утомительного ожидания."
                }
            }
        ]
    };

    return (
        <script
            id="schema-markup"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify([autoRepairSchema, faqSchema]) }}
        />
    );
}
