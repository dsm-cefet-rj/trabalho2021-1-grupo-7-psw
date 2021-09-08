/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvent } from '../../store/event/eventSlice';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { Main, Title, Container, Text, Tickets } from './style.js';
import EventCard from '../../components/EventCard/index';
import { TextField, Grid, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Search } from '@styled-icons/boxicons-regular/Search';

const useStyles = makeStyles({
  textFieldRoot: {
    width: 700,
  },
});

function MyTickets() {
  const [textFilter, setTextFilter] = useState('');
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  const eventsState = useSelector((state) => state.event);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!eventsState.entities) {
      dispatch(fetchEvent());
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!events.length > 0 && eventsState.status === 'loaded') {
      loadEvents();
    }
    // eslint-disable-next-line
  }, [eventsState]);

  const loadEvents = () => {
    const eventsResponse =
      eventsState.entities &&
      Object.values(eventsState.entities).length > 0 &&
      Object.values(eventsState.entities);
    setEvents(eventsResponse);
  };

  const getFilterEvents = () => {
    if (textFilter !== '') {
      const eventsFilter = events.filter((event) =>
        event.name.toLowerCase().includes(textFilter)
      );
      return eventsFilter;
    } else {
      return events;
    }
  };
  return (
    <>
      <Header />
      <Main>
        <Title>Meus ingressos</Title>

        <Container>
          <Grid container justify='center'>
            <TextField
              required
              variant='outlined'
              id='standard-required'
              placeholder='Pesquise pelo evento que você procura'
              classes={{ root: classes.textFieldRoot }}
              onChange={(e) => setTextFilter(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search size={40} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Text>{getFilterEvents().length} Pedidos encontrados</Text>
          <Tickets>
            {getFilterEvents().map((event, index) => {
              return (
                <EventCard
                  key={event.id}
                  eventName={event.name}
                  event={event}
                  eventImg={event.images[0]}
                />
              );
            })}
          </Tickets>
        </Container>
      </Main>

      <Footer />
    </>
  );
}

export default MyTickets;
