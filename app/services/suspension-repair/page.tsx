import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Phone, Wrench } from 'lucide-react';
import BookingModalTrigger from '@/app/components/BookingModalTrigger';

export const metadata: Metadata = {
    title: 'Ремонт ходовой части в Казани | Диагностика подвески Avto14',
    description: 'Профессиональный ремонт подвески: замена рычагов, сайлентблоков, амортизаторов. Диагностика ходовой бесплатно при ремонте. Запчасти в наличии. Казань, Константиновка.',
    alternates: {
        canonical: './',
    },
};

export default function SuspensionPage() {
    return (
        <main className="bg-white text-black">
            {/* HERO */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    src="/job/suspension-hero.jpg" // Placeholder
                    alt="Ремонт ходовой части"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="container mx-auto px-4 relative z-20">
                    <span className="inline-block bg-[#FFF500] text-black font-black px-4 py-2 uppercase tracking-wider mb-4 rotate-[-2deg]">
                        Диагностика бесплатно*
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black uppercase leading-none mb-6">
                        Ремонт<br />ходовой
                    </h1>
                    <p className="text-xl md:text-2xl font-bold max-w-2xl mb-8 opacity-90">
                        Устраним стуки, скрипы и люфты. Запчасти подберем сами (с гарантией).
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <BookingModalTrigger className="bg-[#FFF500] text-black hover:bg-white" text="Записаться на диагностику" service="Ремонт ходовой" />
                        <Link href="tel:+79992699359" className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white font-black uppercase hover:bg-white hover:text-black transition-colors">
                            <Phone className="w-5 h-5" />
                            <span>+7 (999) 269-93-59</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SERVICES LIST */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 text-center">Что мы делаем</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-black text-[#FFF500] p-4 h-16 w-16 flex items-center justify-center rounded-xl flex-shrink-0">
                                    <Wrench className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black uppercase mb-2">Диагностика подвески</h3>
                                    <p className="opacity-70 font-bold">Проверяем на люфты, стуки, течи, состояние пыльников и сайлентблоков. Составляем список необходимого.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-black text-[#FFF500] p-4 h-16 w-16 flex items-center justify-center rounded-xl flex-shrink-0">
                                    <Wrench className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black uppercase mb-2">Замена амортизаторов</h3>
                                    <p className="opacity-70 font-bold">Меняем стойки парами, проверяем опорные подшипники и пыльники.</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-black text-[#FFF500] p-4 h-16 w-16 flex items-center justify-center rounded-xl flex-shrink-0">
                                    <Wrench className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black uppercase mb-2">Замена рычагов и сайлентблоков</h3>
                                    <p className="opacity-70 font-bold">Перепрессовка сайлентблоков или замена рычага в сборе (по ситуации).</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-black text-[#FFF500] p-4 h-16 w-16 flex items-center justify-center rounded-xl flex-shrink-0">
                                    <Wrench className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black uppercase mb-2">Замена ступичных подшипников</h3>
                                    <p className="opacity-70 font-bold">Устраняем гул при движении. Используем профессиональный пресс.</p>
                                </div>
                            </div>
                        </div>
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
                        "serviceType": "Suspension Repair",
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
                            "name": "Suspension Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Диагностика подвески"
                                    },
                                    "price": "0",
                                    "priceCurrency": "RUB",
                                    "description": "Бесплатно при последующем ремонте"
                                }
                            ]
                        }
                    })
                }}
            />
        </main>
    );
}
