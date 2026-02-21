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
    heroImage = "/hero-girl.png",
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
            <section className="relative bg-ui-dark text-brand-yellow min-h-[60vh] flex items-center overflow-hidden">
                <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-12 py-16">
                    <div className="md:w-1/2">
                        <div className="inline-block bg-brand-yellow text-black px-4 py-1 rounded-sm font-black uppercase text-[10px] tracking-widest mb-6 border border-black shadow-[2px_2px_0px_#000]">
                            Услуги Авто14
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9] font-display text-white">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl font-bold opacity-80 mb-10 max-w-lg text-white font-sans">
                            {description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => openBooking(title)}
                                className="btn-primary"
                            >
                                Записаться
                            </button>
                            <Link href="/" className="btn-secondary !text-white !border-white hover:!bg-white hover:!text-black">
                                На главную
                            </Link>
                        </div>
                    </div>
                    {/* Image Placeholder or prop */}
                    <div className="md:w-1/2 relative h-[400px] w-full">
                        <div className="relative w-full h-full border-4 border-brand-yellow rounded-3xl overflow-hidden shadow-[8px_8px_0px_#000]">
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
            <section className="py-24 container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 text-center font-display tracking-tighter">
                    Когда <span className="text-accent-orange">нужно</span> это делать?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {symptoms.map((symptom, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000] flex items-start gap-4 hover:translate-y-[-4px] transition-transform">
                            <div className="bg-accent-orange text-white p-2 rounded-full shrink-0 border border-black shadow-[2px_2px_0px_#000]">
                                <Check className="w-4 h-4" />
                            </div>
                            <p className="font-black uppercase text-sm tracking-tight">{symptom}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FEATURES / ADVANTAGES */}
            <section className="py-24 bg-ui-dark text-white border-y-4 border-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 tracking-tighter font-display">
                        Почему <span className="text-brand-yellow">Авто14</span>?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-white/5 p-8 rounded-3xl border-2 border-white/10 hover:border-brand-yellow hover:bg-white/10 transition-all group">
                                <feature.icon className="w-12 h-12 text-brand-yellow mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-black uppercase mb-3 font-display">{feature.title}</h3>
                                <p className="opacity-70 font-bold font-sans">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-24 container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 font-display tracking-tighter">
                    Как мы <span className="text-accent-orange">работаем</span>
                </h2>
                <div className="space-y-4 max-w-3xl mx-auto">
                    {processSteps.map((step, idx) => (
                        <div key={idx} className="flex gap-8 group">
                            <div className="flex flex-col items-center">
                                <div className="w-14 h-14 bg-black text-brand-yellow rounded-full flex items-center justify-center font-black text-2xl shrink-0 group-hover:scale-110 transition-transform border-4 border-brand-yellow">
                                    {idx + 1}
                                </div>
                                {idx !== processSteps.length - 1 && (
                                    <div className="w-1 bg-black/10 flex-grow my-2"></div>
                                )}
                            </div>
                            <div className="pb-16">
                                <h3 className="text-3xl font-black uppercase mb-3 font-display tracking-tight leading-none">{step.title}</h3>
                                <p className="font-bold opacity-70 text-lg font-sans">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* REVIEWS SECTION */}
            <ReviewsSection />

            {/* FAQ */}
            <section className="py-24 bg-brand-yellow/10 border-t-4 border-black">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 text-center font-display tracking-tighter">
                        Вопросы и ответы
                    </h2>
                    <div className="space-y-4">
                        {faq.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border-2 border-black overflow-hidden shadow-[4px_4px_0px_#000]">
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                    className="w-full text-left p-6 flex justify-between items-center font-black uppercase text-lg hover:bg-brand-yellow/5 transition-colors font-display"
                                >
                                    {item.question}
                                    {openFaqIndex === idx ? <ChevronUp className="text-accent-orange" /> : <ChevronDown />}
                                </button>
                                {openFaqIndex === idx && (
                                    <div className="p-6 pt-0 font-bold opacity-80 font-sans border-t border-black/5 mt-4">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-brand-yellow text-black text-center border-t-4 border-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 tracking-tighter font-display">
                        Готовы записаться?
                    </h2>
                    <p className="text-xl md:text-2xl font-black mb-12 max-w-2xl mx-auto opacity-80 font-sans uppercase">
                        Оставьте заявку сейчас, и мы свяжемся с вами в течение 5 минут.
                    </p>
                    <button
                        onClick={() => openBooking(title)}
                        className="btn-primary !px-16 !py-6 !text-xl"
                    >
                        Записаться на ремонт
                    </button>
                </div>
            </section>
        </main>
    );
}
