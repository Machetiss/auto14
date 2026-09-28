"use client";

import ServicePageLayout from '../components/ServicePageLayout';
import { Settings, Search, UserCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getCurrentSeasonYear } from '../lib/season';

export default function Diagnostika() {
    const { language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    return (
        <ServicePageLayout
            title={l("Диагностика подвески", "Suspension Diagnostics")}
            description={l(
                "Комплексная диагностика ходовой части и рулевого управления в Казани (Константиновка, Заречная 5Б). Мастер проверяет сайлентблоки, шаровые опоры, амортизаторы, ступицы и рулевые тяги на подъёмнике. Осмотр занимает 20–35 минут. Диагностика подвески бесплатна. Мастер наглядно показывает все люфты и износ деталей непосредственно на подъёмнике.",
                "Comprehensive suspension and steering diagnostics in Kazan at 5B Zarechnaya St. Our technician inspects bushings, ball joints, shock absorbers, hubs, and tie rods on a lift in 20–35 minutes. Suspension diagnostics is free. The mechanic clearly demonstrates any wear directly on the lift."
            )}
            price={l("0₽ (Бесплатно)", "0₽ (Free)")}
            heroImage="/gallery/1.jpg"
            symptoms={[
                l("Посторонние стуки при проезде неровностей", "Strange knocking over bumps"),
                l("Гул или шум во время движения", "Humming or noise while driving"),
                l("Вибрация на руле или кузове", "Vibration in steering or body"),
                l("Машину тянет в сторону", "Car pulls to one side"),
                l("Неравномерный износ шин", "Uneven tire wear"),
                l("Покупка подержанного автомобиля", "Buying a used car")
            ]}
            features={[
                {
                    icon: Settings,
                    title: l("Осмотр на подъемнике", "Lift inspection"),
                    desc: l("Проверка всех узлов: рычаги, сайлентблоки, шаровые, наконечники, амортизаторы.", "Full check: arms, bushings, ball joints, tie rods, shocks.")
                },
                {
                    icon: Search,
                    title: l("Честный подход", "Honest approach"),
                    desc: l("Покажем все неисправности лично на подъёмнике, объясним, что критично, а что нет.", "We'll show you every issue in person on the lift.")
                },
                {
                    icon: UserCheck,
                    title: l("Опыт мастеров от 10 лет", "10+ Years Experience"),
                    desc: l("Точно определяем причину стука без лишних навязанных замен.", "Accurately identifying knocking sounds without unnecessary parts replacement.")
                }
            ]}
            processSteps={[
                {
                    title: l("Опрос клиента", "Customer interview"),
                    desc: l("Выслушаем ваши жалобы на звуки и поведение автомобиля на дороге.", "We'll listen to your concerns about noises and handling.")
                },
                {
                    title: l("Подъем автомобиля", "Vehicle lifting"),
                    desc: l("Заезд в бокс без ожидания и подъем на платформу для полного доступа к узлам.", "Direct entry into the bay and lifting for unobstructed chassis access.")
                },
                {
                    title: l("Осмотр на подъемнике", "Lift inspection"),
                    desc: l("Визуальная и механическая проверка состояния резинометаллических элементов и стоек.", "Visual and mechanical testing of bushings and shocks.")
                },
                {
                    title: l("Проверка люфтов", "Play check"),
                    desc: l("Диагностика ступичных подшипников, рулевых тяг, наконечников и шаровых опор с монтировкой.", "Testing wheel bearings, tie rods, and ball joints.")
                },
                {
                    title: l("Наглядный разбор с мастером", "In-person inspection"),
                    desc: l("Мастер лично показывает клиенту состояние каждого узла под автомобилем.", "The mechanic walks you through the vehicle underside in person.")
                }
            ]}
            priceTable={
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-black shadow-[6px_6px_0_#000] max-w-4xl mx-auto text-black">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                        {l("Регламент бесплатной диагностики ходовой", "Free Chassis Inspection Procedure")}
                    </h2>
                    <p className="text-xs md:text-sm font-bold opacity-60 mb-6 uppercase tracking-wider">
                        {l("Казань, ул. Заречная 5Б • Диагностика подвески бесплатна", "Kazan, 5B Zarechnaya St • Free suspension diagnostics")}
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-4 border-black bg-black text-white text-xs md:text-sm uppercase tracking-wider font-black">
                                    <th className="p-3 md:p-4 rounded-tl-xl">{l("Проверяемый узел", "Chassis Element")}</th>
                                    <th className="p-3 md:p-4">{l("Что проверяется", "What is Checked")}</th>
                                    <th className="p-3 md:p-4">{l("Время", "Duration")}</th>
                                    <th className="p-3 md:p-4 rounded-tr-xl text-right">{l("Стоимость", "Price")}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-black/10 font-bold text-sm md:text-base">
                                <tr className="hover:bg-brand-yellow/10 transition-colors">
                                    <td className="p-3 md:p-4 font-black">Передняя подвеска</td>
                                    <td className="p-3 md:p-4 opacity-70">Рычаги, шаровые опоры, сайлентблоки, стойки стабилизатора</td>
                                    <td className="p-3 md:p-4 opacity-70">10 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-green-700 whitespace-nowrap">0 ₽ (Бесплатно)</td>
                                </tr>
                                <tr className="hover:bg-brand-yellow/10 transition-colors">
                                    <td className="p-3 md:p-4 font-black">Задняя подвеска</td>
                                    <td className="p-3 md:p-4 opacity-70">Сайлентблоки балки / тяг, амортизаторы, пружины</td>
                                    <td className="p-3 md:p-4 opacity-70">10 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-green-700 whitespace-nowrap">0 ₽ (Бесплатно)</td>
                                </tr>
                                <tr className="hover:bg-brand-yellow/10 transition-colors">
                                    <td className="p-3 md:p-4 font-black">Рулевое управление</td>
                                    <td className="p-3 md:p-4 opacity-70">Рулевые наконечники, тяги, пыльники, люфт рейки</td>
                                    <td className="p-3 md:p-4 opacity-70">5–10 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-green-700 whitespace-nowrap">0 ₽ (Бесплатно)</td>
                                </tr>
                                <tr className="hover:bg-brand-yellow/10 transition-colors">
                                    <td className="p-3 md:p-4 font-black">Ступичные узлы</td>
                                    <td className="p-3 md:p-4 opacity-70">Проверка подшипников на люфт, гул и заедание</td>
                                    <td className="p-3 md:p-4 opacity-70">5 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-green-700 whitespace-nowrap">0 ₽ (Бесплатно)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-xs font-bold opacity-60 gap-2">
                        <span>{l("Мастер наглядно показывает клиенту состояние каждого узла на подъёмнике.", "The mechanic shows you all issues in person directly on the lift.")}</span>
                        <span className="font-black text-black opacity-100">{l(`Актуально ${getCurrentSeasonYear('ru')}`, `Valid for ${getCurrentSeasonYear('en')}`)}</span>
                    </div>
                </div>
            }
            faq={[
                {
                    question: l("Диагностика действительно бесплатная?", "Is the diagnostics really free?"),
                    answer: l("Да, диагностика подвески бесплатна. Никаких скрытых условий, даже если вы не будете ремонтироваться сразу.", "Yes, suspension diagnostics is free with zero conditions.")
                },
                {
                    question: l("Сколько времени занимает осмотр?", "How long does it take?"),
                    answer: l("Осмотр на подъемнике занимает от 20 до 35 минут.", "Usually takes 20 to 35 minutes.")
                },
                {
                    question: l("Можно ли присутствовать в ремзоне?", "Can I be present in the service bay?"),
                    answer: l("Да, вы находитесь рядом с автомобилем на подъемнике, и мастер лично показывает все найденные люфты.", "Yes! You can stand next to the lift and inspect everything with our technician.")
                },
                {
                    question: l("Нужно ли записываться заранее?", "Do I need an appointment?"),
                    answer: l("Рекомендуем предварительно записаться по телефону +7 (999) 269-93-59, чтобы подъёмник был свободен точно к вашему приезду без ожидания в очереди.", "We recommend booking in advance by calling +7 (999) 269-93-59 to ensure zero wait time.")
                }
            ]}
        />
    );
}
