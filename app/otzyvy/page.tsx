import Link from 'next/link';

export default function Otzyvy() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-4 bg-white text-black">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-black uppercase mb-8">Отзывы</h1>
                <p className="text-xl font-bold mb-8">Страница находится в разработке.</p>
                <Link href="/" className="inline-block bg-black text-[#FFF500] px-8 py-4 rounded-full font-black uppercase hover:scale-105 transition-transform">
                    На главную
                </Link>
            </div>
        </main>
    );
}
