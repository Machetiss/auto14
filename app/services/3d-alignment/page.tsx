import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Clock, Shield, MapPin, Phone } from 'lucide-react';
import BookingModalTrigger from '@/app/components/BookingModalTrigger';

export const metadata: Metadata = {
    title: '3D Развал-схождение в Казани | Автосервис Avto14 (Константиновка)',
    description: 'Сделаем 3D развал-схождение на стенде Hoffman за 30 минут. Гарантия на работы. Исправим, если тянет руль или ест резину. Казань, ул. Заречная 5Б.',
    alternates: {
        canonical: './',
    },
};

export default function AlignmentPage() {
    return (
        <main className="bg-white text-black">
            {/* HERO SECTION */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    src="/job/alignment-hero.jpg" // Placeholder, will need to check what files are copied
                    alt="3D Развал-схождение Hoffman"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Fallback image if specific one missing, or use a generic one from existing assets */}
                <div className="container mx-auto px-4 relative z-20">
                    <span className="inline-block bg-[#FFF500] text-black font-black px-4 py-2 uppercase tracking-wider mb-4 rotate-[-2deg]">
                        Стенд Hoffman (Германия)
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black uppercase leading-none mb-6">
                        3D Развал-<br />схождение
                    </h1>
                    <p className="text-xl md:text-2xl font-bold max-w-2xl mb-8 opacity-90">
                        Вернем идеальную управляемость вашему авто за 30 минут.
                        Гарантия на регулировку — 30 дней.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <BookingModalTrigger className="bg-[#FFF500] text-black hover:bg-white" text="Записаться на развал" />
                        <Link href="tel:+79992699359" className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white font-black uppercase hover:bg-white hover:text-black transition-colors">
                            <Phone className="w-5 h-5" />
                            <span>+7 (999) 269-93-59</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SYMPTOMS SECTION */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 text-center">Когда это нужно?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Машину тянет в сторону', desc: 'Приходится постоянно подруливать на прямой дороге.' },
                            { title: 'Неравномерный износ шин', desc: 'Резина стирается с внутренней или внешней стороны.' },
                            { title: 'Ремонтировали ходовую', desc: 'После замены наконечников, рычагов или стоек — обязательно.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 p-8 border-l-4 border-[#FFF500]">
                                <h3 className="text-xl font-black uppercase mb-4">{item.title}</h3>
                                <p className="font-bold opacity-70">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICES SECTION */}
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-black uppercase mb-12">Цены на услуги</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="border border-white/20 p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <h3 className="text-xl font-black uppercase mb-2 text-[#FFF500]">Легковые авто</h3>
                            <div className="text-3xl font-black mb-4">1 500 ₽</div>
                            <ul className="space-y-2 opacity-80 text-sm font-bold">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-[#FFF500]" /> Проверка подвески</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-[#FFF500]" /> Регулировка двух осей</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-[#FFF500]" /> Распечатка отчета</li>
                            </ul>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <h3 className="text-xl font-black uppercase mb-2 text-[#FFF500]">Кроссоверы / SUV</h3>
                            <div className="text-3xl font-black mb-4">1 800 ₽</div>
                            <ul className="space-y-2 opacity-80 text-sm font-bold">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-[#FFF500]" /> Для машин типа RAV4, Creta</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-[#FFF500]" /> Полный привод</li>
                            </ul>
                        </div>
                        <div className="border border-white/20 p-6 rounded-2xl hover:bg-white/5 transition-colors">
                            <h3 className="text-xl font-black uppercase mb-2 text-[#FFF500]">Внедорожники / Бусы</h3>
                            <div className="text-3xl font-black mb-4">2 200 ₽</div>
                            <ul className="space-y-2 opacity-80 text-sm font-bold">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-[#FFF500]" /> Land Cruiser, Transit и др.</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-[#FFF500]" /> Сложная регулировка</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 text-center opacity-60 text-sm">
                        * Цены могут меняться в зависимости от состояния регулировочных болтов.
                    </div>
                </div>
            </section>

            {/* SCHEMA.ORG */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "3D Wheel Alignment",
                        "provider": {
                            "@type": "AutoRepair",
                            "name": "Avto14"
                        },
                        "areaServed": {
                            "@type": "City",
                            "name": "Kazan"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Alignment Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Сход-развал Легковые"
                                    },
                                    "price": "1500",
                                    "priceCurrency": "RUB"
                                }
                            ]
                        }
                    })
                }}
            />
        </main>
    );
}
