/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { connect } from 'react-redux';
import { fetchEvents } from '../../store/event/action';
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

function MyTickets({ events, getEventos }) {
  const [textFilter, setTextFilter] = useState('');
  const classes = useStyles();

  useEffect(() => {
    getEventos();
    // eslint-disable-next-line
  }, []);

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

const mapStateToProps = (state) => ({
  events: state.event.data,
  status: state.event.status,
});

const mapDispatchToProps = (dispatch) => ({
  getEventos: () => dispatch(fetchEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyTickets);
