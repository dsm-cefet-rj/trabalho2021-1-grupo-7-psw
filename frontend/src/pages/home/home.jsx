import React from 'react'
import Header from '../../components/Header/index.js';
import EventCard from '../../components/EventCard/index.js'
import CarouselImg from '../../components/Carousel/index.js'
import {makeStyles} from '@material-ui/core';
import { TextField,Grid,InputAdornment } from '@material-ui/core';

import filmeIMG1 from '../../assets/img/filme-cuties-netflix.png';
// import filmeIMG2 from '../../assets/img/Santana-netflix.jpg';

const useStyles = makeStyles({
  textFieldRoot: {
    width: 700,
  }
});

function App({history}) {
  const classes = useStyles();
  console.log(history);
  return (
    <div className="App">
      <Header history={history}/>
      <CarouselImg/>
      <Grid container justify="center" alignItems="center" style={{marginTop: 15, padding: 10}}>
        <TextField required variant="outlined" id="standard-required" placeholder="Pesquise pelo evento que você procura" classes={{root: classes.textFieldRoot}}InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              
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
