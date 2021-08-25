import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index.js';
import EventCard from '../../components/EventCard/index.js';
import CarouselImg from '../../components/Carousel/index.js';
import { makeStyles } from '@material-ui/core';
import { TextField, Grid, InputAdornment } from '@material-ui/core';
import { fetchEvents } from '../../store/event/action';
import { Search } from '@styled-icons/boxicons-regular/Search';
import Footer from '../../components/Footer/index';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  textFieldRoot: {
    width: 700,
  },
});

function App({ history, events, getEventos, status }) {
  const [recentEvents, setRecentEvents] = useState([]);
  const [textFilter, setTextFilter] = useState('');
  const classes = useStyles();
  console.log(events, status, 'como q ta vindo');

  useEffect(() => {
    getEventos();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getRecentsEvents();
    // eslint-disable-next-line
  }, [events]);

  const getRecentsEvents = () => {
    if (events) {
      const eventsRecent = events.reduce((acc, event) => {
        if (acc.length < 3) {
          acc.push(event);
        }
        return acc;
      }, []);

      setRecentEvents(eventsRecent);
    }
  };

  const getFilterEvents = () => {
    if (textFilter !== '') {
      const eventsFilter = events.filter((event) =>
        event.name.toLowerCase().includes(textFilter)
      );
      console.log(eventsFilter, 'olha aqui');
      return eventsFilter;
    } else {
      return events;
    }
  };

  return (
    <div className='App'>
      <Header history={history} />
      {events && <CarouselImg events={recentEvents} homePage={true} />}
      <Grid
        container
        justify='center'
        alignItems='center'
        style={{ marginTop: 15, padding: 10 }}
      >
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
      <Grid
        container
        justify='center'
        style={{ padding: 25, maxWidth: 1200, margin: '0 auto' }}
      >
        {events.length > 0 &&
          getFilterEvents().map((event) => (
            <EventCard
              key={event.id}
              eventName={event.name}
              eventImg={event.images[0]}
              event={event}
            />
          ))}
      </Grid>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  events: state.event.data,
  status: state.event.status,
});

const mapDispatchToProps = (dispatch) => ({
  getEventos: () => dispatch(fetchEvents()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
