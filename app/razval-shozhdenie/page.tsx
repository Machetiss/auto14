"use client";

import ServicePageLayout from '../components/ServicePageLayout';
import { Target, Gauge, Clock, Settings, Wrench, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getCurrentSeasonYear } from '../lib/season';

export default function RazvalShozhdenie() {
    const { language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    return (
        <ServicePageLayout
            title={l("3D Развал-схождение", "3D Wheel Alignment")}
            description={l(
                "Регулировка сход-развала 3D в Казани проводится в техцентре «Авто14» по адресу ул. Заречная, 5Б. Настройка выполняется на компьютерном стенде Hoffman с четырьмя оптическими камерами и калиброванными мишенями с точностью до 0,01 градуса. Процедура занимает от 20 до 35 минут. Стоимость регулировки одной оси составляет от 1400 рублей, двух осей — от 2500 рублей по прайс-листу сервиса. Распечатку углов до и после регулировки выдаём по запросу клиента.",
                "3D wheel alignment in Kazan at Avto14 service center, 5B Zarechnaya St. Adjustments are performed on a computerized Hoffman 3D stand with 0.01° precision in 20–35 minutes. One axle adjustment starts from 1400 ₽, two axles from 2500 ₽ per service price list. Before & after angle printout is provided upon customer request."
            )}
            price={l("от 1400₽", "from 1400₽")}
            heroImage="/job/razval.jpg"
            symptoms={[
                l("Машину тянет в сторону на ровной дороге", "Car pulls to one side on a straight road"),
                l("Неравномерный износ резины (жрет край)", "Uneven tire wear (edge wear)"),
                l("Руль стоит криво при движении прямо", "Steering wheel is off-center when driving straight"),
                l("После ремонта ходовой или замены шин", "After suspension repair or tire replacement"),
                l("Плохой возврат руля после поворота", "Poor steering return after turning"),
                l("Влетели в большую яму или бордюр", "Hit a pothole or curb")
            ]}
            features={[
                {
                    icon: Target,
                    title: l("Точность 0.01°", "0.01° Precision"),
                    desc: l("Стенд Hoffman (Германия) с 3D-технологией исключает ошибки.", "Hoffman stand (Germany) with 3D technology eliminates errors.")
                },
                {
                    icon: Clock,
                    title: l("20 минут", "20 minutes"),
                    desc: l("Среднее время работы.", "Average service time.")
                },
                {
                    icon: Wrench,
                    title: l("Любые авто", "Any car"),
                    desc: l("База данных на 50 000+ моделей, включая правый руль.", "Database of 50,000+ models, including right-hand drive.")
                }
            ]}
            processSteps={[
                {
                    title: l("Диагностика подвески", "Suspension check"),
                    desc: l("Бесплатно проверяем ходовую перед регулировкой. Если есть люфты – развал делать нельзя.", "Free chassis inspection before adjustment. If there's play — alignment can't be done.")
                },
                {
                    title: l("Установка мишеней", "Target installation"),
                    desc: l("Крепим 3D-мишени на колеса. Аккуратная установка на диски.", "We mount 3D targets on the wheels. Careful installation on rims.")
                },
                {
                    title: l("Прокатка и измерения", "Rolling & measurements"),
                    desc: l("Прокатываем авто на 20 см. Камеры считывают углы установки колес.", "We roll the car 20 cm. Cameras read the wheel alignment angles.")
                },
                {
                    title: l("Регулировка", "Adjustment"),
                    desc: l("Выставляем заводские параметры (развал, схождение).", "We set factory specifications (camber, toe).")
                },
                {
                    title: l("Отчет", "Report"),
                    desc: l("Показываем результаты ДО и ПОСЛЕ.", "We show you before & after results.")
                }
            ]}
            priceTable={
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-black shadow-[6px_6px_0_#000] max-w-4xl mx-auto text-black">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                        {l("Прайс-лист на 3D сход-развал", "3D Wheel Alignment Price List")}
                    </h2>
                    <p className="text-xs md:text-sm font-bold opacity-60 mb-6 uppercase tracking-wider">
                        {l("Казань, ул. Заречная 5Б • Немецкий стенд Hoffman • Распечатка по запросу", "Kazan, 5B Zarechnaya St • Hoffman 3D Stand")}
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-4 border-black bg-black text-white text-xs md:text-sm uppercase tracking-wider font-black">
                                    <th className="p-3 md:p-4 rounded-tl-xl">{l("Тип автомобиля / Услуга", "Vehicle Category / Service")}</th>
                                    <th className="p-3 md:p-4">{l("Время", "Duration")}</th>
                                    <th className="p-3 md:p-4 rounded-tr-xl text-right">{l("Стоимость", "Price")}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-black/10 font-bold text-sm md:text-base">
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Регулировка одной оси (передняя)</td>
                                    <td className="p-3 md:p-4 opacity-70">20–30 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 1 400 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Регулировка двух осей (передняя + задняя)</td>
                                    <td className="p-3 md:p-4 opacity-70">30–45 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 2 500 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Кроссоверы и внедорожники (2 оси)</td>
                                    <td className="p-3 md:p-4 opacity-70">35–50 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 2 800 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Коммерческий транспорт и микроавтобусы</td>
                                    <td className="p-3 md:p-4 opacity-70">40–60 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-accent-orange whitespace-nowrap">от 3 000 ₽</td>
                                </tr>
                                <tr className="bg-brand-yellow/20">
                                    <td className="p-3 md:p-4 font-black">Диагностика подвески перед сход-развалом</td>
                                    <td className="p-3 md:p-4 opacity-70">15–20 мин</td>
                                    <td className="p-3 md:p-4 text-right font-black text-green-700 whitespace-nowrap">0 ₽ (Бесплатно)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-xs font-bold opacity-60 gap-2">
                        <span>{l("Распечатка карты углов колёс выдаётся по запросу клиента.", "Alignment report is printed upon customer request.")}</span>
                        <span className="font-black text-black opacity-100">{l(`Цены актуальны ${getCurrentSeasonYear('ru')}`, `Valid for ${getCurrentSeasonYear('en')}`)}</span>
                    </div>
                </div>
            }
            faq={[
                {
                    question: l("Сколько стоит развал-схождение?", "How much does wheel alignment cost?"),
                    answer: l("От 1400 ₽ за одну ось (передняя ось). Две оси — от 2500 ₽ по прайсу сервиса. Распечатку параметров выдаем по вашему запросу.", "From 1,400 ₽ for one axle. Two axles from 2,500 ₽ per service price list. Report provided upon request.")
                },
                {
                    question: l("Нужно ли делать развал после смены резины?", "Do I need alignment after changing tires?"),
                    answer: l("Да. Износ деталей подвески меняет углы, новая резина требует идеальных настроек для долгой службы.", "Yes. Suspension wear changes the angles, and new tires need perfect settings for long life.")
                },
                {
                    question: l("Если ходовая разбита, сделаете?", "Can you do it if the suspension is worn?"),
                    answer: l("Нет. С люфтами в шаровых или наконечниках точный развал невозможен. Сначала бесплатная диагностика и ремонт у нас, затем точная регулировка.", "No. With play in ball joints or tie rods, precise alignment is impossible. First free inspection and repair with us, then precise alignment.")
                },
                {
                    question: l("Даете гарантию?", "Do you offer a warranty?"),
                    answer: l("Да, честная гарантия на работы. Если руль будет стоять неровно — исправим бесплатно.", "Yes, honest warranty. If the steering is off-center — we'll correct it free of charge.")
                }
            ]}
        />
    );
}
