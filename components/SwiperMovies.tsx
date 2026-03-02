"use client"

import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Image from "next/image"
import { MovieType } from "@/types/MovieType"
import { FaPlay, FaRegClock } from "react-icons/fa"
import Link from "next/link"

const SwiperMovie = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie", {next: {revalidate: 3600}})
                const data = await res.json()
                console.log(data);
                
                setMovies(data)
            } catch (err) {
                console.error("Failed to fetch movies:", err)
            }
        }

        fetchMovies()
    }, [])

    return (
        <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            speed={1300}
            spaceBetween={30}
            pagination={false}
            loop={true}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
        >

            {movies.map((el: MovieType) => (
                // ...existing code...
                <SwiperSlide key={el.id}>
                    <div className="banner-text group duration-300 flex flex-col items-start p-10 justify-end overflow-hidden">
                        {/* Overlay */}
                        <div className="banner-overlay group-hover:bg-black/60 backdrop-blur-[0px] peer-hover:backdrop-blur-[15px] absolute inset-0 bg-black/70 transition-all duration-300 z-10"></div>
                        {/* Button Play */}
                        <Link href={`/movies/${el.id}`}>
                            <div className="button-play hidden group-hover:flex hover:scale-[0.8] border-[orange] border-5 hover:shadow-[0px_0px_15px_10px] hover:shadow-[white] hover:border-white duration-300 absolute bottom-20 right-20 rounded-full p-7 bg-[orange] z-20">
                                <FaPlay className="text-[20px]" /> 
                            </div>
                        </Link>
                        {/* Image */}
                        <div className=" z-0">
                            <Image fill className="object-cover" src={el.poster_url} alt="" />
                        </div>
                        {/* Text */}
                        <div className="banner-info absolute bottom-0 left-0 text-start p-10 z-20 flex flex-col gap-1">
                            <h1 className="text-[42px] max-w-125 w-full font-bold text-[orange]">{el.title_uz}</h1>
                            <div className="flex">
                                <span className="flex items-center backdrop-blur-[15px] py-2.5 px-3 border border-[#838282] rounded-[15px]">
                                    <p className="bg-[#ffc800] rounded-r-none text-black leading-5 font-bold p-0.5 rounded-md">IMDb</p>
                                    <p className="bg-black leading-6 px-2 rounded-l-none rounded-md">{el.imdb_rating}</p>
                                </span>
                            </div>

                            <div className="flex items-center gap-5 mt-2">
                                <p className="backdrop-blur-[15px] py-1.5 px-3 border border-[#838282] rounded-[15px]">{el.release_year}</p>
                                <p className="backdrop-blur-[15px] py-1.5 px-3 border border-[#838282] rounded-[15px]">{el.country}</p>
                                <span className="backdrop-blur-[15px] py-1.5 px-3 border border-[#838282] rounded-[15px]"><p className="flex items-center gap-2 "><FaRegClock />{el.duration_minutes} min</p></span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                // ...existing code...
            ))}

        </Swiper>
    )
}

export default SwiperMovie