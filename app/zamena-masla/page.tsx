"use client";

import ServicePageLayout from '../components/ServicePageLayout';
import { Settings, ShieldCheck, Clock, Droplet } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getCurrentSeasonYear } from '../lib/season';

export default function ZamenaMasla() {
    const { language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    return (
        <ServicePageLayout
            title={l("Замена масла в двигателе", "Engine Oil Change")}
            description={l(
                "Экспресс-замена моторного масла и фильтров в автосервисе «Авто14» на ул. Заречная 5Б в Казани. Процедура занимает 20–30 минут. Стоимость замены масла в ДВС составляет от 1000 рублей по прейскуранту. Подбираем моторное масло под заводские допуски автомобиля и доставляем расходники за 2 часа. При замене масла мастер проводит визуальный осмотр днища на предмет течей бесплатно.",
                "Express engine oil and filter change at Avto14 auto service, 5B Zarechnaya St, Kazan. The procedure takes 20–30 minutes with prices starting from 1000 ₽ per service price list. We select oil strictly matching manufacturer specifications and deliver filters within 2 hours. Visual inspection for fluid leaks is included free."
            )}
            price={l("от 1000₽", "from 1000₽")}
            heroImage="/job/oil1.jpg"
            symptoms={[
                l("Подошел пробег (5-7 тыс. км)", "Mileage due (5–7K km)"),
                l("Масло стало черным или густым", "Oil turned black or thick"),
                l("Двигатель работает громче обычного", "Engine louder than usual"),
                l("Проверка перед дальней поездкой", "Pre-trip inspection")
            ]}
            features={[
                {
                    icon: Clock,
                    title: l("20–30 минут", "20–30 minutes"),
                    desc: l("Оперативная работа в боксе без очередей. Вы можете присутствовать при замене.", "Quick service without queues. You're welcome to watch.")
                },
                {
                    icon: Droplet,
                    title: l("Гарантия качества", "Quality guaranteed"),
                    desc: l("Используем сертифицированные моторные масла и оригинальные фильтры.", "Only certified oils and OEM filters.")
                },
                {
                    icon: ShieldCheck,
                    title: l("Доставка расходников за 2 часа", "2-Hour delivery"),
                    desc: l("Подберем фильтры и масло под VIN вашего авто и доставим со склада за 2 часа.", "We match filters and oil to your VIN and deliver in 2 hours.")
                }
            ]}
            processSteps={[
                {
                    title: l("Подбор масла", "Oil selection"),
                    desc: l("Поможем с выбором подходящего масла (по заводскому допуску и вязкости).", "We'll help pick the right oil (by OEM spec and viscosity).")
                },
                {
                    title: l("Слив отработки", "Drain old oil"),
                    desc: l("Полное удаление отработанного масла через сливную пробку в картере.", "Complete removal of used oil through the crankcase drain plug.")
                },
                {
                    title: l("Замена фильтра", "Filter replacement"),
                    desc: l("Установка нового масляного фильтра с заменой уплотнительного кольца.", "Installing a new oil filter with fresh O-ring.")
                },
                {
                    title: l("Заливка масла", "Fill new oil"),
                    desc: l("Заливка свежего масла точно по заводскому уровню щупа.", "Fresh oil filled accurately to factory dipstick level.")
                },
                {
                    title: l("Финальная проверка", "Final check"),
                    desc: l("Запуск двигателя, проверка давления и отсутствия течей под автомобилем.", "Engine start, pressure check, and underbody leak verification.")
                }
            ]}
            priceTable={
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-black shadow-[6px_6px_0_#000] max-w-4xl mx-auto text-black">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                        {l("Прайс-лист на замену масел и фильтров", "Oil & Filter Service Price List")}
                    </h2>
                    <p className="text-xs md:text-sm font-bold opacity-60 mb-6 uppercase tracking-wider">
                        {l("Казань, ул. Заречная 5Б • Доставка расходников от 2 часов", "Kazan, 5B Zarechnaya St • 2-Hour Parts Delivery")}
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
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Замена масла в ДВС и масляного фильтра</td>
                                    <td className="p-3 md:p-4 opacity-70">20–30 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 1 000 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Снятие и установка металлической защиты картера</td>
                                    <td className="p-3 md:p-4 opacity-70">5–10 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">300 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Замена воздушного фильтра двигателя</td>
                                    <td className="p-3 md:p-4 opacity-70">5–10 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 300 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Замена салонного фильтра</td>
                                    <td className="p-3 md:p-4 opacity-70">10–15 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 400 ₽</td>
                                </tr>
                                <tr className="bg-brand-yellow/20">
                                    <td className="p-3 md:p-4 font-black">Осмотр днища на течи при замене масла</td>
                                    <td className="p-3 md:p-4 opacity-70">5 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-green-700 whitespace-nowrap">0 ₽ (Бесплатно)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-xs font-bold opacity-60 gap-2">
                        <span>{l("Все расходники подбираем под VIN вашего автомобиля.", "Consumables matched to your vehicle VIN.")}</span>
                        <span className="font-black text-black opacity-100">{l(`Цены актуальны ${getCurrentSeasonYear('ru')}`, `Valid for ${getCurrentSeasonYear('en')}`)}</span>
                    </div>
                </div>
            }
            faq={[
                {
                    question: l("Сколько стоит замена масла в ДВС?", "How much does an oil change cost?"),
                    answer: l("Работа по замене моторного масла и фильтра — от 1000 ₽ по прайс-листу сервиса.", "Labor starts at 1,000 ₽ per service price list.")
                },
                {
                    question: l("Как часто нужно менять масло?", "How often should I change oil?"),
                    answer: l("Мы рекомендуем интервал 7–8 тысяч км для условий городской езды по Казани.", "We recommend every 7–8K km for city driving conditions in Kazan.")
                },
                {
                    question: l("Можно ли приехать со своим маслом и фильтрами?", "Can I bring my own oil?"),
                    answer: l("Да, конечно. Вы оплачиваете только саму работу мастера по замене.", "Yes! You only pay for the mechanic's labor.")
                },
                {
                    question: l("Сколько времени занимает процедура?", "How long does it take?"),
                    answer: l("Замена масла и фильтра занимает 20–30 минут, очередей нет благодаря предварительной записи.", "The service takes 20–30 minutes with zero wait time by appointment.")
                }
            ]}
        />
    );
}
