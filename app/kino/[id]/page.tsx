import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { movies } from "@/lib/data";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const movie = movies.find((m) => m.id === Number(id));
    return {
        title: movie ? `${movie.title} — TOPKino.NET` : "Topilmadi",
    };
}

export default async function KinoDetailPage({ params }: Props) {
    const { id } = await params;
    const movie = movies.find((m) => m.id === Number(id));

    if (!movie) notFound();

    const imdbColor =
        movie.imdb >= 7 ? "#f5c518" : movie.imdb >= 5 ? "#e2b04a" : "#aaa";

    return (
        <div className="min-h-screen bg-[#0d0d14] text-white">
            {/* Hero section */}
            <div className="relative w-full h-[380px] md:h-[480px] overflow-hidden">
                <Image
                    src={movie.poster}
                    alt={movie.title}
                    fill
                    className="object-cover scale-105 blur-sm opacity-30"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d14]/40 via-transparent to-[#0d0d14]" />

                {/* Back button */}
                <div className="absolute top-6 left-4 md:left-8">
                    <Link
                        href="/kino"
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Kinolarga qaytish
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 -mt-32 relative z-10 pb-16">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Poster */}
                    <div className="flex-shrink-0 w-48 md:w-56 mx-auto md:mx-0">
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/60" style={{ aspectRatio: "2/3" }}>
                            <Image
                                src={movie.poster}
                                alt={movie.title}
                                fill
                                className="object-cover"
                                sizes="224px"
                                priority
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 pt-2">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-xs bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full px-3 py-0.5">
                                {movie.genre}
                            </span>
                            <span className="text-xs text-gray-500">{movie.year}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                            {movie.title}
                        </h1>

                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <div className="flex items-center gap-1.5 bg-[#f5c518]/10 border border-[#f5c518]/30 rounded-lg px-3 py-1.5">
                                <span className="text-[#f5c518] text-xs font-bold">IMDb</span>
                                <span style={{ color: imdbColor }} className="font-extrabold text-sm">
                                    {movie.imdb}
                                </span>
                                <span className="text-gray-500 text-xs">/10</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-1.5 text-sm text-gray-300">
                                ⏱ {movie.duration} daqiqa
                            </div>
                            <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-1.5 text-sm text-gray-300">
                                📅 {movie.year}
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xl">
                            {movie.description}
                        </p>

                        {/* Watch button */}
                        <button className="flex items-center gap-3 bg-orange-500 hover:bg-orange-400 transition-colors duration-200 text-white font-bold px-8 py-3 rounded-full text-sm shadow-lg shadow-orange-500/30">
                            <svg width="18" height="18" viewBox="0 0 16 16" fill="white">
                                <path d="M4 2.5l10 5.5-10 5.5V2.5z" />
                            </svg>
                            Tomosha qilish
                        </button>
                    </div>
                </div>

                {/* Fake video player */}
                <div className="mt-10">
                    <h2 className="text-lg font-semibold mb-4 text-gray-200">Video Pleyer</h2>
                    <div className="relative w-full rounded-2xl overflow-hidden bg-[#16161e] border border-white/5 shadow-2xl"
                        style={{ aspectRatio: "16/9" }}>
                        {/* Blurred poster bg */}
                        <Image
                            src={movie.poster}
                            alt=""
                            fill
                            className="object-cover opacity-10 blur-lg"
                            sizes="100vw"
                        />
                        {/* Play overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                            <button className="w-20 h-20 rounded-full bg-orange-500/90 hover:bg-orange-400 transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-2xl shadow-orange-500/40">
                                <svg width="28" height="28" viewBox="0 0 16 16" fill="white">
                                    <path d="M4 2.5l10 5.5-10 5.5V2.5z" />
                                </svg>
                            </button>
                            <p className="text-gray-500 text-sm">Kino yuklanmoqda...</p>
                        </div>
                        {/* Progress bar */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="w-full h-1 bg-white/20 rounded-full">
                                <div className="h-full w-0 bg-orange-500 rounded-full" />
                            </div>
                            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                                <span>0:00</span>
                                <span>{Math.floor(movie.duration / 60)}:{String(movie.duration % 60).padStart(2, "0")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}