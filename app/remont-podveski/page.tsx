"use client";

import ServicePageLayout from '../components/ServicePageLayout';
import { Settings, Search, ShieldCheck, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getCurrentSeasonYear } from '../lib/season';

export default function RemontPodveski() {
    const { language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    return (
        <ServicePageLayout
            title={l("Ремонт Ходовой", "Suspension Repair")}
            description={l(
                "Комплексный ремонт ходовой части и подвески автомобилей в Казани на ул. Заречная 5Б. Устраняем люфты, стуки и скрипы за 1 визит. Стоимость работ по замене элементов подвески начинается от 600 рублей по прайсу мастерской, диагностика на подъёмнике проводится бесплатно (0 рублей). Запчасти со склада партнёров доставляем в бокс за 2 часа с гарантией.",
                "Comprehensive suspension and chassis repair in Kazan at 5B Zarechnaya St. We eliminate rattles and play in a single visit. Replacement of suspension parts starts from 600 ₽, lift inspection is free (0 ₽). Spare parts are delivered to the garage within 2 hours with warranty."
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
                    title: l("Гарантия на работы", "Workmanship warranty"),
                    desc: l("Честная гарантия на установленные детали и выполненные слесарные работы.", "Warranty on installed parts and repair work.")
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
                    desc: l("Бесплатный осмотр всех узлов: рычаги, шаровые, сайлентблоки, амортизаторы, ступицы.", "Free inspection: control arms, ball joints, bushings, shocks, hubs.")
                },
                {
                    title: l("Согласование сметы", "Cost estimate"),
                    desc: l("Показываем вам неисправности прямо на подъёмнике. Называем точную цену работ и запчастей.", "We show you the issues right on the lift and give exact prices.")
                },
                {
                    title: l("Ремонт", "Repair"),
                    desc: l("Замена изношенных деталей. Используем профессиональное оборудование и пресс.", "Replacement of worn parts using professional hydraulic press and tools.")
                },
                {
                    title: l("Протяжка под нагрузкой", "Loaded torque"),
                    desc: l("Финальная затяжка сайлентблоков производится в рабочем положении подвески.", "Final bushing torque is applied with the suspension under load.")
                },
                {
                    title: l("Развал-схождение", "Wheel alignment"),
                    desc: l("При замене рычагов или рулевых тяг — регулировка углов на стенде Hoffman 3D.", "Precise alignment adjustment on the Hoffman 3D stand after suspension work.")
                }
            ]}
            priceTable={
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-black shadow-[6px_6px_0_#000] max-w-4xl mx-auto text-black">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                        {l("Прайс-лист на ремонт подвески и ходовой", "Suspension Repair Price List")}
                    </h2>
                    <p className="text-xs md:text-sm font-bold opacity-60 mb-6 uppercase tracking-wider">
                        {l("Казань, ул. Заречная 5Б • Слесарный пост • Доставка запчастей за 2 часа", "Kazan, 5B Zarechnaya St • 2-Hour Parts Delivery")}
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-4 border-black bg-black text-white text-xs md:text-sm uppercase tracking-wider font-black">
                                    <th className="p-3 md:p-4 rounded-tl-xl">{l("Вид работы", "Service")}</th>
                                    <th className="p-3 md:p-4">{l("Время", "Duration")}</th>
                                    <th className="p-3 md:p-4 rounded-tr-xl text-right">{l("Стоимость", "Price")}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-black/10 font-bold text-sm md:text-base">
                                <tr className="bg-brand-yellow/20">
                                    <td className="p-3 md:p-4 font-black">Диагностика ходовой части</td>
                                    <td className="p-3 md:p-4 opacity-70">20–30 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-green-700 whitespace-nowrap">0 ₽ (Бесплатно)</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Перепрессовка сайлентблоков</td>
                                    <td className="p-3 md:p-4 opacity-70">40–60 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 600 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Замена стоек стабилизатора</td>
                                    <td className="p-3 md:p-4 opacity-70">20–30 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 750 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Замена тормозных колодок (ось)</td>
                                    <td className="p-3 md:p-4 opacity-70">30–40 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 800 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Замена рычагов подвески</td>
                                    <td className="p-3 md:p-4 opacity-70">40–60 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 1 000 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Замена рулевых тяг</td>
                                    <td className="p-3 md:p-4 opacity-70">40–60 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 1 800 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Замена амортизаторов</td>
                                    <td className="p-3 md:p-4 opacity-70">50–80 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 1 900 ₽</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-xs font-bold opacity-60 gap-2">
                        <span>{l("Все детали затягиваются динамометрическим ключом под рабочей нагрузкой.", "All parts tightened to spec under loaded suspension.")}</span>
                        <span className="font-black text-black opacity-100">{l(`Цены актуальны ${getCurrentSeasonYear('ru')}`, `Valid for ${getCurrentSeasonYear('en')}`)}</span>
                    </div>
                </div>
            }
            faq={[
                {
                    question: l("Какова минимальная стоимость ремонта?", "What's the minimum repair cost?"),
                    answer: l("От 600 ₽. Это цена за прессовку одного сайлентблока на снятом рычаге.", "From 600 ₽ — the price for pressing one bushing on a removed arm.")
                },
                {
                    question: l("Сколько стоит диагностика?", "How much is diagnostics?"),
                    answer: l("Диагностика ходовой части в автосервисе «Авто14» полностью бесплатна (0 ₽). Мастер осматривает автомобиль на подъёмнике и сразу показывает все люфты.", "Suspension diagnostics at Avto14 is completely free (0 ₽). The technician inspects the car on a lift and shows you any issues.")
                },
                {
                    question: l("Можно ли со своими запчастями?", "Can I bring my own parts?"),
                    answer: l("Да, можно. Но гарантию мы дадим только на работу.", "Yes. Warranty covers labor only in that case.")
                },
                {
                    question: l("Как долго длится ремонт?", "How long does repair take?"),
                    answer: l("Мелкий ремонт – 30-60 минут. Серьезный ремонт – от 2 до 3 часов. Запчасти со склада подвозим за 2 часа.", "Minor repair: 30–60 min. Major work: 2–3 hours. Warehouse parts delivered in 2 hours.")
                }
            ]}
        />
    );
}
