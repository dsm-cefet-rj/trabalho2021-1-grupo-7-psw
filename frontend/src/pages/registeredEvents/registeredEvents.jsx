/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import {
  Main,
  Title,
  Container,
  RegisterEventContainer,
  RegisterEventBtn,
  Events,
} from './style.js';
import { getEventsByCompany } from '../../services/event_service';
import EventCard from '../../components/EventCard';
import { useEffect, useState } from 'react';

export default function RegisteredEvents({ history }) {
  const [events, setEvents] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!events.length > 0) {
      loadEvents();
    }
    // eslint-disable-next-line
  }, []);

  const loadEvents = async () => {
    console.log(user.user.id);
    const response = await getEventsByCompany({ userId: user.user.id });
    setEvents(response);
    console.log(events);
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
