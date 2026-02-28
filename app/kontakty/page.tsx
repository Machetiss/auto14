"use client";

import Link from 'next/link';
import { Phone, MapPin, Clock, MessageCircle, ChevronLeft } from 'lucide-react';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { TelegramIcon } from '../components/icons/TelegramIcon';
import { handleContactClick } from '@/lib/analytics';
import ContactForm from '../components/ContactForm';
import { useLanguage } from '../context/LanguageContext';

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
                        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.8] font-display">
                            {l('ГДЕ МЫ', 'WHERE')}<br /><span className="text-accent-orange text-outline-black">{l('НАХОДИМСЯ', 'TO FIND US')}</span>
                        </h1>

                        <div className="space-y-12">
                            {/* Address Block */}
                            <div className="flex gap-6 group">
                                <div className="bg-black text-[#FFF500] p-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000] rotate-[-2deg] group-hover:rotate-0 transition-transform">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">{l('Адрес автосервиса', 'Service location')}</h3>
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
                                    <h3 className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">{l('Режим работы', 'Working hours')}</h3>
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
                                    <h3 className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">{l('Наши телефоны', 'Our phones')}</h3>
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
                            ></iframe>
                            <div className="absolute bottom-6 right-6 bg-black text-[#FFF500] px-6 py-2 rounded-xl font-black uppercase text-xs border-2 border-[#FFF500] z-20 pointer-events-none">
                                {l('Константиновка', 'Konstantinovka')}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
