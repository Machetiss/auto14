"use client";

import Link from 'next/link';
import { Phone, MapPin, Clock, MessageCircle, ChevronLeft } from 'lucide-react';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { TelegramIcon } from '../components/icons/TelegramIcon';
import { handleContactClick } from '@/lib/analytics';
import ContactForm from '../components/ContactForm';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';

export default function Kontakty() {
    const { language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    const phones = [
        { number: '+7 (999) 269-93-59', raw: '+79992699359', wa: '79992699359', tg: 'avto14_bot' },
        { number: '+7 (929) 494-51-74', raw: '+79294945174', wa: '79294945174', tg: '+79294945174' },
        { number: '+7 (924) 161-97-54', raw: '+79241619754', wa: '79241619754', tg: 'avto14_bot' }
    ];

    return (
        <main className="min-h-screen pt-24 pb-24 bg-white text-black font-sans">
            <div className="container mx-auto px-4">
                {/* Back to Home Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-black uppercase text-xs tracking-widest mb-12 hover:translate-x-[-4px] transition-transform group"
                >
                    <ChevronLeft className="w-4 h-4 group-hover:text-[#FFF500]" />
                    <span>{l('На главную', 'Home')}</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT COLUMN: INFO */}
                    <div>
                        <div className="inline-block bg-[#FFF500] text-black px-4 py-1 rounded-sm font-black uppercase text-[10px] tracking-widest mb-6 border-2 border-black shadow-[4px_4px_0px_#000]">
                            {l('Свяжитесь с нами', 'Contact Us')}
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.8] font-display">
                            {l('ГДЕ МЫ', 'WHERE')}<br /><span className="text-accent-orange text-outline-black">{l('НАХОДИМСЯ', 'TO FIND US')}</span>
                        </h1>

                        <div className="bg-brand-yellow/20 border-2 border-black rounded-2xl p-5 mb-8 max-w-xl">
                            <p className="text-sm md:text-base font-bold leading-relaxed">
                                {l(
                                    "Автосервис «Авто14» расположен в Советском районе Казани по адресу: посёлок Константиновка, ул. Заречная, дом 5Б (съезд с Мамадышского тракта на улицу Заречная). Работаем с понедельника по субботу с 9:00 до 19:00, воскресенье — выходной. Телефон для записи: +7 (999) 269-93-59, также принимаем заявки через WhatsApp и Telegram. Среднее время ожидания заезда по записи — 0 минут.",
                                    "Avto14 auto service is located in the Sovetsky district of Kazan at 5B Zarechnaya St, Konstantinovka (turn from Mamadyshsky Tract onto Zarechnaya St). Open Monday to Saturday 9:00 to 19:00, Sunday closed. Direct booking phone: +7 (999) 269-93-59 or via WhatsApp and Telegram. Zero queue waiting time for scheduled visits."
                                )}
                            </p>
                        </div>

                        <div className="space-y-12">
                            {/* Address Block */}
                            <div className="flex gap-6 group">
                                <div className="bg-black text-[#FFF500] p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000] rotate-[-2deg] group-hover:rotate-0 transition-transform">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-xs font-black uppercase tracking-widest opacity-60 mb-2">{l('Адрес автосервиса и схема проезда', 'Service location & route')}</h2>
                                    <p className="text-2xl font-black uppercase tracking-tight leading-none">
                                        {l('г. Казань, Константиновка,', 'Kazan, Konstantinovka,')}<br />{l('ул. Заречная 5Б', '5B Zarechnaya St')}
                                    </p>
                                    <a
                                        href="https://yandex.ru/maps/-/CDTFuV4q"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4 text-sm font-black uppercase underline decoration-2 underline-offset-4 hover:text-accent-orange transition-colors"
                                    >
                                        {l('Открыть в навигаторе', 'Open in Maps')}
                                    </a>
                                </div>
                            </div>

                            {/* Working Hours Block */}
                            <div className="flex gap-6 group">
                                <div className="bg-[#FFF500] text-black p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000] rotate-[2deg] group-hover:rotate-0 transition-transform">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-xs font-black uppercase tracking-widest opacity-60 mb-2">{l('Режим работы мастерской', 'Working hours')}</h2>
                                    <p className="text-2xl font-black uppercase tracking-tight leading-none">
                                        {l('Понедельник – Суббота', 'Monday – Saturday')}<br />
                                        <span className="text-4xl">09:00 – 19:00</span>
                                    </p>
                                    <p className="text-sm font-bold opacity-60 mt-2">{l('Воскресенье — выходной', 'Sunday — closed')}</p>
                                </div>
                            </div>

                            {/* Phones Block */}
                            <div className="flex gap-6 group">
                                <div className="bg-accent-orange text-white p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000] rotate-[-1deg] group-hover:rotate-0 transition-transform">
                                    <Phone className="w-8 h-8" />
                                </div>
                                <div className="space-y-6">
                                    <h2 className="text-xs font-black uppercase tracking-widest opacity-60 mb-2">{l('Наши телефоны для записи', 'Our booking phones')}</h2>
                                    {phones.map((phone, idx) => (
                                        <div key={idx} className="flex flex-col gap-2">
                                            <a
                                                href={`tel:${phone.raw}`}
                                                className="text-2xl font-black hover:text-accent-orange transition-colors"
                                                onClick={() => handleContactClick('phone', 'contacts_page', phone.raw)}
                                            >
                                                {phone.number}
                                            </a>
                                            <div className="flex gap-4">
                                                <a
                                                    href={`https://wa.me/${phone.wa}`}
                                                    className="flex items-center gap-2 bg-green-500/10 text-green-600 px-3 py-1 rounded-lg font-bold text-xs hover:bg-green-500 hover:text-white transition-all border border-green-500/20"
                                                    onClick={() => handleContactClick('messenger', 'whatsapp', phone.wa)}
                                                >
                                                    <WhatsAppIcon className="w-4 h-4" />
                                                    <span>WhatsApp</span>
                                                </a>
                                                <a
                                                    href={phone.tg.startsWith('+') ? `https://t.me/${phone.tg}` : `https://t.me/${phone.tg}`}
                                                    className="flex items-center gap-2 bg-blue-500/10 text-blue-600 px-3 py-1 rounded-lg font-bold text-xs hover:bg-blue-500 hover:text-white transition-all border border-blue-500/20"
                                                    onClick={() => handleContactClick('messenger', 'telegram', phone.tg)}
                                                >
                                                    <TelegramIcon className="w-4 h-4" />
                                                    <span>Telegram</span>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: MAP & FORM */}
                    <div className="space-y-8">
                        {/* Map Box */}
                        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-black rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_#000] overflow-hidden group">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=49.264877%2C55.809049&z=16&pt=49.264877%2C55.809049&z=17&l=map"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                className="grayscale group-hover:grayscale-0 transition-all duration-700"
                                title="Адрес автосервиса Авто14 на Яндекс.Картах"
                                loading="lazy"
                            ></iframe>
                            <div className="absolute bottom-6 right-6 bg-black text-[#FFF500] px-6 py-2 rounded-xl font-black uppercase text-xs border-2 border-[#FFF500] z-20 pointer-events-none">
                                {l('Константиновка', 'Konstantinovka')}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <ContactForm />
                    </div>
                </div>

                {/* Additional directions and details section */}
                <div className="mt-20 pt-12 border-t-4 border-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 font-display">
                                {l('Как проехать в автосервис Авто14', 'How to reach Avto14 service')}
                            </h2>
                            <div className="space-y-4 font-bold text-sm md:text-base leading-relaxed opacity-90">
                                <p>
                                    {l(
                                        "Автосервис расположен в Советском районе Казани, в жилом массиве Константиновка по адресу ул. Заречная, 5Б. Удобный подъезд со стороны Мамадышского тракта (поворот на улицу Заречная), а также со стороны трассы М7.",
                                        "Our auto service is located in the Sovetsky district of Kazan (Konstantinovka) at 5B Zarechnaya Street. Convenient access from Mamadyshsky Tract (turn onto Zarechnaya Street) and from the M7 highway."
                                    )}
                                </p>
                                <p>
                                    {l(
                                        "Сервис работает строго по предварительной записи ко времени, поэтому подъёмник и мастер свободны сразу к вашему приезду, без очередей. Вы можете оставить автомобиль на ремонт и забрать его по готовности либо лично присутствовать в боксе при диагностике: мастер наглядно покажет состояние узлов подвески, люфты и износ прямо на автомобиле.",
                                        "We operate strictly by appointment, so the lift and mechanic are ready upon your arrival with zero queues. You can leave your vehicle for repair and pick it up when done, or personally accompany the mechanic in the service bay during diagnostics to inspect any wear and play firsthand."
                                    )}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 font-display">
                                {l('Навигационные данные и ориентиры', 'Navigation details & coordinates')}
                            </h2>
                            <div className="overflow-x-auto bg-brand-yellow/10 border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0px_#000]">
                                <table className="w-full text-left border-collapse font-bold text-xs md:text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-black bg-black text-white">
                                            <th className="p-3">{l('Параметр', 'Parameter')}</th>
                                            <th className="p-3">{l('Значение', 'Value')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-black/20">
                                        <tr>
                                            <td className="p-3 font-black">{l('Фактический адрес', 'Physical address')}</td>
                                            <td className="p-3">{l('г. Казань, пос. Константиновка, ул. Заречная 5Б', 'Kazan, Konstantinovka, 5B Zarechnaya St')}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-black">{l('GPS-координаты', 'GPS Coordinates')}</td>
                                            <td className="p-3 font-mono">55.809049, 49.264877</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-black">{l('Ориентир', 'Landmark')}</td>
                                            <td className="p-3">{l('Поворот с Мамадышского тракта на ул. Заречная', 'Turn from Mamadyshsky Tract onto Zarechnaya St')}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-black">{l('Телефон записи', 'Booking phone')}</td>
                                            <td className="p-3">+7 (999) 269-93-59</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-black">{l('Приём без очереди', 'Zero queue entry')}</td>
                                            <td className="p-3">{l('Строго по предварительной записи ко времени', 'Strictly on appointment time')}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-black">{l('Способы оплаты', 'Payment methods')}</td>
                                            <td className="p-3">{l('Наличные, перевод на карту', 'Cash, card transfer')}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-black">{l('Гарантия', 'Warranty')}</td>
                                            <td className="p-3">{l('До 12 месяцев на подвеску, 14 дней на сход-развал', 'Up to 12 months on suspension, 14 days on wheel alignment')}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <Footer />
            </div>
        </main>
    );
}
