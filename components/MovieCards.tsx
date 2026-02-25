"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function MovieCards() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
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
                <SwiperSlide className='swiperCard'>Slide 1</SwiperSlide>
                <SwiperSlide className='swiperCard'>Slide 2</SwiperSlide>
                <SwiperSlide className='swiperCard'>Slide 3</SwiperSlide>
                <SwiperSlide className='swiperCard'>Slide 4</SwiperSlide>
                <SwiperSlide className='swiperCard'>Slide 5</SwiperSlide>
                <SwiperSlide className='swiperCard'>Slide 6</SwiperSlide>
                <SwiperSlide className='swiperCard'>Slide 7</SwiperSlide>
                <SwiperSlide className='swiperCard'>Slide 8</SwiperSlide>
                <SwiperSlide className='swiperCard'>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
}
