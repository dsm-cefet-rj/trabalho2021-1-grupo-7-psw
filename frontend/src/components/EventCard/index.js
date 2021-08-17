import React from 'react';
import {CardWrapper, CardsSpecs, Title} from './style.js'
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import {FavoriteBorder} from '@styled-icons/material/FavoriteBorder'
import {ChevronRight} from '@styled-icons/boxicons-regular/ChevronRight'
import { history } from '../../history'


const useStyles = makeStyles({
  iconButton: {
    marginRight: 5,
    marginTop: 3,
    background: 'rgba(0,0,0,0.1)'
  },
});

const EventCard = ({eventName, eventImg, eventType, event}) => {
  const classes = useStyles();

  return (
    <>
      <CardWrapper>
        <div >
         <img style={{width:'100%', height:'160px' ,objectFit: 'cover'}} src={eventImg} alt={eventName}/>
        </div>
        <CardsSpecs>
          <div style={{display: 'flex', alignItems: 'center'}}>
             <Title>{eventName}</Title>
          <IconButton >
            <FavoriteBorder size={20}/>
          </IconButton>
          </div>
          <IconButton classes={{root: classes.iconButton}} onClick={() => history.push(`/evento/${event.id}`)} >
            <ChevronRight size={20} />
          </IconButton>
        </CardsSpecs>
      </CardWrapper>
    </>
  )


}



export default EventCard;