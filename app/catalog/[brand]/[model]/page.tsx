import Link from 'next/link';
import { getSpecsByModel } from '@/lib/cars';
import { ChevronRight, Droplets, Filter, Info, Phone, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: { brand: string, model: string } }) {
    const brand = params.brand.charAt(0).toUpperCase() + params.brand.slice(1);
    const model = decodeURIComponent(params.model);
    return {
        title: `Объем масла и фильтры ${brand} ${model} | Справочник Авто14`,
        description: `Технические характеристики ТО для ${brand} ${model}: объем масла, допуски, артикулы фильтров MANN. Профессиональное обслуживание в Казани.`,
        alternates: {
            canonical: `/catalog/${params.brand.toLowerCase()}/${encodeURIComponent(params.model)}`,
        },
    };
}

export default function ModelSpecPage({ params }: { params: { brand: string, model: string } }) {
    const model = decodeURIComponent(params.model);
    const specs = getSpecsByModel(params.brand, model);
    
    if (specs.length === 0) {
        notFound();
    }

    const brand = params.brand.charAt(0).toUpperCase() + params.brand.slice(1);

    return (
        <div className="min-h-screen bg-brand-yellow pt-32 pb-24 px-4 md:px-12">
            <div className="max-w-4xl mx-auto">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 mb-8 text-sm font-bold uppercase opacity-60 overflow-x-auto whitespace-nowrap">
                    <Link href="/catalog" className="hover:text-black hover:opacity-100 transition-all">Каталог</Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <Link href={`/catalog/${params.brand}`} className="hover:text-black hover:opacity-100 transition-all">{brand}</Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <span className="text-black opacity-100">{model}</span>
                </nav>

                <div className="bg-white rounded-[3rem] border-8 border-black shadow-[16px_16px_0_#000] overflow-hidden">
                    {/* Header */}
                    <div className="bg-black text-white p-10 md:p-12 relative overflow-hidden">
                        <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                            <Droplets className="w-64 h-64" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 relative z-10">
                            {brand} <span className="text-brand-yellow">{model}</span>
                        </h1>
                        <div className="flex flex-wrap gap-4 relative z-10">
                            <span className="bg-brand-yellow text-black px-4 py-2 rounded-xl font-black text-sm uppercase flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {specs[0].year_from} – {specs[0].year_to || 'н.в.'}
                            </span>
                        </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="p-8 md:p-12">
                        {specs.map((spec, idx) => (
                            <div key={idx} className="mb-12 last:mb-0 border-b-4 border-black/5 pb-12 last:border-0 last:pb-0">
                                <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 flex items-center gap-3">
                                    <div className="w-2 h-8 bg-accent-orange"></div>
                                    Двигатель: {spec.engine_volume} ({spec.fuel_type})
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Oil Specs */}
                                    <div className="bg-black/5 p-8 rounded-3xl border-4 border-black/10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="bg-black text-brand-yellow p-3 rounded-xl">
                                                <Droplets className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-black uppercase">Масло в двигатель</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-xs font-black uppercase opacity-40 mb-1">Объем заливки</p>
                                                <p className="text-2xl font-black text-accent-orange">{spec.oil_fill_liters} л</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-black uppercase opacity-40 mb-1">Допуски / Спецификации</p>
                                                <p className="font-bold text-sm leading-tight">{spec.oil_specs}</p>
                                            </div>
                                            <div className="pt-4 border-t-2 border-black/5">
                                                <p className="text-xs font-black uppercase opacity-40 mb-2">Рекомендуемое масло NGN</p>
                                                <div className="bg-white p-3 rounded-xl border-2 border-black/10 flex justify-between items-center">
                                                    <span className="font-black text-xs">{spec.oil_ngn_5w30_product}</span>
                                                    <span className="text-[10px] font-bold opacity-50">{spec.oil_ngn_5w30_article}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Filter Specs */}
                                    <div className="bg-black/5 p-8 rounded-3xl border-4 border-black/10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="bg-black text-brand-yellow p-3 rounded-xl">
                                                <Filter className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-black uppercase">Фильтры (MANN)</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center bg-white p-4 rounded-xl border-2 border-black/10">
                                                <span className="font-black text-sm uppercase">Масляный</span>
                                                <span className="font-black text-accent-orange">{spec.filter_oil_mann || '—'}</span>
                                            </div>
                                            <div className="flex justify-between items-center bg-white p-4 rounded-xl border-2 border-black/10">
                                                <span className="font-black text-sm uppercase">Воздушный</span>
                                                <span className="font-black text-accent-orange">{spec.filter_air_mann || '—'}</span>
                                            </div>
                                            <div className="flex justify-between items-center bg-white p-4 rounded-xl border-2 border-black/10">
                                                <span className="font-black text-sm uppercase">Салонный</span>
                                                <span className="font-black text-accent-orange">{spec.filter_cabin_mann || '—'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="bg-brand-yellow/30 p-10 md:p-12 border-t-8 border-black text-center">
                        <h3 className="text-2xl md:text-3xl font-black uppercase mb-4">Узнали объем? Приезжайте на замену масла в Казани!</h3>
                        <p className="font-bold text-lg mb-8 opacity-90">Доставим нужное масло и фильтры за 2 часа. Запишитесь сейчас!</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#contacts" className="bg-black text-white px-8 py-4 rounded-2xl font-black uppercase tracking-wider shadow-[6px_6px_0_#FF4500] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" />
                                Записаться
                            </Link>
                            <div className="flex items-center justify-center gap-2 text-sm font-black uppercase opacity-60">
                                <Info className="w-5 h-5 text-accent-orange" />
                                Казань, ул. Заречная 5Б
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
