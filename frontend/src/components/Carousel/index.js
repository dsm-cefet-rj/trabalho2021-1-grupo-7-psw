import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import filmeIMG1 from '../../assets/img/filme-cuties-netflix.png';
import filmeIMG2 from '../../assets/img/Santana-netflix.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselImg = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          style={{height:400, width: 400}}
          className="d-block w-100"
          src={filmeIMG1}
          alt="First slide"
        />
      </Carousel.Item> 
      <Carousel.Item>
        <img
          style={{height:400, width: 400}}
          className="d-block w-100"
          src={filmeIMG2}
          alt="First slide"
        />
      </Carousel.Item> 
    </Carousel>
  )
}

export default CarouselImg;





 