"use client";

import ServicePageLayout from '../components/ServicePageLayout';
import { Settings, Disc, ShieldCheck, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getCurrentSeasonYear } from '../lib/season';

export default function Shinomontazh() {
    const { language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    return (
        <ServicePageLayout
            title={l("Шиномонтаж и Балансировка", "Tire Service & Balancing")}
            description={l(
                "Сезонный шиномонтаж и балансировка колёс в Казани на ул. Заречная 5Б по предварительной записи без очередей. Полный комплекс работ для четырёх колёс R13–R16 занимает 30 минут, для R17–R20 — до 45 минут. Цена комплекса переобувки начинается от 2200 рублей за комплект по прайс-листу сервиса. Применяем калиброванные станки и затягиваем болты с контролем момента.",
                "Seasonal tire mounting and wheel balancing in Kazan at 5B Zarechnaya St by appointment without waiting. A full swap for four wheels R13–R16 takes 30 minutes, for R17–R20 up to 45 minutes. Complete seasonal package starts from 2200 ₽ per set. We use calibrated machines and torque wrench control."
            )}
            price={l("от 2200₽", "from 2200₽")}
            heroImage="/job/shin.jpg"
            symptoms={[
                l("Наступил сезон (зима/лето)", "Seasonal change (winter/summer)"),
                l("Биение руля на скорости 80-100 км/ч", "Steering vibration at 80–100 km/h"),
                l("Шум резины (неравномерный износ)", "Tire noise (uneven wear)"),
                l("Купили новые шины", "Bought new tires"),
                l("Нужно проверить балансировку", "Need to check balancing"),
                l("Подготовка к дальней поездке", "Preparing for a long trip")
            ]}
            features={[
                {
                    icon: Clock,
                    title: l("По записи", "By appointment"),
                    desc: l("Ценим ваше время. Приезжаете к назначенному часу — заезжаете сразу в бокс.", "We value your time. Arrive at your scheduled time — drive straight into the bay.")
                },
                {
                    icon: Disc,
                    title: l("Бережем диски", "Rim protection"),
                    desc: l("Используем пластиковые насадки, чтобы не поцарапать литье.", "We use plastic guards to prevent scratching alloy wheels.")
                },
                {
                    icon: ShieldCheck,
                    title: l("Гарантия на работы", "Work warranty"),
                    desc: l("Мы уверены в качестве балансировки и даем гарантию.", "We stand behind our balancing quality with a warranty.")
                }
            ]}
            processSteps={[
                {
                    title: l("Демонтаж/Монтаж", "Dismount/Mount"),
                    desc: l("Аккуратная работа на профессиональном станке. Работаем с низким профилем.", "Careful work on professional equipment. Low-profile compatible.")
                },
                {
                    title: l("Балансировка", "Balancing"),
                    desc: l("Калиброванные станки. Клеим грузики так, чтобы их не оторвало керхером на мойке.", "Calibrated machines. Weights applied securely — won't come off at the car wash.")
                },
                {
                    title: l("Установка на авто", "Mounting on car"),
                    desc: l("Затяжка болтов крест-накрест с финишным контролем момента.", "Cross-pattern bolt tightening with final torque check.")
                },
                {
                    title: l("Упаковка", "Packaging"),
                    desc: l("Старые шины упакуем в плотные пакеты, чтобы не испачкать салон.", "Old tires packed in bags to keep your car clean.")
                }
            ]}
            priceTable={
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-black shadow-[6px_6px_0_#000] max-w-4xl mx-auto text-black">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                        {l("Прайс-лист на сезонный шиномонтаж (4 колеса)", "Tire Service Price List (Set of 4)")}
                    </h2>
                    <p className="text-xs md:text-sm font-bold opacity-60 mb-6 uppercase tracking-wider">
                        {l("Казань, ул. Заречная 5Б • Снятие, перебортовка, балансировка и установка", "Kazan, 5B Zarechnaya St • Full Swap & Balance")}
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-4 border-black bg-black text-white text-xs md:text-sm uppercase tracking-wider font-black">
                                    <th className="p-3 md:p-4 rounded-tl-xl">{l("Диаметр дисков", "Rim Diameter")}</th>
                                    <th className="p-3 md:p-4">{l("Комплекс (4 колеса)", "Package (4 Wheels)")}</th>
                                    <th className="p-3 md:p-4">{l("Время", "Duration")}</th>
                                    <th className="p-3 md:p-4 rounded-tr-xl text-right">{l("Стоимость", "Price")}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-black/10 font-bold text-sm md:text-base">
                                <tr>
                                    <td className="p-3 md:p-4 font-black">R13 – R14</td>
                                    <td className="p-3 md:p-4 opacity-70">Снятие, перебортовка, балансировка, установка</td>
                                    <td className="p-3 md:p-4 opacity-70">30 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 2 200 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">R15 – R16</td>
                                    <td className="p-3 md:p-4 opacity-70">Снятие, перебортовка, балансировка, установка</td>
                                    <td className="p-3 md:p-4 opacity-70">30–35 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">уточняйте</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">R17 – R18</td>
                                    <td className="p-3 md:p-4 opacity-70">Снятие, перебортовка, балансировка, установка</td>
                                    <td className="p-3 md:p-4 opacity-70">35–45 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">уточняйте</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">R19 – R20+</td>
                                    <td className="p-3 md:p-4 opacity-70">Снятие, перебортовка, балансировка, установка</td>
                                    <td className="p-3 md:p-4 opacity-70">40–50 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">уточняйте</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-xs font-bold opacity-60 gap-2">
                        <span>{l("Точную стоимость по вашему типоразмеру шин мастер назовёт при записи.", "Exact price for your tire size is confirmed upon booking.")}</span>
                        <span className="font-black text-black opacity-100">{l(`Цены актуальны ${getCurrentSeasonYear('ru')}`, `Valid for ${getCurrentSeasonYear('en')}`)}</span>
                    </div>
                </div>
            }
            faq={[
                {
                    question: l("Какая цена на шиномонтаж?", "What's the price for tire service?"),
                    answer: l("Комплексная переобувка — от 2200 ₽ за 4 колеса. В стоимость входит полный комплекс: снятие, мойка/чистка дисков, перебортовка, балансировка и затяжка с контролем момента.", "Full swap — from 2,200 ₽ for 4 wheels. Includes removal, cleaning, mounting, balancing, and torque check.")
                },
                {
                    question: l("Можно ли записаться день в день?", "Can I book same-day?"),
                    answer: l("В пик сезона лучше записываться за 2-3 дня. В остальное время — возможно, звоните!", "During peak season, book 2–3 days ahead. Otherwise — call us, we might fit you in!")
                },
                {
                    question: l("Сколько времени занимает переобувка?", "How long does a swap take?"),
                    answer: l("Обычно полный комплекс (4 колеса) занимает от 30 до 40 минут.", "A full set (4 wheels) typically takes 30–40 minutes.")
                },
                {
                    question: l("Датчики давления не сломаете?", "Will you damage my TPMS sensors?"),
                    answer: l("Нет, наши мастера умеют работать с датчиками TPMS.", "No, our techs are trained to handle TPMS sensors carefully.")
                }
            ]}
        />
    );
}
