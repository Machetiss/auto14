"use client";

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Первый открыт по умолчанию

    // Ожидаем, что items вернет массив объектов
    const rawItems = t('faq.items');
    const items = Array.isArray(rawItems) ? rawItems : [];

    const toggleOpen = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    if (items.length === 0) return null;

    return (
        <section className="w-full bg-white text-black py-16 md:py-24 px-4 sm:px-6 md:px-8 border-y-4 border-black relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
                
                {/* Заголовок */}
                <div className="w-full md:w-1/3 flex flex-col">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter font-display leading-[0.9] mb-6">
                        {t('faq.title')}<br />
                        <span className="text-[#FF4500]">{t('faq.title2')}</span>
                    </h2>
                    <p className="font-bold opacity-70 max-w-sm mb-8 text-sm md:text-base">
                        Собрали для вас подробные ответы о сход-развале, ремонте ходовой и работе нашего Автосервиса.
                    </p>
                </div>

                {/* Аккордеон */}
                <div className="w-full md:w-2/3 flex flex-col gap-4">
                    {items.map((item: any, idx: number) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div 
                                key={idx} 
                                className={`border-2 border-black rounded-xl transition-all duration-300 ${isOpen ? 'bg-[#FFF500] shadow-[6px_6px_0px_0px_#000000] translate-y-[-2px] translate-x-[-2px] border-b-4 border-r-4' : 'bg-white hover:bg-black/5'} overflow-hidden cursor-pointer`}
                                onClick={() => toggleOpen(idx)}
                            >
                                <div className="flex justify-between items-center p-5 md:p-6 select-none">
                                    <h3 className="text-lg md:text-xl font-black pr-4 leading-snug">{item.q}</h3>
                                    <ChevronDown className={`w-6 h-6 md:w-8 md:h-8 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                </div>
                                
                                {isOpen && (
                                    <div className="px-5 md:px-6 pb-6 pt-0 animate-in fade-in slide-in-from-top-2">
                                        <p className="font-medium text-base opacity-80 leading-relaxed border-t-2 border-black/10 pt-4 mt-2">
                                            {item.a}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
