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

export default function Slider(props) {
    const { data } = props;
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
            className="mySwiper max-w-[1100px] h-full pt-[1.6em] max-[740px]:hidden"
        >
            {data?.length > 0 
                && data?.map((item) => {
                    return (<>
                    <SwiperSlide>
                        <div 
                            className='relative h-[400px] w-full rounded-[25px] overflow-hidden bg-no-repeat text-[#8D8D8D] hover:text-[#DBAB00]' 
                            style={{ backgroundImage: `url(${item?.img})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
                        >
                            <div className='imagen w-full h-full z-20 text-left pl-4'>
                                <span className='font-[Heather-Angel] text-[1.4em]'>{item?.titulo}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    </>)
                })}
        </Swiper>

        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="mySwiper justify-center h-full pt-[2em] hidden max-[740px]:block"
        >
            {data?.length > 0 
                && data?.map((item) => {
                    return (<>
                    <SwiperSlide>
                        <div 
                            className='relative h-[450px] w-[80%] rounded-[25px] overflow-hidden bg-no-repeat text-[#8D8D8D] hover:text-[#DBAB00]' 
                            style={{ backgroundImage: `url(${item?.img})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
                        >
                            <div className='imagen w-full h-full z-20 text-left pl-4'>
                                <span className='font-[Heather-Angel] text-[1.4em]'>{item?.titulo}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    </>)
                })}
        </Swiper>
    </>
    );
}
