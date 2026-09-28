"use client";

import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { TelegramIcon } from './icons/TelegramIcon';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const { t, language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    const brandList = [
        { slug: "kia", name: "KIA" },
        { slug: "hyundai", name: "Hyundai" },
        { slug: "lada", name: "LADA" },
        { slug: "toyota", name: "Toyota" },
        { slug: "volkswagen", name: "Volkswagen" },
        { slug: "skoda", name: "Skoda" },
        { slug: "renault", name: "Renault" },
        { slug: "nissan", name: "Nissan" },
        { slug: "chevrolet", name: "Chevrolet" },
        { slug: "ford", name: "Ford" },
        { slug: "mazda", name: "Mazda" },
        { slug: "mitsubishi", name: "Mitsubishi" },
        { slug: "bmw", name: "BMW" },
        { slug: "mercedes", name: "Mercedes-Benz" },
        { slug: "audi", name: "Audi" },
        { slug: "honda", name: "Honda" },
        { slug: "lexus", name: "Lexus" },
        { slug: "chery", name: "Chery" },
        { slug: "haval", name: "Haval" },
        { slug: "geely", name: "Geely" }
    ];

    const serviceLinks = [
        { href: "/razval-shozhdenie", title: l("3D Сход-развал", "3D Wheel Alignment") },
        { href: "/diagnostika", title: l("Диагностика подвески", "Chassis Diagnostics") },
        { href: "/remont-podveski", title: l("Ремонт ходовой", "Suspension Repair") },
        { href: "/zamena-masla", title: l("Замена масла", "Oil Change") },
        { href: "/shinomontazh", title: l("Шиномонтаж", "Tire Service") },
        { href: "/otzyvy", title: l("Отзывы клиентов (5.0 ★)", "Customer Reviews") },
        { href: "/kontakty", title: l("Контакты и схема проезда", "Contacts & Map") },
        { href: "/blog", title: l("Блог и регламенты ТО", "Blog & Articles") },
    ];

    return (
        <footer id="contacts" className="py-20 px-4 md:px-12 xl:px-24 w-full max-w-[1920px] mx-auto bg-brand-yellow/30 border-t-4 border-black">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Address & Map */}
                <div className="bg-black text-[#FFF500] p-0 rounded-[2rem] border-4 border-black shadow-xl overflow-hidden flex flex-col h-[400px]">
                    <div className="p-6 pb-3 text-center">
                        <h3 className="font-black uppercase text-xl mb-1">{t('footer.map_title')}</h3>
                        <p className="font-black text-xs md:text-sm">{t('common.address')}</p>
                    </div>
                    <div className="flex-grow w-full relative h-[300px] bg-neutral-900" aria-label="Карта проезда к автосервису">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=49.264877%2C55.809049&z=16&pt=49.264877%2C55.809049&z=17&l=map"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            className="grayscale hover:grayscale-0 transition-all duration-500 relative z-10"
                            title="Адрес автосервиса Авто14 на Яндекс.Картах"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* Phones (3 Numbers with WA/TG) */}
                <div className="bg-white p-8 rounded-[2rem] border-4 border-black shadow-xl flex flex-col items-center text-center justify-center">
                    <h3 className="font-black uppercase text-xl mb-6">{t('nav.contacts')}</h3>
                    <div className="flex flex-col gap-6 w-full">
                        {/* Number 1 */}
                        <div className="flex flex-col items-center border-b border-black/10 pb-4">
                            <a href="tel:+79992699359" className="text-xl font-black hover:text-[#dba800] transition-colors mb-2">+7 (999) 269-93-59</a>
                            <div className="flex gap-4">
                                <a href="https://wa.me/79992699359" aria-label="WhatsApp" className="text-[#25D366] hover:scale-110 transition-transform"><WhatsAppIcon className="w-6 h-6" /></a>
                                <a href="https://t.me/avto14_bot" aria-label="Telegram" className="text-[#0088cc] hover:scale-110 transition-transform"><TelegramIcon className="w-6 h-6" /></a>
                            </div>
                        </div>

                        {/* Number 2 */}
                        <div className="flex flex-col items-center border-b border-black/10 pb-4">
                            <a href="tel:+79294945174" className="text-xl font-black hover:text-[#dba800] transition-colors mb-2">+7 (929) 494-51-74</a>
                            <div className="flex gap-4">
                                <a href="https://wa.me/79294945174" aria-label="WhatsApp" className="text-[#25D366] hover:scale-110 transition-transform"><WhatsAppIcon className="w-6 h-6" /></a>
                                <a href="https://t.me/avto14_bot" aria-label="Telegram" className="text-[#0088cc] hover:scale-110 transition-transform"><TelegramIcon className="w-6 h-6" /></a>
                            </div>
                        </div>

                        {/* Number 3 */}
                        <div className="flex flex-col items-center">
                            <a href="tel:+79241619754" className="text-xl font-black hover:text-[#dba800] transition-colors mb-2">+7 (924) 161-97-54</a>
                            <div className="flex gap-4">
                                <a href="https://wa.me/79241619754" aria-label="WhatsApp" className="text-[#25D366] hover:scale-110 transition-transform"><WhatsAppIcon className="w-6 h-6" /></a>
                                <a href="https://t.me/avto14_bot" aria-label="Telegram" className="text-[#0088cc] hover:scale-110 transition-transform"><TelegramIcon className="w-6 h-6" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Branding & Hours & Navigation */}
                <div className="bg-[#FFF500] text-black p-8 rounded-[2rem] border-4 border-black shadow-xl flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-2 text-black font-display">
                            {t('footer.brand')}
                        </h2>
                        <p className="font-bold text-xs uppercase tracking-wider opacity-70 mb-4">
                            СТО «Авто14» • г. Казань, Константиновка, ул. Заречная 5Б
                        </p>
                        <div className="font-black text-lg mb-6">
                            {t('common.working_hours')}
                        </div>
                    </div>

                    {/* Site Navigation Links */}
                    <div className="border-t-2 border-black/20 pt-4 mb-4">
                        <div className="font-black uppercase text-xs tracking-wider mb-2 opacity-60">
                            {l("Разделы сайта", "Site Navigation")}
                        </div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                            {serviceLinks.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className="text-xs font-bold hover:text-accent-orange hover:underline transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <p className="font-bold opacity-60 text-xs">
                        © 2022–{new Date().getFullYear()} СТО «Авто14». {l("Все права защищены.", "All rights reserved.")}
                    </p>
                </div>
            </div>

            {/* SEO internal links for generated Brand pages */}
            <div className="mt-12 pt-8 border-t-2 border-black/10">
                <h3 className="font-black uppercase text-center mb-4 text-xs md:text-sm tracking-wider opacity-80">
                    {l("Обслуживание и 3D сход-развал по маркам авто в Казани", "Car Brand Service & Alignment in Kazan")}
                </h3>
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
                    {brandList.map((brand, idx) => (
                        <Link 
                            key={idx} 
                            href={`/brands/${brand.slug}`} 
                            className="text-xs font-bold opacity-80 hover:opacity-100 hover:text-brand-yellow hover:bg-black px-2 py-1 rounded transition-all border border-black/10"
                        >
                            {brand.name}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
