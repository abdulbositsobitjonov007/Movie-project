// components/Header.tsx
import { Clapperboard, Home, Film, Tv, Sparkles, Sun } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header
            className="
        sticky top-0 z-50
        border-b border-white/10
        bg-linear-to-r from-zinc-950/60 via-black/45 to-zinc-950/60
        backdrop-blur-md
        supports-backdrop-filter:bg-black/35
      "
        >
            <div className="mx-auto w-full container px-3 sm:px-4 lg:px-6">
                {/* MOBILE (<= md) */}
                <div className="md:hidden h-14 grid grid-cols-3 items-center">
                    {/* Left: burger */}
                    <button
                        className="justify-self-start grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 text-zinc-200 hover:bg-white/10 transition"
                        aria-label="Menu"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Center: logo */}
                    <Link href="/" className="justify-self-center flex items-center gap-2">
                        <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                            <Clapperboard className="h-5 w-5 text-lime-400" strokeWidth={1.8} />
                        </div>

                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-extrabold tracking-tight text-white">TOP</span>
                            <span className="text-2xl font-extrabold tracking-tight text-[orange]">Kino</span>
                            <span className="text-2xl font-extrabold tracking-tight text-white">.NET</span>
                        </div>
                    </Link>

                    {/* Right: theme */}
                    <button
                        type="button"
                        className="justify-self-end grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 text-zinc-200 hover:bg-white/10 transition"
                        aria-label="Theme"
                    >
                        <Sun className="h-5 w-5" />
                    </button>
                </div>

                {/* DESKTOP (md+) */}
                <div className="hidden md:flex h-14 lg:h-16 items-center gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 shrink-0">
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                            <Clapperboard className="h-6 w-6 text-[orange]" strokeWidth={1.8} />
                        </div>

                        <div className="leading-tight">
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-extrabold tracking-tight text-white">TOP</span>
                                <span className="text-2xl font-extrabold tracking-tight text-[orange]">Kino</span>
                                <span className="text-2xl font-extrabold tracking-tight text-white">.NET</span>
                            </div>
                        </div>
                    </Link>

                    {/* Search */}
                    <div className="flex-1">
                        <div className="relative max-w-xl">
                            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </span>

                            <input
                                type="text"
                                placeholder="Qidirish..."
                                className="w-full rounded-2xl bg-white/5 px-11 pr-24 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 ring-1 ring-white/10 outline-none transition focus:ring-lime-400/40"
                            />

                            <button
                                type="button"
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/15 transition"
                            >
                                Qidirish
                            </button>
                        </div>
                    </div>

                    {/* Nav */}
                    <nav className="flex items-center gap-2 text-zinc-200 shrink-0">
                        <Link href="/" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                            <Home className="h-4 w-4" />
                            Bosh sahifa
                        </Link>

                        <Link href="/kino" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                            <Film className="h-4 w-4" />
                            Kino
                        </Link>

                        <Link href="/serial" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                            <Tv className="h-4 w-4" />
                            Serial
                        </Link>

                        <Link href="/multfilm" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                            <Sparkles className="h-4 w-4" />
                            Multfilm
                        </Link>

                        <button
                            type="button"
                            className="ml-1 grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 text-zinc-200 hover:bg-white/10 transition"
                            aria-label="Theme"
                        >
                            <Sun className="h-5 w-5" />
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}