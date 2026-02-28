"use client";

import ServicePageLayout from '../components/ServicePageLayout';
import { Settings, ShieldCheck, Clock, Droplet } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ZamenaMasla() {
    const { language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    return (
        <ServicePageLayout
            title={l("Замена масла в двигателе", "Engine Oil Change")}
            description={l(
                "Экспресс-замена масла в двигателе и КПП. Качественные расходные материалы и профессиональный подход.",
                "Express oil change for engine and transmission. Premium materials and professional service."
            )}
            price={l("от 1000₽", "from 1000₽")}
            heroImage="/job/oil1.jpg"
            symptoms={[
                l("Подошел пробег (5-6 тыс. км)", "Mileage due (5–6K km)"),
                l("Масло стало черным или густым", "Oil turned black or thick"),
                l("Двигатель работает громче обычного", "Engine louder than usual"),
                l("Проверка перед дальней поездкой", "Pre-trip inspection")
            ]}
            features={[
                {
                    icon: Clock,
                    title: l("От 30 минут", "From 30 minutes"),
                    desc: l("Оперативная работа. Вы можете присутствовать при замене.", "Quick service. You're welcome to watch.")
                },
                {
                    icon: Droplet,
                    title: l("Гарантия качества", "Quality guaranteed"),
                    desc: l("Используем только проверенные масла и фильтры.", "Only trusted oils and filters.")
                },
                {
                    icon: ShieldCheck,
                    title: l("Аккуратность", "Clean work"),
                    desc: l("Выполняем работу чисто, не оставляем следов масла под капотом.", "No oil stains left under the hood.")
                }
            ]}
            processSteps={[
                {
                    title: l("Подбор масла", "Oil selection"),
                    desc: l("Поможем с выбором подходящего масла (по допуску и пробегу).", "We'll help pick the right oil (by spec and mileage).")
                },
                {
                    title: l("Слив отработки", "Drain old oil"),
                    desc: l("Полное удаление старого масла вакуумом или через сливную пробку.", "Full removal via vacuum or drain plug.")
                },
                {
                    title: l("Замена фильтра", "Filter replacement"),
                    desc: l("Установка нового масляного фильтра.", "New oil filter installed.")
                },
                {
                    title: l("Заливка масла", "Fill new oil"),
                    desc: l("Заливка свежего масла точно по уровню.", "Fresh oil filled to the correct level.")
                },
                {
                    title: l("Финальная проверка", "Final check"),
                    desc: l("Запуск двигателя, проверка на отсутствие течей.", "Engine start, leak check.")
                }
            ]}
            faq={[
                {
                    question: l("Сколько стоит замена масла?", "How much does an oil change cost?"),
                    answer: l("Работа по замене — от 1000 ₽.", "Labor starts at 1,000 ₽.")
                },
                {
                    question: l("Как часто нужно менять масло?", "How often should I change oil?"),
                    answer: l("Мы рекомендуем интервал 5-7 тысяч км для городских условий.", "We recommend every 5–7K km for city driving.")
                },
                {
                    question: l("Можно ли со своим маслом?", "Can I bring my own oil?"),
                    answer: l("Да, конечно. Вы платите только за работу по замене.", "Yes! You only pay for labor.")
                },
                {
                    question: l("Меняете ли вы масло в АКПП?", "Do you change automatic transmission fluid?"),
                    answer: l("Да, производим как частичную, так и полную замену масла в коробках передач.", "Yes — both partial and full ATF changes.")
                }
            ]}
        />
    );
}
