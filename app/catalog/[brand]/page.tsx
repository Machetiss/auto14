import Link from 'next/link';
import { getModelsByBrand } from '@/lib/cars';
import { ChevronRight, Car } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { brand: string } }) {
    const brandName = params.brand.charAt(0).toUpperCase() + params.brand.slice(1);
    return {
        title: `Каталог моделей ${brandName} | Характеристики ТО | Авто14`,
        description: `Выберите модель ${brandName}, чтобы узнать заправочные объемы масла и артикулы расходников.`,
        alternates: {
            canonical: `/catalog/${params.brand.toLowerCase()}`,
        },
    };
}

export default function BrandCatalogPage({ params }: { params: { brand: string } }) {
    const models = getModelsByBrand(params.brand);
    
    if (models.length === 0) {
        notFound();
    }

    const brandName = params.brand.charAt(0).toUpperCase() + params.brand.slice(1);

    return (
        <div className="min-h-screen bg-brand-yellow pt-32 pb-24 px-4 md:px-12">
            <div className="max-w-5xl mx-auto">
                <nav className="flex items-center gap-2 mb-8 text-sm font-bold uppercase opacity-60">
                    <Link href="/catalog" className="hover:text-black hover:opacity-100 transition-all">Каталог</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span>{brandName}</span>
                </nav>

                <div className="flex items-center gap-6 mb-12">
                    <div className="bg-black text-brand-yellow p-4 rounded-2xl">
                        <Car className="w-10 h-10" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                        Модели <span className="text-accent-orange">{brandName}</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {models.map((model) => (
                        <Link
                            key={model}
                            href={`/catalog/${params.brand}/${encodeURIComponent(model)}`}
                            className="bg-white p-8 rounded-2xl border-4 border-black shadow-[6px_6px_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex justify-between items-center group"
                        >
                            <span className="text-xl font-black uppercase">{model}</span>
                            <ChevronRight className="w-6 h-6 group-hover:text-accent-orange transition-all" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
