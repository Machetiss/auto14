"use client";

import ServicePageLayout from '../components/ServicePageLayout';
import { Settings, Search, ShieldCheck, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function RemontPodveski() {
    const { language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    return (
        <ServicePageLayout
            title={l("Ремонт Ходовой", "Suspension Repair")}
            description={l(
                "Диагностика и устранение любых стуков. Вернем вашему авто комфорт и безопасность.",
                "Diagnostics and repair of any knocking or rattling. We'll restore your car's comfort and safety."
            )}
            price={l("от 600₽", "from 600₽")}
            heroImage="/job/hodovaya.jpg"
            symptoms={[
                l("Стук или гул при проезде неровностей", "Knocking or humming over bumps"),
                l("Хруст при повороте руля", "Crunching when turning the wheel"),
                l("Раскачка кузова после кочек", "Body swaying after bumps"),
                l("Скрипы в подвеске (сайлентблоки)", "Squeaking in suspension (bushings)"),
                l("Вибрация на руле или по кузову", "Vibration in steering or body"),
                l("Автомобиль 'рыскает' по дороге", "Car wanders on the road")
            ]}
            features={[
                {
                    icon: Search,
                    title: l("Точная диагностика", "Precise diagnostics"),
                    desc: l("Найдем реальную причину стука, а не будем менять всё подряд.", "We'll find the real cause — not just replace everything.")
                },
                {
                    icon: ShieldCheck,
                    title: l("Гарантия 6 месяцев", "6-month warranty"),
                    desc: l("На многие запчасти и работы даем расширенную гарантию.", "Extended warranty on many parts and labor.")
                },
                {
                    icon: Settings,
                    title: l("Быстрая доставка запчастей", "Fast parts delivery"),
                    desc: l("Привезем любые запчасти в течение 2-х часов. Подберем оригинал или качественный аналог.", "Any part delivered within 2 hours. OEM or quality aftermarket.")
                }
            ]}
            processSteps={[
                {
                    title: l("Диагностика на подъемнике", "Lift inspection"),
                    desc: l("Осмотр всех узлов: рычаги, шаровые, сайлентблоки, амортизаторы, ступицы.", "Full inspection: control arms, ball joints, bushings, shocks, hubs.")
                },
                {
                    title: l("Согласование сметы", "Cost estimate"),
                    desc: l("Показываем вам неисправности. Называем точную цену работ и запчастей.", "We show you the issues and give an exact price for labor and parts.")
                },
                {
                    title: l("Ремонт", "Repair"),
                    desc: l("Замена изношенных деталей. Используем профессиональное оборудование.", "Replacement of worn parts using professional equipment.")
                },
                {
                    title: l("Протяжка под нагрузкой", "Loaded torque"),
                    desc: l("Финальная затяжка сайлентблоков производится в рабочем положении подвески.", "Final bushing torque is applied with the suspension under load.")
                },
                {
                    title: l("Развал-схождение", "Wheel alignment"),
                    desc: l("При вмешательстве в рулевое или рычаги – обязательная регулировка углов (со скидкой).", "After steering or arm work — alignment adjustment included (discounted).")
                }
            ]}
            faq={[
                {
                    question: l("Какова минимальная стоимость ремонта?", "What's the minimum repair cost?"),
                    answer: l("От 600 ₽. Это цена за прессовку одного сайлентблока на снятом рычаге.", "From 600 ₽ — the price for pressing one bushing on a removed arm.")
                },
                {
                    question: l("Сколько стоит диагностика?", "How much is diagnostics?"),
                    answer: l("Диагностика ходовой стоит 500₽. При последующем ремонте у нас – БЕСПЛАТНО.", "Suspension diagnostics: 500 ₽. Free if you repair with us.")
                },
                {
                    question: l("Можно ли со своими запчастями?", "Can I bring my own parts?"),
                    answer: l("Да, можно. Но гарантию мы дадим только на работу.", "Yes. Warranty covers labor only in that case.")
                },
                {
                    question: l("Как долго длится ремонт?", "How long does repair take?"),
                    answer: l("Мелкий ремонт – 30-60 минут. Серьезный ремонт – от 3 часов.", "Minor repair: 30–60 min. Major work: 3+ hours.")
                }
            ]}
        />
    );
}
