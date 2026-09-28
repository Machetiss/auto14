import Link from 'next/link';
import { BookOpen, ChevronRight, Clock } from 'lucide-react';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Блог автосервиса Авто14 | Советы мастеров',
    description: 'Практические статьи о ремонте подвески, регулировке сход-развала и обслуживании авто в Казани. Советы мастеров СТО Авто14.',
};

const blogPosts = [
    {
        slug: 'kogda-delat-shod-razval',
        title: '5 признаков того, что вам пора делать сход-развал',
        excerpt: 'Руль стоит неровно? Машину тянет в сторону или подъедает резину? Рассказываем, как понять, что пора на 3D стенд Hoffman.',
        date: '20.04.2026',
        readTime: '5 мин'
    },
    {
        slug: 'kak-vybrat-maslo',
        title: 'Как выбрать моторное масло и не убить двигатель',
        excerpt: 'Разбираемся в допусках API, ACEA и почему качественные масла — лучший выбор для климата Казани и пробок.',
        date: '15.04.2026',
        readTime: '7 мин'
    },
    {
        slug: 'diagnostika-podveski-besplatno',
        title: 'Почему мы делаем диагностику подвески бесплатно?',
        excerpt: 'Честный подход к ремонту: сначала находим реальную причину стука на подъёмнике, а потом фиксируем смету.',
        date: '10.04.2026',
        readTime: '4 мин'
    },
    {
        slug: 'podgotovka-k-zime-podveska',
        title: 'Подготовка подвески и сход-развала к зимнему сезону',
        excerpt: 'Почему после перехода на зимнюю резину необходимо проверить углы колес и состояние пыльников амортизаторов.',
        date: '02.04.2026',
        readTime: '6 мин'
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
                            Блог автосервиса <span className="text-accent-orange">Авто14</span>
                        </h1>
                        <p className="text-xl font-bold opacity-70 uppercase tracking-widest">
                            Советы экспертов и технические регламенты
                        </p>
                    </div>
                </div>

                {/* Direct definition answer block after H1 */}
                <div className="bg-white border-4 border-black rounded-2xl p-6 mb-12 shadow-[6px_6px_0px_#000]">
                    <p className="text-base md:text-lg font-bold leading-relaxed text-black">
                        Блог автосервиса «Авто14» в Казани — это база практических руководств, технических регламентов и рекомендаций опытных автомехаников по ремонту ходовой части, регулировке 3D сход-развала и техобслуживанию автомобилей. Все материалы написаны мастерами СТО на Заречной 5Б со стажем более 10 лет и актуализируются ежемесячно в 2026 году. Помогаем казанским водителям вовремя замечать износ узлов и экономить на капитальном ремонте.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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

                {/* Practical Maintenance Interval Table */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0_#000] mb-12">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                        Регламент проверки и обслуживания узлов автомобиля
                    </h2>
                    <p className="text-xs md:text-sm font-bold opacity-60 uppercase tracking-wider mb-6">
                        Рекомендованные межсервисные интервалы по данным мастеров СТО Авто14 для дорог Казани
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-xs md:text-sm font-bold">
                            <thead>
                                <tr className="border-b-4 border-black bg-black text-white uppercase font-black">
                                    <th className="p-3 md:p-4 rounded-tl-xl">Узел / Процедура</th>
                                    <th className="p-3 md:p-4">Периодичность</th>
                                    <th className="p-3 md:p-4">Признаки неисправности</th>
                                    <th className="p-3 md:p-4 rounded-tr-xl">Цена в Авто14</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-black/10">
                                <tr>
                                    <td className="p-3 md:p-4 font-black">3D сход-развал</td>
                                    <td className="p-3 md:p-4 opacity-80">Каждые 15 000 км или при смене шин</td>
                                    <td className="p-3 md:p-4 opacity-80">Увод руля, истирание кромки шин</td>
                                    <td className="p-3 md:p-4 font-black text-accent-orange">от 1400 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Диагностика подвески</td>
                                    <td className="p-3 md:p-4 opacity-80">Каждые 10 000–15 000 км</td>
                                    <td className="p-3 md:p-4 opacity-80">Глухие стуки, люфты, раскачка</td>
                                    <td className="p-3 md:p-4 font-black text-accent-orange">0 ₽ (Бесплатно)</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Замена масла и фильтра</td>
                                    <td className="p-3 md:p-4 opacity-80">Каждые 7 000–8 000 км</td>
                                    <td className="p-3 md:p-4 opacity-80">Потемнение масла, плановое ТО</td>
                                    <td className="p-3 md:p-4 font-black text-accent-orange">от 1000 ₽</td>
                                </tr>
                                <tr>
                                    <td className="p-3 md:p-4 font-black">Замена тормозных колодок</td>
                                    <td className="p-3 md:p-4 opacity-80">Каждые 30 000–40 000 км</td>
                                    <td className="p-3 md:p-4 opacity-80">Скрип, биение педали, износ накладок</td>
                                    <td className="p-3 md:p-4 font-black text-accent-orange">от 800 ₽</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Author Trust Info */}
                <div className="bg-black text-white p-6 md:p-8 rounded-[2rem] border-4 border-black shadow-[6px_6px_0px_#FF4500] flex flex-col md:flex-row items-center gap-6">
                    <div>
                        <h2 className="text-xl md:text-2xl font-black uppercase text-brand-yellow mb-2">
                            Экспертиза и проверка материалов
                        </h2>
                        <p className="text-sm md:text-base font-bold opacity-80 leading-relaxed">
                            Статьи блога подготовлены практикующими специалистами автосервиса «Авто14». Главный мастер-диагност и мастер стенда Hoffman лично проверяют все рекомендации перед публикацией. Вопросы и предложения присылайте по телефону: +7 (999) 269-93-59.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
}
