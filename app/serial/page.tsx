import Link from "next/link";
import Image from "next/image";
import { series } from "@/lib/data";

export const metadata = {
    title: "Seriallar — TOPKino.NET",
};

export default function SerialPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="uppercase text-[22px] pb-6 text-white">Barcha Seriallar</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {series.map((item) => {
                    const imdbColor =
                        item.imdb >= 7 ? "#f5c518" : item.imdb >= 5 ? "#e2b04a" : "#aaa";

                    return (
                        <Link key={item.id} href={`/serial/${item.id}`} className="block">
                            <div className="group relative rounded-xl overflow-hidden bg-[#16161e] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                                <div className="relative w-full" style={{ aspectRatio: "2/3" }}>
                                    <Image
                                        src={item.poster}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 50vw, 20vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#16161e]" />

                                    <div className="absolute top-2 left-2 bg-[#f5c518] text-black text-[10px] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-1">
                                        <span className="text-[9px]">IMDb </span>
                                        <span style={{ color: imdbColor }}>{item.imdb}</span>
                                    </div>

                                    <div className="absolute top-2 right-2 bg-orange-500/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                                        {item.seasons} mavsum
                                    </div>

                                    <div className="absolute bottom-2 right-2 bg-black/70 text-[#ccc] text-[10px] px-1.5 py-0.5 rounded font-mono">
                                        📺 {item.episodes} qism
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                                                <path d="M4 2.5l10 5.5-10 5.5V2.5z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-2.5 pb-3">
                                    <p className="text-[#eee] text-[12px] font-semibold leading-snug mb-1 line-clamp-2">
                                        {item.title}
                                    </p>
                                    <p className="text-[#777] text-[10px]">
                                        {item.genre} • {item.year}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}