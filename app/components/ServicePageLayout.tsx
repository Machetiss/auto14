"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronDown, ChevronUp, Clock, Settings, Wrench } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import ReviewsSection from './ReviewsSection';

interface ServicePageLayoutProps {
    title: string;
    description: string;
    price: string;
    heroImage?: string;
    features: { icon: any; title: string; desc: string }[];
    symptoms: string[];
    processSteps: { title: string; desc: string }[];
    faq: { question: string; answer: string }[];
}

export default function ServicePageLayout({
    title,
    description,
    price,
    heroImage = "/hero-girl.png", // Fallback
    features,
    symptoms,
    processSteps,
    faq
}: ServicePageLayoutProps) {
    const { openBooking } = useBooking();
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    return (
        <main className="bg-white text-black font-sans pt-20">
            {/* HERO SECTION */}
            <section className="relative bg-black text-[#FFF500] min-h-[60vh] flex items-center overflow-hidden">
                <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 pt-12 md:pt-0">
                        <div className="inline-block bg-[#FFF500] text-black px-4 py-1 rounded-full font-bold uppercase text-xs tracking-widest mb-6">
                            Услуги Авто14
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl font-bold opacity-80 mb-8 max-w-lg text-white">
                            {description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => openBooking(title)}
                                className="bg-[#FF4500] text-white px-8 py-4 rounded-full font-black uppercase hover:bg-black hover:text-[#FFF500] hover:scale-105 transition-all text-sm tracking-wider shadow-lg animate-pulse hover:animate-none border-2 border-transparent hover:border-[#FFF500]"
                            >
                                Записаться
                            </button>
                            <Link href="/" className="px-8 py-4 rounded-full font-bold uppercase border-2 border-white hover:bg-white hover:text-black transition-colors text-sm tracking-wider text-center">
                                На главную
                            </Link>
                        </div>
                    </div>
                    {/* Image Placeholder or prop */}
                    <div className="md:w-1/2 relative h-[400px] w-full">
                        <div className="relative w-full h-full border-4 border-[#FFF500] rounded-3xl overflow-hidden">
                            <Image
                                src={heroImage}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SYMPTOMS SECTION */}
            <section className="py-20 container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 text-center">
                    Когда <span className="text-[#DA8A00]">нужно</span> это делать?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {symptoms.map((symptom, idx) => (
                        <div key={idx} className="bg-gray-100 p-6 rounded-2xl border-l-4 border-black flex items-start gap-4">
                            <div className="bg-accent-green text-white p-2 rounded-full mt-1 shrink-0">
                                <Check className="w-4 h-4" />
                            </div>
                            <p className="font-bold text-lg">{symptom}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FEATURES / ADVANTAGES */}
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 text--[#FFF500]">
                        Почему <span className="text-white">Авто14</span>?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-[#1e1e1e] p-8 rounded-3xl border border-white/10 hover:border-[#FFF500] transition-colors">
                                <feature.icon className="w-12 h-12 text-[#FFF500] mb-6" />
                                <h3 className="text-xl font-black uppercase mb-3">{feature.title}</h3>
                                <p className="opacity-70 font-bold">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-20 container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-black uppercase mb-12">
                    Как мы <span className="text-[#DA8A00]">работаем</span>
                </h2>
                <div className="space-y-4 max-w-3xl mx-auto">
                    {processSteps.map((step, idx) => (
                        <div key={idx} className="flex gap-6 group">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-black text-[#FFF500] rounded-full flex items-center justify-center font-black text-xl shrink-0 group-hover:scale-110 transition-transform">
                                    {idx + 1}
                                </div>
                                {idx !== processSteps.length - 1 && (
                                    <div className="w-1 bg-black/10 flex-grow my-2"></div>
                                )}
                            </div>
                            <div className="pb-12">
                                <h3 className="text-2xl font-black uppercase mb-2">{step.title}</h3>
                                <p className="font-bold opacity-60 text-lg">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* REVIEWS SECTION */}
            <ReviewsSection />

            {/* FAQ */}
            <section className="py-20 bg-gray-50 border-t-4 border-black">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 text-center">
                        Вопросы и ответы
                    </h2>
                    <div className="space-y-4">
                        {faq.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border-2 border-black overflow-hidden">
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                    className="w-full text-left p-6 flex justify-between items-center font-black uppercase text-lg hover:bg-gray-50 transition-colors"
                                >
                                    {item.question}
                                    {openFaqIndex === idx ? <ChevronUp /> : <ChevronDown />}
                                </button>
                                {openFaqIndex === idx && (
                                    <div className="p-6 pt-0 font-bold opacity-70">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#FFF500] text-black text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter">
                        Готовы записаться?
                    </h2>
                    <p className="text-xl font-bold mb-12 max-w-2xl mx-auto opacity-80">
                        Оставьте заявку сейчас, и мы свяжемся с вами в течение 5 минут.
                    </p>
                    <button
                        onClick={() => openBooking(title)}
                        className="bg-[#FF4500] text-white px-12 py-6 rounded-full font-black uppercase text-xl hover:bg-black hover:text-[#FFF500] hover:scale-105 transition-all shadow-2xl border-2 border-transparent hover:border-[#FFF500]"
                    >
                        Записаться
                    </button>
                </div>
            </section>
        </main>
    );
}
