// src/components/MovieCategories.tsx
import { Clapperboard, PlayCircle } from 'lucide-react';

const categories = [
    {
        title: "ФИЛЬМЫ",
        items: [
            "Ўзбекские (O'zbek kinolar)",
            "Зарубежные (Rus tilida kinolar)",
            "С Переводом (Tarjima kinolar)",
            "Русские",
            "Трейлеры (Treylerlar)",
        ],
    },
    {
        title: "СЕРИАЛЫ",
        items: [
            "Ўзбекские (O'zbek seriallar)",
            "Зарубежные (Rus tilida seriallar)",
            "С Переводом (Tarjima seriallar)",
            "Русские",
            "Трейлеры (Treylerlar)",
        ],
    },
    {
        title: "МУЛЬТФИЛЬМЫ",
        items: [
            "Ўзбекские (O'zbek multfilmlar)",
            "Зарубежные (Rus tilida multfilmlar)",
            "С Переводом (Tarjima multfilmlar)",
            "Русские",
            "Трейлеры (Treylerlar)",
        ],
    },
];

export default function MovieCategories() {
    return (
        <div className="min-h-screen bg-linear-to-b from-gray-950 via-black to-gray-950 text-gray-100">
            {/* Header / Branding */}
            <div className="border-b border-gray-800/60 bg-black/40 backdrop-blur-sm sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Clapperboard className="w-9 h-9 text-amber-500" strokeWidth={1.8} />
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">TOPKino.NET</h1>
                            <p className="text-xs text-gray-500">2013 — 2025</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-amber-400 transition-colors"
                            aria-label="Facebook"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-amber-400 transition-colors"
                            aria-label="Telegram"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.896 16.312c-.164.468-.508.84-.972 1.016-.618.234-1.446.178-2.282-.314l-3.72-2.212c-.37-.22-.622-.58-.7-.99l-.568-2.946c-.078-.406.038-.828.312-1.122l4.328-3.69c.412-.352 1.008-.3 1.36.112.352.412.3 1.008-.112 1.36l-3.714 3.166.442 2.292 3.302 1.962c.518.308 1.17.24 1.606-.172.436-.412.584-1.062.308-1.606l-1.668-3.068c-.276-.508-.046-1.142.462-1.418.508-.276 1.142-.046 1.418.462l1.668 3.068c.508.936.178 2.062-.73 2.53z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-amber-400 transition-colors"
                            aria-label="VK"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21.547 7h-3.04c-.469 0-.766.215-.938.656-.469 1.078-1.125 2.437-1.547 3.281-.234.469-.469.656-.703.656h-1.828c-.234 0-.469-.187-.703-.656l-.234-.656c-.234-.469-.469-.656-.703-.656h-3.515c-.234 0-.469.187-.703.656l-.234.656c-.234.469-.469.656-.703.656H6.61c-.469 0-.703-.187-.703-.656V7c0-.469.234-.656.703-.656h3.515c.234 0 .469.187.703.656l.234.656c.234.469.469.656.703.656h1.828c.234 0 .469-.187.703-.656l.234-.656c.234-.469.469-.656.703-.656h3.04c.469 0 .703.187.703.656v9.344c0 .469-.234.656-.703.656h-3.04c-.469 0-.703-.187-.703-.656v-3.515c0-.469.234-.656.703-.656h1.828c.234 0 .469.187.703.656l.234.656c.234.469.469.656.703.656h3.515c.234 0 .469-.187.703-.656l.234-.656c.234-.469.469-.656.703-.656h3.04c.469 0 .703.187.703.656v3.515c0 .469-.234.656-.703.656z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-5 py-12 md:py-16">
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-amber-700/40 transition-all duration-300 group"
                        >
                            <div className="bg-linear-to-r from-amber-900/30 to-amber-700/20 px-6 py-5 border-b border-gray-800/60">
                                <h2 className="text-2xl font-bold tracking-wide text-amber-400/90 group-hover:text-amber-300 transition-colors">
                                    {category.title}
                                </h2>
                            </div>

                            <div className="p-2">
                                {category.items.map((item, idx) => (
                                    <button
                                        key={idx}
                                        className="w-full text-left px-6 py-4 hover:bg-gray-800/50 active:bg-gray-700/60 transition-colors flex items-center gap-3 group/item"
                                    >
                                        <PlayCircle className="w-5 h-5 text-gray-600 group-hover/item:text-amber-500 transition-colors" />
                                        <span className="text-gray-200 group-hover/item:text-white transition-colors">
                                            {item}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact & Stats */}
                <div className="mt-16 text-center text-gray-500 text-sm">
                    <p className="mb-3">Daxxat.Net 2013–2025</p>
                    <div className="inline-flex items-center gap-6 bg-gray-900/50 px-6 py-3 rounded-full border border-gray-800">
                        <span>Pochta:</span>
                        <a
                            href="mailto:daxshattv2020@gmail.com"
                            className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                        >
                            daxshattv2020@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}