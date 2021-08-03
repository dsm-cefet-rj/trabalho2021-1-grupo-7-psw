import React from 'react'
import './App.css';
import Header from './components/header/index.js';
import EventCard from './components/EventCard/index.js'
import CarouselImg from './components/Carousel/index.js'
import {makeStyles} from '@material-ui/core';
import { TextField,Grid,InputAdornment } from '@material-ui/core';
import {Search} from '@styled-icons/boxicons-regular/Search'
import filmeIMG1 from './assets/img/filme-cuties-netflix.png';
import filmeIMG2 from './assets/img/Santana-netflix.jpg';

const useStyles = makeStyles({
  textFieldRoot: {
    width: 700,
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header/>
      <CarouselImg/>
      <Grid container justify="center" alignItems="center" style={{marginTop: 15, padding: 10}}>
        <TextField required variant="outlined" id="standard-required" placeholder="Pesquise pelo evento que você procura" classes={{root: classes.textFieldRoot}}InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search size={40}/>
            </InputAdornment>
          ),
        }} />
      </Grid>
      <Grid container justify="space-between" style={{padding: 25, maxWidth: 1200, margin: '0 auto'}}>
        <EventCard eventName="Teste 1" eventImg={filmeIMG1}/>
        <EventCard eventName="Teste 1" eventImg={filmeIMG1}/>
        <EventCard eventName="Teste 1" eventImg={filmeIMG1}/>
        <EventCard eventName="Teste 1" eventImg={filmeIMG1}/>
        <EventCard eventName="Teste 1" eventImg={filmeIMG1}/>
        <EventCard eventName="Teste 1" eventImg={filmeIMG1}/>
      </Grid>
    </div>
  );
}

export default App;
