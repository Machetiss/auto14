import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Check } from 'lucide-react';
import BookingModalTrigger from '@/app/components/BookingModalTrigger';

export const metadata: Metadata = {
    title: 'Шиномонтаж в Казани (Константиновка) | Сезонная переобувка Avto14',
    description: 'Быстрый и качественный шиномонтаж. Балансировка, правка дисков, устранение проколов. Запись на удобное время без очередей. Ул. Заречная 5Б.',
    alternates: {
        canonical: './',
    },
};

export default function TireFittingPage() {
    return (
        <main className="bg-white text-black">
            {/* HERO */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    src="/job/tires-hero.jpg" // Placeholder
                    alt="Шиномонтаж в Казани"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="container mx-auto px-4 relative z-20">
                    <span className="inline-block bg-[#FFF500] text-black font-black px-4 py-2 uppercase tracking-wider mb-4 rotate-[-2deg]">
                        Без очередей (по записи)
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black uppercase leading-none mb-6">
                        Шиномонтаж<br />и Балансировка
                    </h1>
                    <p className="text-xl md:text-2xl font-bold max-w-2xl mb-8 opacity-90">
                        Сезонная переобувка от R13 до R22. Профессиональное оборудование, бережное отношение к дискам.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <BookingModalTrigger className="bg-[#FFF500] text-black hover:bg-white" text="Записаться на переобувку" service="Шиномонтаж" />
                        <Link href="tel:+79992699359" className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white font-black uppercase hover:bg-white hover:text-black transition-colors">
                            <Phone className="w-5 h-5" />
                            <span>+7 (999) 269-93-59</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* PRICES SECTION */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 text-center">Комплексная переобувка</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-4 border-black">
                                    <th className="p-4 font-black uppercase text-xl">Радиус</th>
                                    <th className="p-4 font-black uppercase text-xl">Цена (4 колеса)</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold text-lg">
                                <tr className="border-b border-gray-200">
                                    <td className="p-4">R13 - R14</td>
                                    <td className="p-4">от 1 600 ₽</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4">R15 - R16</td>
                                    <td className="p-4">от 2 000 ₽</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4">R17 - R18</td>
                                    <td className="p-4">от 2 400 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-4">R19 - R22</td>
                                    <td className="p-4">от 3 000 ₽</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-8 opacity-60 text-sm text-center">
                        * В цену входит: снятие/установка, демонтаж/монтаж, балансировка, грузики.
                    </p>
                </div>
            </section>

            {/* SCHEMA.ORG */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Tire Fitting",
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
                            "name": "Tire Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Сезонная переобувка R16"
                                    },
                                    "price": "2000",
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
