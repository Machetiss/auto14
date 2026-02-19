"use client";

import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { TelegramIcon } from './icons/TelegramIcon';

import { handleContactClick } from '@/lib/analytics';

export default function SiteFooter() {
    return (
        <footer id="contacts" className="py-24 px-4 md:px-12 max-w-7xl mx-auto pb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Address & Map */}
                <div className="bg-black text-[#FFF500] p-0 rounded-[2rem] border-4 border-black shadow-xl overflow-hidden flex flex-col h-[400px]">
                    <div className="p-8 pb-4 text-center">
                        <h3 className="font-black uppercase text-xl mb-2">На карте</h3>
                        <p className="font-bold text-sm mb-4">г. Казань, Константиновка, ул. Заречная 5Б</p>
                    </div>
                    <div className="flex-grow w-full relative h-[300px]">
                        {/* Yandex Map Widget */}
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=49.264877%2C55.809049&z=16&pt=49.264877%2C55.809049&z=17&l=map"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            className="grayscale hover:grayscale-0 transition-all duration-500 relative z-10"
                        ></iframe>
                    </div>
                </div>

                {/* Phones (3 Numbers with WA/TG) */}
                <div className="bg-white p-8 rounded-[2rem] border-4 border-black shadow-xl flex flex-col items-center text-center justify-center">
                    <h3 className="font-black uppercase text-xl mb-6">Контакты</h3>
                    <div className="flex flex-col gap-6 w-full">

                        {/* Number 1 */}
                        <div className="flex flex-col items-center border-b border-black/10 pb-4 last:border-0 last:pb-0">
                            <a
                                href="tel:+79992699359"
                                className="text-xl font-black hover:text-[#dba800] transition-colors mb-2"
                                onClick={() => handleContactClick('phone', 'phone_footer', '+79992699359')}
                            >
                                +7 (999) 269-93-59
                            </a>
                            <div className="flex gap-4">
                                <a
                                    href="https://wa.me/79992699359"
                                    className="text-[#25D366] hover:scale-110 transition-transform"
                                    onClick={() => handleContactClick('messenger', 'whatsapp', '+79992699359')}
                                >
                                    <WhatsAppIcon className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://t.me/avto14_bot"
                                    className="text-[#0088cc] hover:scale-110 transition-transform"
                                    onClick={() => handleContactClick('messenger', 'telegram', 'avto14_bot')}
                                >
                                    <TelegramIcon className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Number 2 */}
                        <div className="flex flex-col items-center border-b border-black/10 pb-4 last:border-0 last:pb-0">
                            <a
                                href="tel:+79294945174"
                                className="text-xl font-black hover:text-[#dba800] transition-colors mb-2"
                                onClick={() => handleContactClick('phone', 'phone_footer', '+79294945174')}
                            >
                                +7 (929) 494-51-74
                            </a>
                            <div className="flex gap-4">
                                <a
                                    href="https://wa.me/79294945174"
                                    className="text-[#25D366] hover:scale-110 transition-transform"
                                    onClick={() => handleContactClick('messenger', 'whatsapp', '+79294945174')}
                                >
                                    <WhatsAppIcon className="w-6 h-6" />
                                </a>
                                {/* Telegram bot is the same for all */}
                                <a
                                    href="https://t.me/+79294945174"
                                    className="text-[#0088cc] hover:scale-110 transition-transform"
                                    onClick={() => handleContactClick('messenger', 'telegram', '+79294945174')}
                                >
                                    <TelegramIcon className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Number 3 */}
                        <div className="flex flex-col items-center border-b border-black/10 pb-4 last:border-0 last:pb-0">
                            <a
                                href="tel:+79241619754"
                                className="text-xl font-black hover:text-[#dba800] transition-colors mb-2"
                                onClick={() => handleContactClick('phone', 'phone_footer', '+79241619754')}
                            >
                                +7 (924) 161-97-54
                            </a>
                            <div className="flex gap-4">
                                <a
                                    href="https://wa.me/79241619754"
                                    className="text-[#25D366] hover:scale-110 transition-transform"
                                    onClick={() => handleContactClick('messenger', 'whatsapp', '+79241619754')}
                                >
                                    <WhatsAppIcon className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://t.me/avto14_bot"
                                    className="text-[#0088cc] hover:scale-110 transition-transform"
                                    onClick={() => handleContactClick('messenger', 'telegram', 'avto14_bot')}
                                >
                                    <TelegramIcon className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Branding/Hours */}
                <div className="bg-[#FFF500] text-black p-8 rounded-[2rem] border-4 border-black shadow-xl flex flex-col items-center text-center justify-center">
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 text-black">
                        Авто14
                    </h2>
                    <div className="mt-4 font-black text-xl">
                        Пн – Сб<br />09:00 – 19:00
                    </div>
                    <p className="font-bold opacity-60 mt-8 text-sm">
                        © 2024–{new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
}
