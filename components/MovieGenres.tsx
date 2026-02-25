"use client";

import { ChevronRight } from "lucide-react";

const genres = [
    { name: "Jangari", icon: "⚡" },
    { name: "Komediya", icon: "🙂" },
    { name: "Drama", icon: "💬" },
    { name: "Fantastika", icon: "✨" },
    { name: "Ujas", icon: "🌙" },
    { name: "Triller", icon: "👁️" },
    { name: "Harbiy", icon: "🛡️" },
    { name: "Multfilmlar", icon: "🐰" },
    { name: "Sarguzasht", icon: "🗺️" },
    { name: "Kriminal", icon: "🕵️" },
];

export default function MovieGenres() {
    return (
        <section className="py-5">
            <div className="container mx-auto">
                <h1 className="uppercase text-[22px] pb-5">Kino janrlar</h1>
                <div className=" flex items-center gap-3 overflow-x-auto scrollbar-hide py-2">


                    {genres.map((genre, index) => (
                        <button
                            key={index}
                            className="flex items-center gap-2 px-8 py-6 rounded-[20px] 
          bg-zinc-900 border border-zinc-700 text-gray-200 
          hover:bg-zinc-800 transition whitespace-nowrap"
                        >
                            <span className="text-sm">{genre.icon}</span>
                            <span className="text-sm font-medium uppercase">{genre.name}</span>
                        </button>
                    ))}

                    {/* Arrow button */}
                    <button
                        className="flex items-center justify-center min-w-10 h-10 
        rounded-xl bg-zinc-900 border border-zinc-700 hover:bg-zinc-800"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

        </section>
    );
}