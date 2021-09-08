import { PageTitle, Container } from './style';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventBySlug } from '../../services/event_service';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import UpdateForm from '../../components/Event/UpdateForm';

export default function FormCard(props) {
  const { slug } = useParams();
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEventBySlug(slug).then((res) => {
      setEvent(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <PageTitle>Editar evento</PageTitle>
      <Container>
        {!loading ? <UpdateForm props={event} /> : undefined}
      </Container>
      <Footer />
    </>
  );
}
