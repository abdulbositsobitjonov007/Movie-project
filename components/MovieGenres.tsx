import { GenreTypes } from "@/types/GenreTypes";
import Link from "next/link";


const MovieGenres = async () => {
    const data = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/genre`,
        { next: { revalidate: 3600 } }
    )

    const res = await data.json();
    console.log(res);


    return (
        <section className="py-5">
            <div className="container mx-auto">
                <h1 className="uppercase text-[22px] pb-5">Kino janrlar</h1>
                <div className=" flex items-center w-full gap-2 overflow-x-scroll scrollbar-hide py-2">


                    {res?.map((el: GenreTypes, idx: number) => (
                        <Link href={`/movies/genres/${el.id}`}
                            key={el.id ?? idx}
                            className="w-full flex items-center gap-2 px-8 py-6 rounded-[20px] 
      bg-zinc-900 border border-zinc-700 text-gray-200 
      hover:bg-zinc-800 transition whitespace-nowrap"
                        >
                            {/* <span className="text-sm"><Image src={el.} alt=""/></span> */}
                            <span className="text-sm font-medium uppercase">{el.name_uz}</span>
                        </Link>
                    ))}


                </div>
            </div>

        </section>
    );
}

export default MovieGenres;