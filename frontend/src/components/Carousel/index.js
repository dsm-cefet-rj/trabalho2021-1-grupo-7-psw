import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {BannerEvent} from './style.js';
import filmeIMG1 from '../../assets/img/filme-cuties-netflix.png';
import filmeIMG2 from '../../assets/img/Santana-netflix.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselImg = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <BannerEvent
          imgBanner={filmeIMG1}
        />
      </Carousel.Item> 
      <Carousel.Item>
        <BannerEvent
          imgBanner={filmeIMG2}
        />
      </Carousel.Item> 
    </Carousel>
  )
}

export default CarouselImg;





 