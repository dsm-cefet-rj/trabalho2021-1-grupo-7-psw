import React from 'react';
import {CardWrapper, CardsSpecs, Title} from './style.js'
import { IconButton } from '@material-ui/core';


const EventCard = ({eventName, eventImg, eventType}) => {

  return (
    <>
      <CardWrapper>
        <div >
         <img style={{width:'100%'}} src={eventImg} alt={eventName}/>
        </div>
        <CardsSpecs>
          <Title>{eventName}</Title>
          <IconButton>
           
          </IconButton>
        </CardsSpecs>
      </CardWrapper>
    </>
  )


}



export default EventCard;