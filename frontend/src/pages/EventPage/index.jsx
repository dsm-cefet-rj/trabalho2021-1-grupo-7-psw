import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import {
  Title,
  Text,
  WrapperContent,
  ContainerBuy,
  WrapperEventNames,
  PriceText,
  ParagraphsText,
  StrongText,
  Divider,
  WrapperEventSpecs,
  WrapperPriceSpecs,
  TagContainer,
  WrapperSectionContainer,
} from './style.js';
import { IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Calendar } from '@styled-icons/boxicons-regular/Calendar';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import CarouselImg from '../../components/Carousel/index.js';
// import { getEventBySlug } from '../../utils/events.js';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { getEventBySlug } from '../../services/event_service';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import Footer from '../../components/Footer/index';

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
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const classes = useStyles();
  const [eventDate, setEventDate] = useState('');

  useEffect(() => {
    loadEvent();
    // eslint-disable-next-line
  }, []);

  const loadEvent = async () => {
    setLoading(true);
    const response = await getEventBySlug(slug);
    setEvent(response);
    setLoading(false);
    setEventDate(response.date.split('-'));
  };
  return (
    <div style={{ paddingBottom: 100 }}>
      <Header />
      {event && <CarouselImg events={event} />}
      {loading ? (
        <CircularProgress size={30} />
      ) : (
        <WrapperContent>
          <WrapperEventSpecs>
            <TagContainer>{event.type}</TagContainer>
            <WrapperEventNames>
              <Title>{event.name}</Title>
              <IconButton>
                <FavoriteBorder size={40} style={{ marginBottom: 5 }} />
              </IconButton>
            </WrapperEventNames>
          </WrapperEventSpecs>
          <WrapperEventNames>
            <Calendar size={25} style={{ marginRight: 5 }} />
            <StrongText
              font={16}
            >{`${eventDate[2]}/${eventDate[1]}/${eventDate[0]}`}</StrongText>
          </WrapperEventNames>
          <Divider />
          <WrapperSectionContainer>
            <StrongText font={30}>Descrição</StrongText>
            <ParagraphsText>{event.description}</ParagraphsText>
          </WrapperSectionContainer>
          <WrapperSectionContainer>
            <StrongText font={30}>Onde é?</StrongText>
            <MapContainer
              center={[event.address.long, event.address.lat]}
              zoom={16}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={[event.address.long, event.address.lat]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </WrapperSectionContainer>
        </WrapperContent>
      )}
      <ContainerBuy>
        <WrapperPriceSpecs>
          <PriceText>R$ {event?.price}</PriceText>
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
      <Footer />
    </div>
  );
};

export default EventPage;
