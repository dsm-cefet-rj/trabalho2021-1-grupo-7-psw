import React from 'react';
import Header from '../../components/Header';
import {
  BannerEvent,
  Title,
  Text,
  WrapperContent,
  ContainerBuy,
  WrapperEventNames,
  PriceText,
  ParagraphsText,
  StrongText,
  Map,
  Divider,
  WrapperEventSpecs,
  WrapperPriceSpecs,
  TagContainer,
  WrapperSectionContainer,
} from './style.js';
import { IconButton, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Calendar } from '@styled-icons/boxicons-regular/Calendar';
import filmeIMG1 from '../../assets/img/filme-cuties-netflix.png';
import mapImg from '../../assets/img/map.png';
import filmeIMG2 from '../../assets/img/Santana-netflix.jpg';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles({
  button: {
    background: '#212020',
    padding: 25,
    height: 50,
    boxShadow:
      '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    '&:focus': {
      background: '#212020',
    },
  },
  buttonFocus: {},
});

const EventPage = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Swiper
        navigation={true}
        className='mySwiper'
        pagination={{ dynamicBullets: true }}
      >
        <SwiperSlide>
          <BannerEvent imgBanner={filmeIMG1} alt='teste' />
        </SwiperSlide>
        <SwiperSlide>
          <BannerEvent imgBanner={filmeIMG2} alt='teste' />
        </SwiperSlide>
      </Swiper>
      <WrapperContent>
        <WrapperEventSpecs>
          <TagContainer>Filme</TagContainer>
          <WrapperEventNames>
            <Title>Evento 1</Title>
            <IconButton>
              <FavoriteBorder size={40} style={{ marginBottom: 5 }} />
            </IconButton>
          </WrapperEventNames>
        </WrapperEventSpecs>
        <WrapperEventNames>
          <Calendar size={25} style={{ marginRight: 5 }} />
          <StrongText font={16}>12/05/2021</StrongText>
        </WrapperEventNames>
        <Divider />
        <WrapperSectionContainer>
          <StrongText font={30}>Descrição</StrongText>
          <ParagraphsText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            exercitationem molestiae sunt perspiciatis impedit magni illo, hic
            tempora, ratione, est provident voluptate dolore iusto similique
            numquam aspernatur omnis fugit deserunt.
          </ParagraphsText>
        </WrapperSectionContainer>
        <WrapperSectionContainer>
          <StrongText font={30}>Onde é?</StrongText>
          <Map src={mapImg} />
        </WrapperSectionContainer>
      </WrapperContent>
      <ContainerBuy>
        <WrapperPriceSpecs>
          <PriceText>R$ 200</PriceText>
          <Text style={{ marginLeft: 10 }}>em até 12x sem juros</Text>
        </WrapperPriceSpecs>
        <Button
          variant='contained'
          color='primary'
          classes={{
            root: classes.button,
          }}
        >
          Comprar
        </Button>
      </ContainerBuy>
    </>
  );
};

export default EventPage;
