

import { MovieType } from "@/types/MovieType";
import Image from "next/image";
import Link from "next/link";

const TopRatedMovies = async () => {

    const movies = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie", { next: { revalidate: 3600 } })
    const allMovies = await movies.json();

    const topRatedMovies = allMovies?.filter((el: MovieType) => el.imdb_rating >= 8);

    return (
        <div className="max-w-200 w-full border-2 border-zinc-700 rounded-[40px] p-5 flex flex-col gap-4">

            {/* top small block */}
            <h1 className="uppercase pt-5 text-[22px] font-bold">Reytingi baland kinolar</h1>

            {/* cards */}
            <div className="w-full flex flex-col gap-1">
                {topRatedMovies?.slice(0, 10)?.map((el: MovieType) => (
                    <Link href={`/movies/${el.id}`} key={el.id} className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900 hover:bg-white/20 transition-colors">
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
                ))}
            </div>

        </div>
    );
}

export default TopRatedMovies;