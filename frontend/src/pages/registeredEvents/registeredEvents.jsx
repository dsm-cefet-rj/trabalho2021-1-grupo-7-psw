/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvent } from '../../store/event/eventSlice';
import {
  Main,
  Title,
  Container,
  RegisterEventContainer,
  RegisterEventBtn,
  Events,
} from './style.js';
import EventCard from '../../components/EventCard';
import { getEvents } from '../../services/event_service';
import { useEffect, useState } from 'react';

export default function RegisteredEvents({ history }) {
  const [events, setEvents] = useState([]);
  const eventsState = useSelector((state) => state.event);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!eventsState.entities) {
      dispatch(fetchEvent());
    }
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
  return (
    <>
      <Header />
      <Main>
        <Title>Eventos cadastrados</Title>

        <Container>
          <RegisterEventContainer>
            <RegisterEventBtn
              onClick={() => history.push(`/admin/evento/novo`)}
            >
              Cadastrar evento
            </RegisterEventBtn>
          </RegisterEventContainer>

          <Events>
            {events.map((event, index) => {
              return (
                //<RegisteredEventCard {...ticket} />
                <EventCard
                  key={event.id}
                  eventName={event.name}
                  event={event}
                  eventImg={event.images[0]}
                  history={history}
                />
              );
            })}
          </Events>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
