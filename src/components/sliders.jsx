import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

export default function Slider() {
    return (
    <>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='h-[400px] w-full bg-white rounded-xl'>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='h-[400px] w-full bg-white rounded-xl'>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='h-[400px] w-full bg-white rounded-xl'>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='h-[400px] w-full bg-white rounded-xl'>

                </div>
            </SwiperSlide>
        </Swiper>
    </>
    );
}
