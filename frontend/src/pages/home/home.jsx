import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index.js';
import EventCard from '../../components/EventCard/index.js';
import CarouselImg from '../../components/Carousel/index.js';
import { makeStyles } from '@material-ui/core';
import { TextField, Grid, InputAdornment } from '@material-ui/core';
import { events } from '../../utils/events.js';
import { Search } from '@styled-icons/boxicons-regular/Search';
import Footer from '../../components/Footer/index';
// import filmeIMG2 from '../../assets/img/Santana-netflix.jpg';

const useStyles = makeStyles({
  textFieldRoot: {
    width: 700,
  },
});

function App({ history }) {
  const [recentEvents, setRecentEvents] = useState([]);
  const [textFilter, setTextFilter] = useState('');
  const classes = useStyles();

  useEffect(() => {
    getRecentsEvents();
  }, []);

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
      <CarouselImg events={recentEvents} homePage={true} />
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
        {getFilterEvents().map((event) => (
          <EventCard
            key={event.id}
            eventName={event.name}
            eventImg={event.imagens[0]}
            event={event}
          />
        ))}
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
