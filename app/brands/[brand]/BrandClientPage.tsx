"use client";

import ServicePageLayout from '@/app/components/ServicePageLayout';
import { Settings, ShieldCheck, Wrench, Clock, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import { CarBrand } from '@/app/data/carBrands';

export default function BrandClientPage({ brand }: { brand: CarBrand }) {
    const { language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    const brandPriceTable = (
        <div className="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0_#000]">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                {l(`Цены на обслуживание и сход-развал ${brand.name}`, `Service & Alignment Prices for ${brand.name}`)}
            </h2>
            <p className="text-xs md:text-sm font-bold opacity-60 uppercase tracking-wider mb-6">
                {l('Фиксированная стоимость работ без скрытых доплат. Казань, Константиновка', 'Fixed transparent pricing without hidden charges in Kazan')}
            </p>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm font-bold">
                    <thead>
                        <tr className="border-b-4 border-black bg-black text-white uppercase font-black">
                            <th className="p-3 md:p-4 rounded-tl-xl">{l('Услуга для', 'Service for')} {brand.name}</th>
                            <th className="p-3 md:p-4">{l('Срок', 'Duration')}</th>
                            <th className="p-3 md:p-4">{l('Гарантия', 'Warranty')}</th>
                            <th className="p-3 md:p-4 rounded-tr-xl">{l('Стоимость', 'Price')}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-black/10">
                        <tr>
                            <td className="p-3 md:p-4 font-black">3D сход-развал (1 ось)</td>
                            <td className="p-3 md:p-4 opacity-80">30–40 мин</td>
                            <td className="p-3 md:p-4 opacity-80">30 дней / 1000 км</td>
                            <td className="p-3 md:p-4 font-black text-accent-orange">от 1400 ₽</td>
                        </tr>
                        <tr>
                            <td className="p-3 md:p-4 font-black">3D сход-развал (2 оси)</td>
                            <td className="p-3 md:p-4 opacity-80">40–50 мин</td>
                            <td className="p-3 md:p-4 opacity-80">30 дней / 1000 км</td>
                            <td className="p-3 md:p-4 font-black text-accent-orange">от 1800 ₽</td>
                        </tr>
                        <tr>
                            <td className="p-3 md:p-4 font-black">Диагностика подвески на подъёмнике</td>
                            <td className="p-3 md:p-4 opacity-80">20–30 мин</td>
                            <td className="p-3 md:p-4 opacity-80">Акт осмотра</td>
                            <td className="p-3 md:p-4 font-black text-accent-orange">0 ₽ (Бесплатно)</td>
                        </tr>
                        <tr>
                            <td className="p-3 md:p-4 font-black">Замена моторного масла и масляного фильтра</td>
                            <td className="p-3 md:p-4 opacity-80">30 мин</td>
                            <td className="p-3 md:p-4 opacity-80">10 000 км</td>
                            <td className="p-3 md:p-4 font-black text-accent-orange">от 1000 ₽</td>
                        </tr>
                        <tr>
                            <td className="p-3 md:p-4 font-black">Замена передних тормозных колодок</td>
                            <td className="p-3 md:p-4 opacity-80">30–45 мин</td>
                            <td className="p-3 md:p-4 opacity-80">До износа</td>
                            <td className="p-3 md:p-4 font-black text-accent-orange">от 800 ₽</td>
                        </tr>
                        <tr>
                            <td className="p-3 md:p-4 font-black">Замена сайлентблоков / рычагов подвески</td>
                            <td className="p-3 md:p-4 opacity-80">от 1 часа</td>
                            <td className="p-3 md:p-4 opacity-80">до 12 месяцев</td>
                            <td className="p-3 md:p-4 font-black text-accent-orange">от 1200 ₽</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <ServicePageLayout
            title={l(`Ремонт и обслуживание ${brand.name}`, `Repair and Service for ${brand.name}`)}
            description={l(
                `Профессиональный ремонт ходовой части, плановое техобслуживание и высокоточный 3D сход-развал для автомобилей ${brand.name} (${brand.nameRu}) в автосервисе «Авто14» в Казани (Константиновка, ул. Заречная 5Б). Опытные мастера с профильным стажем более 10 лет, немецкий стенд Hoffman, подбор оригинальных запчастей и проверенных аналогов по VIN-коду. Гарантия на работы до 12 месяцев. Диагностика подвески бесплатна.`,
                `Professional chassis repair, scheduled maintenance, and high-precision 3D wheel alignment for ${brand.name} (${brand.nameRu}) at Avto14 auto service in Kazan (5B Zarechnaya St, Konstantinovka). Experienced technicians with 10+ years experience, German Hoffman alignment rack, VIN parts lookup. Up to 12 months warranty. Suspension diagnostics is free.`
            )}
            price={l("от 800₽", "from 800₽")}
            heroImage="/job/hodovaya.jpg"
            priceTable={brandPriceTable}
            symptoms={[
                l(`Стуки и глухие удары в подвеске ${brand.name}`, `Knocks or thuds in ${brand.name} suspension`),
                l("Увод автомобиля в сторону при прямом руле", "Vehicle pulls to side when steering straight"),
                l("Неравномерный износ протектора передних или задних шин", "Uneven front or rear tire wear"),
                l("Биение и вибрация рулевого колеса на скорости", "Steering wheel vibration at speed"),
                l("Крен кузова и раскачка при проезде неровностей", "Body roll and bouncing over speed bumps"),
                l("Плановое ТО и замена моторного масла по регламенту", "Scheduled maintenance and oil service")
            ]}
            features={[
                {
                    icon: Wrench,
                    title: l(`Опыт работы с ${brand.name}`, `Experienced with ${brand.name}`),
                    desc: l(`Знаем все конструктивные нюансы многорычажных подвесок, электроусилителей и типичных слабых мест автомобилей марки ${brand.name}.`, `We know all engineering specifics of multilink suspension and common wear points for ${brand.name} vehicles.`)
                },
                {
                    icon: Settings,
                    title: l("Запчасти со складов Казани", "Fast parts delivery"),
                    desc: l(`Доставка оригинальных деталей и проверенных аналогов со складов партнеров в Казани (ПартКом, Росско и др.) за 1–2 часа прямо в автосервис.`, `Fast delivery of OEM and reliable aftermarket parts from Kazan warehouse partners (PartKom, Rossko, etc.) within 1-2 hours directly to our shop.`)
                },
                {
                    icon: ShieldCheck,
                    title: l("Гарантия на все работы", "Comprehensive warranty"),
                    desc: l("Предоставляем честную гарантию на выполненный ремонт ходовой и установленные детали до 12 месяцев.", "We provide an honest warranty on suspension repairs and installed parts for up to 12 months.")
                }
            ]}
            processSteps={[
                {
                    title: l("Бесплатная диагностика", "Free diagnostics"),
                    desc: l(`Поднимаем ${brand.name} на подъёмнике, осматриваем сайлентблоки, шаровые опоры, амортизаторы и рулевые тяги в присутствии владельца.`, `We lift your ${brand.name} and inspect bushings, ball joints, shocks, and steering linkages together with you.`)
                },
                {
                    title: l("Согласование фиксированной сметы", "Fixed price estimate"),
                    desc: l("Наглядно демонстрируем все выявленные люфты и фиксируем окончательную стоимость ремонта до начала каких-либо работ.", "We demonstrate all detected wear points and fix the exact total price before touching any bolts.")
                },
                {
                    title: l("Ремонт и 3D сход-развал", "Repair & 3D Alignment"),
                    desc: l("Заменяем неисправные детали и калибруем углы установки колёс на немецком компьютерном 3D стенде Hoffman.", "We replace worn components and calibrate wheel geometry on our high-precision German 3D Hoffman rack.")
                }
            ]}
            faq={[
                {
                    question: l(`Обслуживаете ли вы автомобили ${brand.name} с пробегом более 150 000 км?`, `Do you service older ${brand.name} cars over 150k km?`),
                    answer: l(`Да, мы обслуживаем любые модели ${brand.name} вне зависимости от года выпуска и пробега. Имеем специнструмент для закисших болтов и перепрессовки сайлентблоков.`, `Yes, we service any ${brand.name} model regardless of age and mileage. We have specialized tools for seized bolts and bushing pressing.`)
                },
                {
                    question: l(`Нужно ли делать сход-развал на ${brand.name} после ремонта подвески?`, `Is wheel alignment needed after suspension repair on ${brand.name}?`),
                    answer: l("Да, замена любых рулевых тяг, наконечников, шаровых опор или амортизаторов смещает заводские углы. Регулировка на стенде Hoffman сохраняет резину и возвращает стабильность на трассе.", "Yes, replacing tie rods, ball joints, or struts alters geometry. Hoffman adjustment protects tires and restores highway stability.")
                },
                {
                    question: l("Как быстро привозят автозапчасти?", "How fast do parts arrive?"),
                    answer: l(`Заказываем запчасти напрямую со складов партнеров в Казани (ПартКом, Росско и др.). Доставка занимает от 1 до 2 часов прямо в бокс, машина не простаивает на подъёмнике.`, `We source parts directly from partner warehouses in Kazan (PartKom, Rossko, etc.). Delivery takes 1 to 2 hours directly to the bay with zero downtime.`)
                }
            ]}
        />
    );
}
