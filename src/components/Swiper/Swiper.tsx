"use client"
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

interface InfiniteSwiperProps {
    children: React.ReactNode[];
}

const InfiniteSwiper = ({ children }: InfiniteSwiperProps) => {
    const swiperRef = useRef<any>(null);

    return (
        <div
            className="w-full h-full relative"
            onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
        >
            <div className="absolute left-0 top-0 bottom-0 w-14 sm:w-24 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-primary to-transparent" />

            <div className="absolute right-0 top-0 bottom-0 w-14 sm:w-24 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-primary to-transparent" />

            <Swiper
                ref={swiperRef}
                modules={[Autoplay, FreeMode]}
                loop={true}
                speed={8000}
                slidesPerView={'auto'}
                spaceBetween={40}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                {children.map((child, index) => (
                    <SwiperSlide key={index} style={{ width: 'auto' }}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
        </div>
    )
}

export default InfiniteSwiper
