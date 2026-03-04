"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { series, type Series } from "@/lib/data";

function SeriesCard({ item }: { item: Series }) {
    const imdbColor =
        item.imdb >= 7 ? "#f5c518" : item.imdb >= 5 ? "#e2b04a" : "#aaa";

    return (
        <Link href={`/serial/${item.id}`} className="block w-full">
            <div className="group relative rounded-xl overflow-hidden bg-[#16161e] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl w-full">
                {/* Poster */}
                <div className="relative w-full" style={{ aspectRatio: "2/3" }}>
                    <Image
                        src={item.poster}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 20vw"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#16161e]" />

                    {/* IMDb badge */}
                    <div className="absolute top-2 left-2 bg-[#f5c518] text-black text-[10px] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-1">
                        <span className="text-[9px]">IMDb </span>
                        <span style={{ color: imdbColor }}>{item.imdb}</span>
                    </div>

                    {/* Seasons badge */}
                    <div className="absolute top-2 right-2 bg-orange-500/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                        {item.seasons} mavsum
                    </div>

                    {/* Episodes count */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-[#ccc] text-[10px] px-1.5 py-0.5 rounded font-mono">
                        📺 {item.episodes} qism
                    </div>

                    {/* Play button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                                <path d="M4 2.5l10 5.5-10 5.5V2.5z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Info */}
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
}

interface SeriesCardsProps {
    series?: Series[];
}

export default function SeriesCards({ series: seriesProp = series }: SeriesCardsProps) {
    return (
        <>
            <style>{`
        .swiperCards .swiper-wrapper {
          align-items: flex-start !important;
        }
        .swiperCards .swiper-slide {
          height: auto !important;
        }
      `}</style>

            <Swiper
                slidesPerView={1}
                spaceBetween={12}
                pagination={false}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 12 },
                    768: { slidesPerView: 4, spaceBetween: 12 },
                    1024: { slidesPerView: 6, spaceBetween: 12 },
                }}
                modules={[Pagination]}
                className="swiperCards"
            >
                {seriesProp.map((item) => (
                    <SwiperSlide key={item.id} className="swiperCard !h-auto">
                        <SeriesCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}