import React from 'react';
import Header from '../../components/Header';
import {BannerEvent,Title,Text,WrapperContent,ContainerBuy,WrapperEventNames,PriceText} from './style.js';
import { IconButton,Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import filmeIMG1 from '../../assets/img/filme-cuties-netflix.png';
import filmeIMG2 from '../../assets/img/Santana-netflix.jpg';
import {FavoriteBorder} from '@styled-icons/material/FavoriteBorder'
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

const useStyles = makeStyles({
  button: {
    background: '#000',
    padding: 20,
    height: 50,
  }
});

const EventPage = () => {
  const classes = useStyles();
  return (
    <>
      <Header/>
      <Swiper navigation={true} className="mySwiper" pagination={{"dynamicBullets": true}}>
        <SwiperSlide>
          <BannerEvent imgBanner={filmeIMG1} alt="teste"/>
        </SwiperSlide>
        <SwiperSlide>
          <BannerEvent imgBanner={filmeIMG2} alt="teste"/>
        </SwiperSlide>
      </Swiper>
      <WrapperContent>
        
        <WrapperEventNames>
          <Title>
            Evento 1
          </Title>
          <IconButton style={{marginTop:10}}>
            <FavoriteBorder size={40}/>
          </IconButton>
        </WrapperEventNames>
        <WrapperEventNames>
          <Text>
            12/05/2021
          </Text>
          <Text>
            - 18:00
          </Text>
        </WrapperEventNames>
      </WrapperContent>
      <ContainerBuy>
        <PriceText>
          R$ 200 - Até 12x
        </PriceText>
        <Button variant="contained" color="primary" classes={{root:classes.button}}>
          Comprar
        </Button>
      </ContainerBuy>
    </>
  )

};



export default EventPage;