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
import EventCard from '../../components/EventCard';
import { events } from '../../utils/events';

export default function RegisteredEvents({ history }) {
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
                  eventImg={event.imagens[0]}
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
