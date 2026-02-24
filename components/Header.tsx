// components/Header.tsx
import { Clapperboard } from 'lucide-react';
import Link from 'next/link';

// или просто <a> если без роутера

export default function Header() {


    return (
        <header className="bg-linear-to-r from-gray-950 via-black to-gray-950 border-b border-gray-800/70 sticky top-0 z-50 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Логотип + название */}
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-2.5">
                            <div className="flex items-center gap-3">
                                <Clapperboard className="w-9 h-9 text-amber-500" strokeWidth={1.8} />
                                <div>
                                    <h1 className="text-2xl font-bold text-white tracking-tight">TOPKino.NET</h1>
                                    <p className="text-xs text-gray-500">2013 — 2025</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Десктопное меню */}
                    <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                        <Link href="/">Бош саҳифа</Link>
                        <Link href="/kino">Кино</Link>
                        <Link href="/serial">Сериал</Link>
                        <Link href="/multfilm">Мультфилм</Link>
                    </nav>

                    {/* Поиск + мобильное меню */}
                    <div className="flex items-center gap-4">

                        {/* Поле поиска */}
                        <div className="relative hidden sm:block w-64 lg:w-80">
                            <input
                                type="text"
                                placeholder="Qidirish..."
                                className="
                  w-full bg-gray-900/70 border border-gray-700 rounded-full 
                  pl-10 pr-4 py-2 text-sm text-gray-200 placeholder-gray-500
                  focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/40
                  transition-all duration-200
                "
                            />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Мобильная кнопка меню */}
                        <button
                            className="md:hidden text-gray-300 hover:text-white focus:outline-none"

                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Мобильное меню */}
        </header >
    );
}

// Вспомогательные компоненты