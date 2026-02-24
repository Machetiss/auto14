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
            title: "Автосервис в Казани",
            subtitle: "Нам в радость — Вам в гордость",
            cta_book: "Записаться",
            cta_route: "Маршрут",
            consultation_free: "Консультация всегда бесплатная",
            pain_points: {
                uneven_wear: "Неравномерный износ",
                bad_handling: "Плохая управляемость",
                wheel_crooked: "Руль стоит криво"
            }
        },
        common: {
            phone: "+7 (999) 269-93-59",
            address: "ул. Заречная 5Б, Казань",
            working_hours: "Пн-Сб: 9:00 - 20:00",
            call_us: "Позвонить",
            booking: "Запись",
            booking_desc: "Оставьте заявку, и мы свяжемся с вами в ближайшее время.",
            submit: "Отправить",
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
            title: "Частые вопросы"
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
            title: "Auto Service in Kazan",
            subtitle: "Our Joy — Your Pride",
            cta_book: "Book Now",
            cta_route: "Route",
            consultation_free: "Consultation is always free",
            pain_points: {
                uneven_wear: "Uneven tire wear",
                bad_handling: "Poor handling",
                wheel_crooked: "Crooked steering wheel"
            }
        },
        common: {
            phone: "+7 (999) 269-93-59",
            address: "Zarechnaya St 5B, Kazan",
            working_hours: "Mon-Sat: 9:00 - 20:00",
            call_us: "Call Us",
            booking: "Booking",
            booking_desc: "Leave a request, and we will contact you shortly.",
            submit: "Book Now",
            sending: "Sending...",
            policy: "By clicking the button, you agree to the processing of personal data"
        },
        booking: {
            service_label: "Service",
            car_label: "Car make and model",
            car_placeholder: "e.g., Kia Rio",
            phone_label: "Your phone",
            problem_label: "Describe the issue",
            problem_placeholder: "e.g., knocking in suspension...",
            services: {
                alignment: "3D Wheel Alignment",
                suspension: "Suspension Repair",
                parts: "Parts Selection",
                maintenance: "Maintenance (Oil change, etc.)",
                other: "Other"
            }
        },
        faq: {
            title: "FAQ"
        }
    }
};
