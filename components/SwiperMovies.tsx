"use client"

import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Image from "next/image"
import { MovieType } from "@/types/MovieType"
import { FaRegClock } from "react-icons/fa"

const SwiperMovie = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie")
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            speed={1800}
            spaceBetween={30}
            pagination={{ clickable: true }}
            loop={true}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
        >

            {movies.map((el: MovieType) => (
                // ...existing code...
                <SwiperSlide key={el.id}>
                    <div className="banner-text flex flex-col items-start p-10 justify-end overflow-hidden">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/70 z-10"></div>
                        {/* Image */}
                        <div className=" z-0">
                            <Image fill src={el.banner_url} alt="" />
                        </div>
                        {/* Text */}
                        <div className="absolute bottom-0 left-0 text-start p-10 z-20 flex flex-col gap-1">
                            <h1 className="text-[42px] font-bold text-[orange]">{el.title_uz}</h1>
                            <p className="bg-black max-w-20 w-full rounded-md"><span className="bg-[#ffc800] text-black font-bold p-0.5 rounded-md">IMDb</span> {el.imdb_rating}</p>
                            <span className="block"><p className="flex items-center gap-2 "><FaRegClock />{el.duration_minutes} min</p></span>
                            <p className="line-clamp-1 max-w-100">{el.description_uz}</p>
                        </div>
                    </div>
                </SwiperSlide>
                // ...existing code...
            ))}

        </Swiper>
    )
}

export default SwiperMovie