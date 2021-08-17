import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import {BannerEvent} from './style.js';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

// install Swiper modules
SwiperCore.use([Pagination, Navigation,Autoplay]);

const CarouselImg = ({events,homePage = false}) => {
  
  return (
    <>
    {homePage ? 
    <Swiper
        className='mySwiper'
        autoplay={true}
        pagination={{ dynamicBullets: true }}
      >
      {
        events.map((event) => (
          <SwiperSlide>
            <BannerEvent imgBanner={event.imagens[0]} alt='teste' />
          </SwiperSlide>
        ))
      }
    </Swiper> :  
    <Swiper
    className='mySwiper'
    navigation={true}
    pagination={{ dynamicBullets: true }}
    >
      {
        events.imagens.map((img) => (
          <SwiperSlide>
            <BannerEvent imgBanner={img} alt='teste' />
          </SwiperSlide>
        ))
      }
    </Swiper> 
    }
    </>
  )
}

export default CarouselImg;
