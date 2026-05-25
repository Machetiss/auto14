import Link from 'next/link';
import { BookOpen, ChevronRight, Clock } from 'lucide-react';

export const metadata = {
    title: 'Полезные советы и статьи для автовладельцев | Блог Авто14',
    description: 'Читайте экспертные статьи о ремонте и обслуживании автомобилей. Как сэкономить на ТО и продлить жизнь двигателя.',
};

const blogPosts = [
    {
        slug: 'kogda-delat-shod-razval',
        title: '5 признаков того, что вам пора делать сход-развал',
        excerpt: 'Руль стоит неровно? Машину тянет в сторону? Рассказываем, как понять, что пора на стенд Hoffman.',
        date: '20.04.2026',
        readTime: '5 мин'
    },
    {
        slug: 'kak-vybrat-maslo',
        title: 'Как выбрать моторное масло и не убить двигатель',
        excerpt: 'Разбираемся в допусках API, ACEA и почему NGN — отличный выбор для климата Казани.',
        date: '15.04.2026',
        readTime: '7 мин'
    },
    {
        slug: 'diagnostika-podveski-besplatno',
        title: 'Почему мы делаем диагностику подвески бесплатно?',
        excerpt: 'Честный подход к ремонту: сначала находим реальную причину стука, потом считаем цену.',
        date: '10.04.2026',
        readTime: '4 мин'
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-brand-yellow pt-32 pb-24 px-4 md:px-12">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
                    <div className="bg-black text-brand-yellow p-4 rounded-2xl shadow-xl">
                        <BookOpen className="w-12 h-12" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                            Блог <span className="text-accent-orange">Авто14</span>
                        </h1>
                        <p className="text-xl font-bold opacity-70 uppercase tracking-widest">
                            Советы экспертов и новости сервиса
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="bg-white p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col h-full group"
                        >
                            <div className="flex items-center gap-4 mb-4 text-xs font-black uppercase opacity-50">
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                            </div>
                            <h2 className="text-2xl font-black uppercase mb-4 group-hover:text-accent-orange transition-colors">
                                {post.title}
                            </h2>
                            <p className="font-bold opacity-60 mb-6 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center gap-2 font-black uppercase text-sm">
                                Читать статью <ChevronRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
