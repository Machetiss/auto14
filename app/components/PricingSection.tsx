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
    { name: 'Проверка углов на 3D-стенде (без регулировки)', nameEn: '3D alignment check (without adjustment)', price: 500, note: 'если углы в норме', noteEn: 'if angles are within spec' },
    { name: 'Авто с задней балкой — схождение 1 ось (Vesta, Rio, Solaris, Polo, Logan)', nameEn: 'Rear torsion beam cars — front toe 1 axle (Vesta, Rio, Solaris, Polo)', price: 1500 },
    { name: 'LADA Granta, Kalina, Priora, ВАЗ 2110–2112 (схождение + развал + кастор)', nameEn: 'LADA Granta, Kalina, Priora, VAZ 2110–2112 (toe + camber + caster)', price: 2200, note: 'зависит от состояния рег. элементов', noteEn: 'depends on adjustment bolt condition' },
    { name: 'Легковые с многорычажкой и малые паркетники (Focus, Ceed, Octavia, Camry, Creta, Duster)', nameEn: 'Multi-link cars & compact SUVs (Focus, Ceed, Octavia, Camry, Creta, Duster)', price: 1500, note: '1–2 оси: от 1 500 до 3 000 ₽', noteEn: '1–2 axles: 1,500–3,000 ₽' },
    { name: 'Среднеразмерные кроссоверы (RAV4, Sportage, Tucson, Tiguan, CX-5, Tiggo 7/8, Haval, Monjaro)', nameEn: 'Mid-size SUVs (RAV4, Sportage, Tucson, Tiguan, CX-5, Chery, Haval, Geely)', price: 1500, note: '1–2 оси: от 1 500 до 3 500 ₽', noteEn: '1–2 axles: 1,500–3,500 ₽' },
    { name: 'ВАЗ 2108–2115 (Самара: девятка, четырка) — развал + схождение + кастор', nameEn: 'VAZ 2108–2115 — camber + toe + caster', price: 3000 },
    { name: 'Нива (Legend, Travel, 4x4), ВАЗ Классика 2101–2107', nameEn: 'LADA Niva, VAZ Classic 2101–2107', price: 3500 },
    { name: 'Land Cruiser 100/200/300, Prado 120/150, SsangYong — развал + кастор + схождение', nameEn: 'Land Cruiser, Prado, SsangYong — camber + caster + toe', price: 3500 },
    { name: 'Крупные кроссоверы и немецкий премиум (Sorento, Santa Fe, BMW, Mercedes, Audi, Touareg, Cayenne)', nameEn: 'Large SUVs & German premium (Sorento, Santa Fe, BMW, Mercedes, Audi, Touareg, Cayenne)', price: 2000, note: '1–2 оси: от 2 000 до 4 500 ₽', noteEn: '1–2 axles: 2,000–4,500 ₽' },
    { name: 'УАЗ Патриот / Хантер, Toyota Hiace, VW Transporter / Caravelle / Multivan', nameEn: 'UAZ Patriot / Hunter, Toyota Hiace, VW Transporter / Multivan', price: 4000, note: 'Transporter 2 оси — до 5 500 ₽', noteEn: 'Transporter 2 axles — up to 5,500 ₽' },
];

const tiresData: PriceItem[] = [
    { name: 'R13 – R15 (комплект 4 колеса с балансировкой)', nameEn: 'R13 – R15 (set of 4 with balancing)', price: 2500, note: 'единая цена за комплект', noteEn: 'fixed price for set' },
    { name: 'R16 (легковые 2 800 ₽ / кроссоверы до 3 200 ₽)', nameEn: 'R16 (sedans 2,800 ₽ / SUVs up to 3,200 ₽)', price: 2800, note: 'кроссоверы до 3 200 ₽', noteEn: 'SUVs up to 3,200 ₽' },
    { name: 'R17 (легковые 3 000 ₽ / кроссоверы до 3 600 ₽)', nameEn: 'R17 (sedans 3,000 ₽ / SUVs up to 3,600 ₽)', price: 3000, note: 'кроссоверы до 3 600 ₽', noteEn: 'SUVs up to 3,600 ₽' },
    { name: 'R18 (легковые 3 300 ₽ / кроссоверы до 3 800 ₽)', nameEn: 'R18 (sedans 3,300 ₽ / SUVs up to 3,800 ₽)', price: 3300, note: 'кроссоверы до 3 800 ₽', noteEn: 'SUVs up to 3,800 ₽' },
    { name: 'R19 (легковые от 3 500 ₽ / кроссоверы до 4 000 ₽)', nameEn: 'R19 (sedans from 3,500 ₽ / SUVs up to 4,000 ₽)', price: 3500, note: 'до 4 000 ₽ для больших авто', noteEn: 'up to 4,000 ₽ for large vehicles' },
    { name: 'R20 (легковые от 3 700 ₽ / большие авто до 4 500 ₽)', nameEn: 'R20 (sedans from 3,700 ₽ / large vehicles up to 4,500 ₽)', price: 3700, note: 'до 4 500 ₽ для больших авто', noteEn: 'up to 4,500 ₽ for large vehicles' },
    { name: 'R21 (комплект с балансировкой)', nameEn: 'R21 (set with balancing)', price: 4700, note: 'до 4 700 ₽', noteEn: 'up to 4,700 ₽' },
    { name: 'R22 (комплект с балансировкой)', nameEn: 'R22 (set with balancing)', price: 5000, note: 'до 5 000 ₽', noteEn: 'up to 5,000 ₽' },
];

const repairData: PriceItem[] = [
    { name: 'Диагностика (осмотр) ходовой на подъёмнике', nameEn: 'Suspension inspection on lift', price: 0, note: 'всегда бесплатно', noteEn: 'always free' },
    { name: 'Замена дисковых тормозных колодок (за 1 колесо)', nameEn: 'Disc brake pads replacement (per wheel)', price: 800, note: 'с электроручником — от 1 200 ₽', noteEn: 'with EPB — from 1,200 ₽' },
    { name: 'Замена стойки стабилизатора', nameEn: 'Stabilizer link replacement', price: 800, note: 'за 1 шт.', noteEn: 'per unit' },
    { name: 'Замена рулевого наконечника', nameEn: 'Tie rod end replacement', price: 800, note: 'за 1 шт.', noteEn: 'per unit' },
    { name: 'Замена шаровой опоры (на болтах, без снятия рычага)', nameEn: 'Ball joint replacement (bolted, without arm removal)', price: 800, note: 'за 1 шт.', noteEn: 'per unit' },
    { name: 'Замена масла в ДВС и масляного фильтра', nameEn: 'Engine oil & filter change', price: 1000, note: 'снятие нештатной защиты +300–500 ₽', noteEn: 'skid plate removal +300–500 ₽' },
    { name: 'Замена заднего амортизатора (отдельно от пружины)', nameEn: 'Rear shock absorber replacement (separate from spring)', price: 1300, note: 'за 1 шт.', noteEn: 'per unit' },
    { name: 'Замена рулевой тяги', nameEn: 'Inner tie rod replacement', price: 1800, note: 'наконечник и пыльник с этой стороны входят в цену', noteEn: 'includes tie rod end & boot on same side' },
    { name: 'Замена передней стойки в сборе (на болтах)', nameEn: 'Front strut assembly replacement (bolted)', price: 2000, note: 'за 1 сторону, зажимная VAG/Focus — от 3 500 ₽', noteEn: 'per side, pinch-bolt VAG/Focus — from 3,500 ₽' },
    { name: 'Замена шаровой опоры (прессованная / на заклёпках)', nameEn: 'Ball joint replacement (pressed / riveted / arm removal)', price: 2000, note: 'со снятием рычага', noteEn: 'includes arm removal' },
    { name: 'Снятие / установка переднего рычага подвески', nameEn: 'Front control arm removal / installation', price: 2000, note: 'перепрессовка сайлентблока от 600 ₽', noteEn: 'bushing press from 600 ₽' },
    { name: 'Замена наружного ШРУСа (гранаты) или пыльника', nameEn: 'Outer CV joint or boot replacement', price: 2500, note: 'внутренний ШРУС / привод — от 3 000 ₽', noteEn: 'inner CV joint / axle — from 3,000 ₽' },
    { name: 'Замена тормозных дисков (за ось, оба диска)', nameEn: 'Brake discs replacement (per axle, both discs)', price: 3000, note: 'замена колодок входит в цену', noteEn: 'includes brake pads replacement' },
    { name: 'Замена ступичного подшипника (с перепрессовкой)', nameEn: 'Wheel bearing replacement (pressed)', price: 3500, note: 'ступица на болтах без пресса — от 3 000 ₽', noteEn: 'bolt-on hub assembly — from 3,000 ₽' },
    { name: 'Замена сайлентблоков задней балки (комплект, 2 стороны)', nameEn: 'Rear axle beam bushings replacement (both sides)', price: 8000, note: 'фиксированная цена за ось', noteEn: 'fixed price for axle' },
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
