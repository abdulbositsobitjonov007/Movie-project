"use client";

import { ActorType } from "@/types/ActorsType";
import { MovieType } from "@/types/MovieType";
import { SingleGenreType } from "@/types/SingleGenreType";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ReactPlayer from "react-player";





// ─── Sub-components ───────────────────────────────────────────────────────────
function ImdbBadge({ singleData }: { singleData: MovieType }) {
    return (
        <div className="flex items-center gap-1.5 bg-[#F5C518] rounded px-2 py-0.5">
            <span className="text-black font-black text-xs tracking-widest">IMDb</span>
            <span className="text-black font-bold text-sm">{singleData.imdb_rating}</span>
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function MovieDetailPage(
    { singleData, movieAllActors, singlePageGenres, recommendedMovies }: { singleData: MovieType; movieAllActors: ActorType[]; singlePageGenres: SingleGenreType; recommendedMovies: MovieType[] }
) {
    const [playing, setPlaying] = useState(false);
    // ─── Mock Data ────────────────────────────────────────────────────────────────


    return (
        <div className="min-h-screen bg-[#0f1117] text-white font-sans">
            {/* ── Breadcrumb ── */}
            <nav className="px-6 pt-5 pb-2 text-sm text-white/40 flex items-center gap-2">
                <a href="#" className="hover:text-white/70 transition-colors">Bosh sahifa</a>
                <span>•</span>
                <a href="#" className="hover:text-white/70 transition-colors">Tarjima kinolar</a>
                <span>•</span>
                <span className="text-white/80">{singleData.title_uz}</span>
            </nav>

            {/* ── Hero ── */}
            <div className="flex flex-col lg:flex-row gap-0">
                <div className="flex-1 px-6 py-4">
                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Poster */}
                        <div className="relative shrink-0 w-56 rounded-xl overflow-hidden shadow-2xl shadow-black/60 self-start">
                            <div className="aspect-2/3 bg-linear-to-b from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center relative">
                                {/* Decorative poster placeholder */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                                    <div className="w-16 h-1 bg-red-600 rounded" />
                                    <Image fill className="object-cover" src={singleData.poster_url} alt="" />
                                    <div className="w-16 h-1 bg-red-600 rounded" />
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex flex-col gap-4 flex-1">
                            <div className="flex items-start justify-between gap-3 flex-wrap">
                                <h1 className="text-3xl font-black tracking-tight leading-tight">
                                    {singleData.title_uz}
                                </h1>
                                <ImdbBadge singleData={singleData} />
                            </div>

                            <p className="text-white/50 text-sm">
                                Uzbek tilida&nbsp;•&nbsp;<span className="bg-sky-600/30 text-sky-300 px-2 py-0.5 rounded text-xs font-semibold">HD</span>&nbsp;•&nbsp;Online tomosha
                            </p>

                            {/* Play button */}
                            <button
                                onClick={() => setPlaying(!playing)}
                                className="flex items-center gap-3 bg-white text-black font-bold text-sm px-6 py-3 rounded-xl w-fit hover:bg-amber-400 transition-colors shadow-lg shadow-white/10 active:scale-95"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                Tomosha qilish
                            </button>

                            {/* Meta */}
                            <div className="flex flex-wrap gap-6 text-sm">
                                <div className="flex items-center gap-2 text-white/60">
                                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
                                        <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} />
                                        <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} />
                                        <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2} />
                                    </svg>
                                    <span className="text-white/60 text-xs uppercase tracking-wider">Yil:</span>
                                    <span className="text-white font-semibold">{singleData.release_year}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/60">
                                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" strokeWidth={2} />
                                        <polyline points="12 6 12 12 16 14" strokeWidth={2} />
                                    </svg>
                                    <span className="text-white/60 text-xs uppercase tracking-wider">Davomiyligi:</span>
                                    <span className="text-white font-semibold">{singleData.duration_minutes} min</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/60">
                                    <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" strokeWidth={2} />
                                        <line x1="2" y1="12" x2="22" y2="12" strokeWidth={2} />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth={2} />
                                    </svg>
                                    <span className="text-white/60 text-xs uppercase tracking-wider">Mamlakat:</span>
                                    <span className="text-white font-semibold">{singleData.country}</span>
                                </div>
                            </div>

                            {/* Genres */}
                            <div className="flex flex-wrap gap-2">
                                <span className="text-white/70 text-sm self-center">Janrlar:</span>
                                <div className="flex flex-wrap items-center gap-3">
                                    {
                                        singlePageGenres?.map((el: SingleGenreType) => {
                                            return (
                                                <div className="p-3 hover:border-[orange] text-[14px] duration-300 hover:text-white text-[#a5a3a3] cursor-pointer border border-[#8b8b8b] rounded-[10px]" key={el.id}><p className="">{el.name_uz}</p></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Cast ── */}
                    <div className="mt-8">
                        <h2 className="text-base font-bold text-white/70 mb-4 uppercase">Aktyorlar</h2>
                        <div className="flex items-start gap-7">
                            {
                                movieAllActors?.map((el) => {
                                    return (
                                        <div className="flex flex-col gap-2 items-center" key={el.id}>
                                            <div className="w-25 h-25 rounded-[20px] overflow-hidden border-2 border-transparent duration-300 hover:border-[orange]">
                                                <Image style={{ objectFit: 'cover', width: '100%', height: '100%' }} width={40} height={40} src={el.photo_url} alt={el.full_name} />
                                            </div>
                                            <h1 className="w-25 line-clamp-2 whitespace-wrap text-center">{el.full_name}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* ── Scene still ── */}
                    <div className="mt-8 rounded-2xl overflow-hidden bg-linear-to-b from-slate-800 to-slate-900 h-154 flex items-center justify-center relative">
                        <ReactPlayer controls={true} style={{ width: '100%', height: '100%', }} src={`https://www.youtube.com/watch?v=${singleData.video_url}`} />


                    </div>
                </div>

                {/* ── Sidebar ── */}
                <aside className="w-full lg:w-80 px-6 lg:px-4 py-4 lg:border-l border-white/5 shrink-0">
                    <div className="flex items-center gap-2 mb-4">
                        <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-white font-bold tracking-wide text-sm uppercase">Tavsiyalar</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        {
                            recommendedMovies?.map((el: MovieType) => {
                                return (
                                    <Link href={`/movies/${el.id}`} key={el.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors">
                                        <div className="w-15 shrink-0 rounded-[10px] h-20 overflow-hidden">
                                            <Image width={60} height={50} src={el.poster_url} alt={el.title_uz} className=" object-cover h-full" />
                                        </div>
                                        <div>
                                            <h1 className="text-md font-semibold text-white">{el.title_uz}</h1>
                                            <p className="flex text-[14px] items-center gap-1">
                                                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                {el.imdb_rating}
                                            </p>
                                            <p className="line-clamp-1 text-[12px] text-[gray]">
                                                {el.description_uz}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </aside>
            </div>
        </div>
    );
}