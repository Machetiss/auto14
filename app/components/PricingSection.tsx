"use client";

import { useState } from 'react';
import { Settings, Wrench, PackageSearch, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type TabKey = 'alignment' | 'tires' | 'repair';

interface PriceItem {
    name: string;
    nameEn: string;
    price: number;
    note?: string;
    noteEn?: string;
}

const alignmentData: PriceItem[] = [
    { name: 'Веста / Иномарки — только схождение спереди', nameEn: 'Vesta / Foreign — front toe only', price: 1400 },
    { name: 'Land Cruiser, Prado — только схождение спереди', nameEn: 'Land Cruiser, Prado — front toe only', price: 1500 },
    { name: 'Гранта, Приора, Калина, Богдан, Он-До', nameEn: 'Granta, Priora, Kalina, Bogdan, On-Do', price: 1800, note: 'зависит от состояния рег. элементов', noteEn: 'depends on adjustment bolt condition' },
    { name: 'Иномарки — схождение перед + зад (2 оси)', nameEn: 'Foreign — front + rear toe (2 axles)', price: 2200 },
    { name: 'УАЗ', nameEn: 'UAZ', price: 2500 },
    { name: 'Иномарки — схождение + развал зад, 2 оси', nameEn: 'Foreign — toe + rear camber, 2 axles', price: 2500, note: 'не премиум', noteEn: 'non-premium' },
    { name: 'ВАЗ 2114, 2109 и аналогичные', nameEn: 'VAZ 2114, 2109 and similar', price: 2800 },
    { name: 'Land Cruiser, Prado — развал + схождение', nameEn: 'Land Cruiser, Prado — camber + toe', price: 3000 },
    { name: 'Touareg — полная регулировка всех осей', nameEn: 'Touareg — full adjustment, all axes', price: 3500 },
];

const tiresData: PriceItem[] = [
    { name: 'R13 – R15 (комплект с балансировкой)', nameEn: 'R13 – R15 (set with balancing)', price: 2200 },
    { name: 'R16 (комплект с балансировкой)', nameEn: 'R16 (set with balancing)', price: 2500 },
    { name: 'R17 (комплект с балансировкой)', nameEn: 'R17 (set with balancing)', price: 2700 },
    { name: 'R18 (комплект с балансировкой)', nameEn: 'R18 (set with balancing)', price: 3000 },
    { name: 'R19 (комплект с балансировкой)', nameEn: 'R19 (set with balancing)', price: 3300 },
    { name: 'R20 (комплект с балансировкой)', nameEn: 'R20 (set with balancing)', price: 4000 },
    { name: 'R21 (комплект с балансировкой)', nameEn: 'R21 (set with balancing)', price: 4400 },
];

const repairData: PriceItem[] = [
    { name: 'Диагностика ходовой', nameEn: 'Suspension diagnostics', price: 0, note: 'бесплатно при ремонте у нас', noteEn: 'free when repaired at our shop' },
    { name: 'Замена рулевого наконечника', nameEn: 'Tie rod end replacement', price: 700 },
    { name: 'Замена шаровой опоры (болтовая)', nameEn: 'Ball joint replacement (bolted)', price: 800 },
    { name: 'Замена масла в ДВС', nameEn: 'Engine oil change', price: 1000 },
    { name: 'Замена шаровой опоры (прессованная / со снятием рычага)', nameEn: 'Ball joint replacement (pressed / arm removal)', price: 2000 },
];

export default function PricingSection({ onBookClick }: { onBookClick: () => void }) {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState<TabKey>('alignment');

    const tabs: { key: TabKey; label: string; labelEn: string; icon: React.ReactNode; data: PriceItem[] }[] = [
        { key: 'alignment', label: 'Развал-схождение', labelEn: 'Wheel Alignment', icon: <Settings className="w-5 h-5" />, data: alignmentData },
        { key: 'tires', label: 'Шиномонтаж', labelEn: 'Tire Service', icon: <PackageSearch className="w-5 h-5" />, data: tiresData },
        { key: 'repair', label: 'Ремонт и ТО', labelEn: 'Repair & Maintenance', icon: <Wrench className="w-5 h-5" />, data: repairData },
    ];

    const currentTab = tabs.find(tab => tab.key === activeTab)!;

    return (
        <section id="pricing" className="py-24 px-4 md:px-12 xl:px-24 bg-brand-yellow text-black border-t-4 border-black relative overflow-hidden font-sans">
            <div className="w-full max-w-[1920px] mx-auto">
                {/* Header */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8] font-display mb-6">
                        {t('pricing.title')} <span className="text-white drop-shadow-[4px_4px_0_#000]">{t('pricing.title2')}</span>
                    </h2>
                    <p className="max-w-2xl text-xs md:text-sm font-black opacity-80 uppercase tracking-wide bg-black text-brand-yellow px-4 py-2 border-2 border-black rounded-xl inline-block shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                        {t('pricing.disclaimer')}
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-col sm:flex-row justify-center items-stretch gap-3 mb-10 max-w-3xl mx-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-black uppercase tracking-wider text-xs md:text-sm border-4 border-black rounded-2xl transition-all ${activeTab === tab.key
                                    ? 'bg-white shadow-[4px_4px_0_#000] scale-[1.03]'
                                    : 'bg-transparent hover:bg-white/50 opacity-60 hover:opacity-100'
                                }`}
                        >
                            {tab.icon}
                            <span>{language === 'ru' ? tab.label : tab.labelEn}</span>
                        </button>
                    ))}
                </div>

                {/* Price Table */}
                <div className="max-w-4xl mx-auto bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_#000] overflow-hidden">
                    {/* Table Header */}
                    <div className="bg-black text-brand-yellow px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {currentTab.icon}
                            <h3 className="font-black uppercase tracking-widest text-base md:text-lg font-display">
                                {language === 'ru' ? currentTab.label : currentTab.labelEn}
                            </h3>
                        </div>
                        <span className="text-xs font-bold opacity-60 uppercase hidden md:block">
                            {language === 'ru' ? 'Цена за работу' : 'Labor cost'}
                        </span>
                    </div>

                    {/* Rows */}
                    <div>
                        {currentTab.data.map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-4 md:py-5 hover:bg-brand-yellow/10 transition-colors group ${idx !== currentTab.data.length - 1 ? 'border-b border-black/10' : ''
                                    }`}
                            >
                                <div className="flex-1 mb-1 sm:mb-0">
                                    <span className="font-bold text-sm md:text-base text-black/80 group-hover:text-black transition-colors">
                                        {language === 'ru' ? item.name : item.nameEn}
                                    </span>
                                    {(item.note || item.noteEn) && (
                                        <span className="block sm:inline sm:ml-2 text-xs font-bold opacity-50 italic">
                                            ({language === 'ru' ? item.note : item.noteEn})
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-3">
                                    {item.price === 0 ? (
                                        <span className="font-black text-lg md:text-xl text-accent-orange uppercase whitespace-nowrap">
                                            {language === 'ru' ? 'Бесплатно' : 'Free'}
                                        </span>
                                    ) : (
                                        <span className="font-black text-lg md:text-xl whitespace-nowrap">
                                            <span className="text-xs md:text-sm opacity-50 mr-1">{t('pricing.from')}</span>
                                            {item.price.toLocaleString()} <span className="opacity-50">{t('pricing.rub')}</span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col items-center gap-3">
                    <button onClick={onBookClick} className="btn-primary max-w-sm w-full">
                        {t('hero.cta_book')}
                        <ChevronDown className="w-5 h-5 animate-bounce" />
                    </button>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">{t('hero.guarantee')}</p>
                </div>
            </div>
        </section>
    );
}
