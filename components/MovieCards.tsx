"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { CategorizedType } from '@/types/CategorizedType';
import { MovieType } from '@/types/MovieType';
import { CategoryType } from '@/types/CategoryType';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay, FaRegClock } from 'react-icons/fa6';

const MovieCards = () => {

    const [categorized, setCategorized] = useState<CategorizedType[]>([]);
    const [movieCategory, setMovieCategory] = useState<CategoryType[]>([]);
    const [movies, setMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const categorizedMoviesData = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_category", { next: { revalidate: 3600 } });
                const categoryMoviesData = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/category", { next: { revalidate: 3600 } });
                const moviesData = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie", { next: { revalidate: 3600 } });
                const categorizedMovies = await categorizedMoviesData.json()
                const categoryMovies = await categoryMoviesData.json()
                const allMovies = await moviesData.json()


                setCategorized(categorizedMovies)
                setMovieCategory(categoryMovies)
                setMovies(allMovies)
            } catch (err) {
                console.error("Failed to fetch movie categories:", err)
            }
        }

        fetchMovies()
    }, [])

    // console.log(categorized);
    // console.log(movieCategory);
    // console.log(movies);

    const movieId = movieCategory[0]?.id;
    const cartoonId = movieCategory[1]?.id;


    const categorizedMovies = categorized?.filter((item) => item.category_id === movieId);
    const categorizedCartoons = categorized?.filter((item) => item.category_id === cartoonId);

    // console.log(categorizedMovies);
    // console.log(categorizedCartoons);

    const categorizedMovieIds = categorizedMovies?.map((item) => item.movie_id);
    const categorizedCartoonIds = categorizedCartoons?.map((item) => item.movie_id);

    // console.log(categorizedMovieIds);
    // console.log(categorizedCartoonIds);

    const moviesInMovieCategory = movies?.filter((movie) => categorizedMovieIds?.includes(movie.id));
    const moviesInCartoonCategory = movies?.filter((movie) => categorizedCartoonIds?.includes(movie.id));

    // console.log(moviesInMovieCategory);
    // console.log(moviesInCartoonCategory);

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={false}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="swiperCards"
            >

                {moviesInMovieCategory?.map((movie: MovieType) => (
                    <SwiperSlide key={movie.id} className='swiperCard relative rounded-2xl'>
                        <div className='relative group h-full'>
                            <Image
                                src={movie.poster_url}
                                alt={movie.title_uz}
                                className="card-image w-full h-full object-cover rounded-3xl"
                                width={200}
                                height={300}
                            />
                            {/* Play button overlay */}
                            <div className='absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm transition-all duration-300 rounded-3xl'>
                                <Link className='w-20 h-20 flex items-center justify-center bg-white rounded-full cursor-pointer hover:scale-110 transition-transform' href={`/movies/${movie.id}`}>
                                    <div className="button-play md:hidden block group-hover:flex hover:scale-[0.9] border-[orange] border-5 hover:shadow-[0px_0px_15px_10px] hover:shadow-[white] hover:border-white duration-300 absolute rounded-full p-3.5 md:p-7 bg-[orange] z-20">
                                        <FaPlay className="text-[15px] md:text-[20px]" />
                                    </div>
                                </Link>
                            </div>
                            {/* IMDb Rating Badge */}
                            <div className='absolute top-4 right-4 text-black px-2 py-1.5 backdrop-blur-md rounded-xl border border-white/50 font-bold flex items-center gap-1'>
                                <span className='text-sm bg-yellow-300 px-3 rounded-lg'>IMDb</span>
                                <span className='text-base text-[white]'>{movie.imdb_rating}</span>
                            </div>
                            {/* Title at bottom */}
                            <div className='absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent p-4 rounded-b-3xl'>
                                <h3 className='text-white text-start font-bold text-[18px] line-clamp-2'>{movie.title_uz}</h3>
                                <div className='flex justify-start items-center gap-4 mt-2'>
                                    <h3 className='text-gray-300 flex items-center gap-2 text-sm backdrop-blur-[15px] py-1.5 px-3 border text-[12px] md:text-[14px] border-[#838282] rounded-[15px]'><FaRegClock /> {movie.duration_minutes} min</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </>
    );
}

export default MovieCards;