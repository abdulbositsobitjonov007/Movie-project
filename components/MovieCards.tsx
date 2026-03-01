"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

interface Movie {
    id: number;
    title: string;
    genre: string;
    year: number;
    duration: number;
    imdb: number;
    poster: string;
}

const mockMovies: Movie[] = [
    { id: 1, title: "Xotiramdan o'chgan sevgi", genre: "Drama", year: 2025, duration: 106, imdb: 7.5, poster: "/posters/1.jpg" },
    { id: 2, title: "Shafqat / Kechirilmas qatl", genre: "Jangari", year: 2026, duration: 99, imdb: 6.1, poster: "/posters/2.jpg" },
    { id: 3, title: "Egizaklar / Ikki qiyofa", genre: "Komediya", year: 2014, duration: 160, imdb: 1.7, poster: "/posters/3.jpg" },
    { id: 4, title: "Qizil kapitan", genre: "Jangari", year: 2019, duration: 155, imdb: 7.2, poster: "/posters/4.jpg" },
    { id: 5, title: "Mutaxassis", genre: "Jangari", year: 2025, duration: 212, imdb: 8.4, poster: "/posters/5.jpg" },
    { id: 6, title: "Intiqom alangasi", genre: "Jangari", year: 2026, duration: 91, imdb: 4.1, poster: "/posters/6.jpg" },
    { id: 7, title: "Kimni sevishim kerak? 2", genre: "Drama", year: 2023, duration: 142, imdb: 4.7, poster: "/posters/7.jpg" },
    { id: 8, title: "Sevgiga tobelik", genre: "Drama", year: 2024, duration: 97, imdb: 5.5, poster: "/posters/8.jpg" },
    { id: 9, title: "Bugoniya", genre: "Komediya", year: 2025, duration: 119, imdb: 7.4, poster: "/posters/9.jpg" },
];

function MovieCard({ movie }: { movie: Movie }) {
    const imdbColor = movie.imdb >= 7 ? '#f5c518' : movie.imdb >= 5 ? '#e2b04a' : '#aaa';

    return (
        <div className="group relative rounded-xl overflow-hidden bg-[#16161e] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl w-full">
            {/* Poster */}
            <div className="relative w-full" style={{ aspectRatio: '2/3' }}>
                <Image
                    src={movie.poster}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 20vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#16161e]" />

                {/* IMDb badge */}
                <div className="absolute top-2 left-2 bg-[#f5c518] text-black text-[10px] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="text-[9px]">IMDb </span>
                    <span style={{ color: imdbColor }}>{movie.imdb}</span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-[#ccc] text-[10px] px-1.5 py-0.5 rounded font-mono">
                    ⏱ {movie.duration} min
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
                    {movie.title}
                </p>
                <p className="text-[#777] text-[10px]">
                    {movie.genre} • {movie.year}
                </p>
            </div>
        </div>
    );
}

interface MovieCardsProps {
    movies?: Movie[];
}

export default function MovieCards({ movies = mockMovies }: MovieCardsProps) {
    return (
        <>
            {/* Global style — SwiperSlide balandligini avtomatik qiladi */}
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
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id} className="swiperCard !h-auto">
                        <MovieCard movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}