/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'

import { Main, Title, Container, SearchBar, SearchLeft, SearchRight, SearchInput, SearchBtn, Tickets } from './style.js'
import EventCard from '../../components/EventCard/index'
import {events} from '../../utils/events'
import { TextField, Grid, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Search } from '@styled-icons/boxicons-regular/Search';

const useStyles = makeStyles({
    textFieldRoot: {
      width: 700,
    },
});

export default function MyTickets(){

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
    return(
        <>
            <Header/>

            <Main>
                <Title>Meus ingressos</Title>

                <Container>
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

                    <Tickets>
                        {events.map((event,index) =>{
                            return(
                                <EventCard
                                key={event.id}
                                eventName={event.name}
                                event={event}
                                eventImg={event.imagens[0]} />
                            )
                        })}
                    </Tickets>
                </Container>
            </Main>

            <Footer/>
        </>
    )
}