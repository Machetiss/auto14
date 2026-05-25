import Link from 'next/link';
import { carBrands } from '@/app/data/carBrands';
import { PackageSearch, ChevronRight } from 'lucide-react';

export const metadata = {
    title: 'Каталог масел и фильтров по маркам авто | Авто14',
    description: 'Узнайте точный объем масла и артикулы фильтров для вашего автомобиля. Официальные допуски и рекомендации.',
};

export default function CatalogPage() {
    return (
        <div className="min-h-screen bg-brand-yellow pt-32 pb-24 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
                    <div className="bg-black text-brand-yellow p-4 rounded-2xl shadow-xl">
                        <PackageSearch className="w-12 h-12" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                            Справочник <span className="text-accent-orange">ТО</span>
                        </h1>
                        <p className="text-xl font-bold opacity-70 uppercase tracking-widest">
                            Масла, фильтры и объемы для вашего авто
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {carBrands.map((brand) => (
                        <Link
                            key={brand.slug}
                            href={`/catalog/${brand.slug}`}
                            className="bg-white p-6 rounded-2xl border-4 border-black shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col items-center text-center group"
                        >
                            <span className="text-lg font-black uppercase mb-2 group-hover:text-accent-orange transition-colors">
                                {brand.name}
                            </span>
                            <ChevronRight className="w-5 h-5 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>

                <div className="mt-24 bg-black text-white p-12 rounded-[3rem] border-4 border-black shadow-[12px_12px_0_#FEE500]">
                    <h2 className="text-3xl font-black uppercase mb-6 text-brand-yellow">Почему это важно?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-lg opacity-80 leading-relaxed font-bold">
                                Использование неподходящего масла или фильтра может привести к дорогостоящему ремонту двигателя. Наш справочник содержит проверенные данные о заправочных объемах и допусках.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 bg-brand-yellow rounded-full"></div>
                                <p className="font-black uppercase tracking-wider text-sm">Точные объемы (с точностью до 0.1л)</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 bg-brand-yellow rounded-full"></div>
                                <p className="font-black uppercase tracking-wider text-sm">Оригинальные артикулы фильтров</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 bg-brand-yellow rounded-full"></div>
                                <p className="font-black uppercase tracking-wider text-sm">Официальные допуски (API/ACEA/VW/BMW)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
