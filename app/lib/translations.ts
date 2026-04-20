export type Language = 'ru' | 'en';

export const translations = {
    ru: {
        nav: {
            home: "Главная",
            services: "Услуги",
            reviews: "Отзывы",
            contacts: "Контакты",
            gallery: "Галерея"
        },
        hero: {
            title: "Профессиональный 3D сход-развал и ремонт ходовой в Казани",
            title_pt1: "Профессиональный",
            title_highlight: "3D сход-развал",
            title_pt2: "и ремонт ходовой в Казани",
            subtitle: "Исправим стуки, вернем управляемость и защитим шины от износа за 1 визит на эталонном немецком стенде Hoffman.",
            subtitle_p1: "Ремонт ходовой",
            subtitle_p2: "3D сход-развал",
            subtitle_p3: "Шиномонтаж",
            cta_book: "Узнать причину стука бесплатно",
            guarantee: "Согласуем цену до начала работ. Никаких скрытых платежей",
            cta_route: "Маршрут",
            consultation_free: "Консультация всегда бесплатная",
            pain_points: {
                pulls_aside: "Тянет машину в сторону?",
                wheel_crooked: "Руль стоит криво?",
                throws_bumps: "Кидает машину по колее?",
                bad_handling: "Плохая управляемость?",
                something_knocks: "Что-то, где-то стучит?",
                alignment_check: "Давно не проверяли схождение?"
            }
        },
        services_section: {
            title: "Наши",
            title2: "Услуги",
            subtitle: "Всё, что нужно вашему автомобилю.",
            subtitle2: "Быстро, честно, качественно.",
            more: "Подробнее",
            alignment: {
                name: "3D Развал-схождение",
                desc: "Стенд Hoffman 3D. Высочайшая точность регулировки углов. От 1200 ₽."
            },
            suspension: {
                name: "Ремонт ходовой",
                desc: "Диагностика и устранение неисправностей подвески. От 600 ₽."
            },
            tires: {
                name: "Шиномонтаж",
                desc: "Сезонная переобувка, балансировка, правка дисков. От 2200 ₽."
            },
            oil: {
                name: "Замена масла",
                desc: "Экспресс-замена масла и фильтров. Качественные расходные материалы. От 1000 ₽."
            },
            diagnostics: {
                name: "Диагностика",
                desc: "Диагностика подвески и ходовой части. Найдем причину стука. 0 ₽ при ремонте."
            }
        },
        benefits: {
            title: "Нам доверяют",
            title2: "13 000+ клиентов",
            hoffman: {
                title: "3D Стенд",
                title2: "Hoffman",
                desc: "Премиальное немецкое оборудование. Точность регулировки до 0.01°. Гарантируем идеальный результат."
            },
            masters: {
                title: "Опытные",
                title2: "мастера",
                desc: "Специалисты с опытом 10+ лет. Знаем особенности подвески любой марки: от Lada до Porsche."
            },
            prices: {
                title: "Честные",
                title2: "цены",
                desc: "Никаких скрытых платежей и «накруток». Согласовываем стоимость до начала работ. Честный подход к каждому клиенту."
            }
        },
        gallery_section: {
            title: "Галерея"
        },
        seo: {
            title: "Популярные услуги в Казани",
            keywords: ["Развал", "Сход-развал", "Шиномонтаж", "Замена масла", "Ремонт ходовой", "Диагностика подвески", "3D Сход-развал Казань", "Автосервис Казань"]
        },
        footer: {
            map_title: "На карте",
            brand: "Авто14",
            ready: "Готовы записаться?"
        },
        common: {
            phone: "+7 (999) 269-93-59",
            address: "ул. Заречная 5Б, Казань",
            working_hours: "Пн-Сб: 9:00 - 20:00",
            call_us: "Позвонить",
            booking: "Запись",
            booking_desc: "Оставьте заявку — перезвоним за 5–10 минут, назовём цену и подберём время.",
            submit: "Жду звонка (перезвоним быстро)",
            sending: "Отправка...",
            policy: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных"
        },
        booking: {
            service_label: "Услуга",
            car_label: "Марка и модель авто",
            car_placeholder: "Например: Kia Rio",
            phone_label: "Ваш телефон",
            problem_label: "Опишите проблему",
            problem_placeholder: "Например: стук в подвеске справа...",
            services: {
                alignment: "3D Сход-развал",
                suspension: "Ремонт ходовой",
                parts: "Подбор запчастей",
                maintenance: "ТО (Замена масла и др.)",
                other: "Другое"
            }
        },
        faq: {
            title: "Частые вопросы",
            title2: "& ответы",
            items: [
                {
                    q: "Где сделать 3D развал-схождение в Казани?",
                    a: "Автосервис Авто14 находится в Константиновке по адресу ул. Заречная 5Б. Мы используем современный 3D стенд Hoffman, который гарантирует высочайшую точность регулировки."
                },
                {
                    q: "Как часто и когда нужно проверять развал-схождение?",
                    a: "Мы рекомендуем проверять углы при каждой сезонной смене шин. Также проверка обязательна после попадания в глубокую яму, при неравномерном износе резины или после любого ремонта элементов подвески."
                },
                {
                    q: "Какие автомобили вы обслуживаете?",
                    a: "Мы работаем практически со всеми марками авто: от Lada и VAZ до современных иномарок (Kia, Toyota, BMW, Mercedes) и автомобилей старше 15 лет."
                },
                {
                    q: "Нужно ли записываться заранее?",
                    a: "Да, во избежание очередей мы работаем по предварительной записи. Вы можете записаться через форму на сайте или по телефону — выберем удобное для вас время."
                },
                {
                    q: "Даете ли вы гарантию на работы?",
                    a: "Конечно. Мы несем полную ответственность за качество выполненных работ. На все услуги нашего сервиса действует официальная гарантия."
                },
                {
                    q: "Можно ли приехать со своими запчастями?",
                    a: "Да, мы без проблем установим ваши запчасти. Однако в этом случае гарантия будет распространяться только на правильность установки, но не на саму деталь."
                },
                {
                    q: "У вас есть запчасти в наличии?",
                    a: "Своего склада запчастей у нас нет, но мы сотрудничаем с крупнейшими поставщиками Казани. При заказе у нас любые детали доставляются прямо в сервис в течение 2 часов."
                },
                {
                    q: "Бесплатная ли у вас диагностика?",
                    a: "Диагностика ходовой части проводится бесплатно при условии, что выявленные неисправности вы будете устранять в нашем автосервисе."
                },
                {
                    q: "Сколько времени занимает процедура развала?",
                    a: "В среднем процедура 3D развал-схождения на одну ось занимает от 20 до 40 минут, в зависимости от состояния регулировочных болтов."
                },
                {
                    q: "На каком оборудовании вы работаете?",
                    a: "Наш главный инструмент — профессиональный немецкий 3D стенд Hoffman. Это эталон точности в мире авторемонта, исключающий человеческий фактор."
                }
            ]
        },
        pricing: {
            title: "Честные",
            title2: "Цены",
            tabs: {
                domestic: "Отечественные",
                foreign: "Иномарки",
                commercial: "Коммерческие"
            },
            disclaimer: "Это базовые цены. Точную стоимость назовём после бесплатной диагностики конкретно вашего автомобиля.",
            from: "от",
            rub: "₽",
            categories: {
                alignment: "Развал-схождение",
                suspension: "Регулярный ремонт",
                oil: "Тех. обслуживание",
                tires: "Шиномонтаж"
            }
        },
        spinWheel: {
            title: "Подожди!",
            subtitle: "Крути колесо — получи подарок от Авто14",
            phonePlaceholder: "+7 (___) ___-__-__",
            phoneLabel: "Твой телефон",
            spinButton: "Крутить колесо! 🎰",
            prizes: [
                "Бесплатная диагностика",
                "Скидка 10% на развал",
                "Скидка 10% на шиномонтаж",
                "Скидка 10% на замену масла",
                "Балансировка 4 колёс",
                "Попробуй ещё раз"
            ],
            winTitle: "🎉 Поздравляем!",
            winSubtitle: "Ты выиграл:",
            timerText: "Приз действует:",
            claimButton: "Записаться и забрать приз →",
            declineText: "Нет, спасибо",
            policy: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных",
            slotsLeft: "Осталось записей на эту неделю:"
        }
    },
    en: {
        nav: {
            home: "Home",
            services: "Services",
            reviews: "Reviews",
            contacts: "Contacts",
            gallery: "Gallery"
        },
        hero: {
            title: "Professional 3D Wheel Alignment and Suspension Repair in Kazan",
            title_pt1: "Professional",
            title_highlight: "3D Wheel Alignment",
            title_pt2: "and Suspension Repair in Kazan",
            subtitle: "We'll fix knocks, restore handling, and protect your tires from wear in 1 visit on the benchmark German Hoffman stand.",
            subtitle_p1: "Suspension Repair",
            subtitle_p2: "3D Alignment",
            subtitle_p3: "Tire Service",
            cta_book: "Find out the cause for free",
            guarantee: "We agree on the price before starting work. No hidden fees",
            cta_route: "Directions",
            consultation_free: "Free consultation — always",
            pain_points: {
                pulls_aside: "Car pulls to the side?",
                wheel_crooked: "Steering wheel off-center?",
                throws_bumps: "Drifts over bumps?",
                bad_handling: "Poor handling?",
                something_knocks: "Hearing strange noises?",
                alignment_check: "Alignment overdue?"
            }
        },
        services_section: {
            title: "Our",
            title2: "Services",
            subtitle: "Everything your car needs.",
            subtitle2: "Fast, honest, quality work.",
            more: "Learn more",
            alignment: {
                name: "3D Wheel Alignment",
                desc: "Hoffman 3D stand. Precision angle adjustment to factory specs. From 1200 ₽."
            },
            suspension: {
                name: "Suspension Repair",
                desc: "Full diagnostics and repair of suspension components. From 600 ₽."
            },
            tires: {
                name: "Tire Service",
                desc: "Seasonal tire swaps, balancing, and rim straightening. From 2200 ₽."
            },
            oil: {
                name: "Oil Change",
                desc: "Express oil & filter replacement. Premium materials only. From 1000 ₽."
            },
            diagnostics: {
                name: "Diagnostics",
                desc: "Full suspension and chassis inspection. We'll find the source of that noise. Free with repair."
            }
        },
        benefits: {
            title: "Trusted by",
            title2: "13,000+ clients",
            hoffman: {
                title: "3D Stand",
                title2: "Hoffman",
                desc: "Premium German equipment. Alignment precision to 0.01°. We guarantee a perfect result."
            },
            masters: {
                title: "Expert",
                title2: "mechanics",
                desc: "Specialists with 10+ years of experience. We know the suspension specifics of every brand — from Lada to Porsche."
            },
            prices: {
                title: "Transparent",
                title2: "pricing",
                desc: "No hidden fees or markups. We agree on the cost before work begins. Honest approach with every customer."
            }
        },
        gallery_section: {
            title: "Gallery"
        },
        seo: {
            title: "Popular services in Kazan",
            keywords: ["Alignment", "Wheel alignment", "Tire service", "Oil change", "Suspension repair", "Chassis diagnostics", "3D Alignment Kazan", "Auto service Kazan"]
        },
        footer: {
            map_title: "On the map",
            brand: "Avto14",
            ready: "Ready to book?"
        },
        common: {
            phone: "+7 (999) 269-93-59",
            address: "5B Zarechnaya St, Kazan",
            working_hours: "Mon–Sat: 9 AM – 8 PM",
            call_us: "Call Us",
            booking: "Booking",
            booking_desc: "Leave a request — we'll call back in 5–10 minutes, name the price and schedule your visit.",
            submit: "Waiting for a call (we'll call back quickly)",
            sending: "Sending...",
            policy: "By clicking, you agree to the processing of personal data"
        },
        booking: {
            service_label: "Service",
            car_label: "Car make & model",
            car_placeholder: "e.g. Kia Rio",
            phone_label: "Your phone",
            problem_label: "Describe the issue",
            problem_placeholder: "e.g. knocking noise in suspension...",
            services: {
                alignment: "3D Wheel Alignment",
                suspension: "Suspension Repair",
                parts: "Parts Selection",
                maintenance: "Maintenance (Oil change, etc.)",
                other: "Other"
            }
        },
        faq: {
            title: "Frequently Asked",
            title2: "Questions",
            items: [
                {
                    q: "Where can I get 3D wheel alignment in Kazan?",
                    a: "Avto14 is located at 5B Zarechnaya St in Konstantinovka. We use a Hoffman 3D alignment stand — the gold standard in precision."
                },
                {
                    q: "How often should I check my alignment?",
                    a: "We recommend checking it with every seasonal tire change. It's also a must after hitting a deep pothole, uneven tire wear, or any suspension repair."
                },
                {
                    q: "What car brands do you service?",
                    a: "We work with virtually all brands — from Lada and VAZ to modern imports like Kia, Toyota, BMW, Mercedes — including cars over 15 years old."
                },
                {
                    q: "Do I need to book in advance?",
                    a: "Yes, we work by appointment to avoid wait times. You can book online or call — we'll find a time that works for you."
                },
                {
                    q: "Do you offer a warranty?",
                    a: "Absolutely. We stand behind every job. All our services come with an official warranty."
                },
                {
                    q: "Can I bring my own parts?",
                    a: "Of course. We'll install your parts — though in that case, our warranty covers the installation only, not the part itself."
                },
                {
                    q: "Do you stock spare parts?",
                    a: "We don't keep parts in stock, but we partner with Kazan's largest suppliers. Any part can be delivered directly to our shop within 2 hours."
                },
                {
                    q: "Is your diagnostics free?",
                    a: "Chassis diagnostics are free if you choose to have the repairs done at our shop."
                },
                {
                    q: "How long does a wheel alignment take?",
                    a: "On average, 3D alignment for one axle takes 20 to 40 minutes, depending on the condition of the adjustment bolts."
                },
                {
                    q: "What equipment do you use?",
                    a: "Our main tool is a professional German Hoffman 3D stand — the benchmark for precision in automotive repair, eliminating human error."
                }
            ]
        },
        pricing: {
            title: "Fair",
            title2: "Pricing",
            tabs: {
                domestic: "Domestic",
                foreign: "Foreign",
                commercial: "Commercial"
            },
            disclaimer: "These are starting prices. We'll give you an exact quote after a free inspection of your vehicle.",
            from: "from",
            rub: "₽",
            categories: {
                alignment: "Wheel Alignment",
                suspension: "General Repair",
                oil: "Maintenance",
                tires: "Tire Service"
            }
        },
        spinWheel: {
            title: "Wait!",
            subtitle: "Spin the wheel — get a gift from Avto14",
            phonePlaceholder: "+7 (___) ___-__-__",
            phoneLabel: "Your phone",
            spinButton: "Spin the wheel! 🎰",
            prizes: [
                "Free diagnostics",
                "10% off alignment",
                "10% off tire service",
                "10% off oil change",
                "Free 4-wheel balancing",
                "Try again"
            ],
            winTitle: "🎉 Congratulations!",
            winSubtitle: "You won:",
            timerText: "Prize valid for:",
            claimButton: "Book & claim your prize →",
            declineText: "No, thanks",
            policy: "By clicking, you agree to the processing of personal data",
            slotsLeft: "Slots left this week:"
        }
    }
};
