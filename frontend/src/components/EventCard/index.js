import React from 'react';
import { CardWrapper, CardsSpecs, Title, SeeInfoBtn } from './style.js';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight';
import { history } from '../../history';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  iconButton: {
    marginRight: 5,
    marginTop: 3,
    background: 'rgba(0,0,0,0.1)',
  },
});

const EventCard = ({ eventName, eventImg, eventType, event }) => {
  const classes = useStyles();
  let location = useLocation().pathname;

  return (
    <>
      <CardWrapper>
        <div>
          <img
            style={{ width: '100%', height: '160px', objectFit: 'cover' }}
            src={eventImg}
            alt={eventName}
          />
        </div>
        <CardsSpecs>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Title>{eventName}</Title>
          </div>
          <IconButton
            classes={{ root: classes.iconButton }}
            onClick={() => history.push(`/evento/${event.slug}`)}
          >
            <ChevronRight size={20} />
          </IconButton>
        </CardsSpecs>

        {location === '/admin/eventos' ? (
          <SeeInfoBtn
            onClick={() => history.push(`/admin/evento/${event.slug}`)}
          >
            Ver informações
          </SeeInfoBtn>
        ) : null}
      </CardWrapper>
    </>
  );
};

export default EventCard;
