import {
  PageTitle,
  FormCardWrapper,
  InputText,
  Label,
  Container,
  FormTitle,
  ErrorInputs,
} from './style';
import { useSelector } from 'react-redux';
import { getEventBySlug, buyEvent } from '../../services/event_service';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { useForm } from 'react-hook-form';
import { history } from '../../history';
import { useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { createBuySchema } from '../../utils/eventSchema';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    width: 50 + '%',
    '@media (max-width: 600px)': {
      width: 100 + '%',
    },
  },
  div: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));
export default function FormCard(props) {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [event, setEvent] = useState(null);
  const { slug } = useParams();

  const [error, setErro] = useState(null);

  const userState = useSelector((state) => state.user);

  useEffect(() => {
    if (!user && userState.entities && userState.status === 'loaded') {
      const userResponse = Object.values(userState.entities)[0];
      setUser(userResponse);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadEvent();
    // eslint-disable-next-line
  }, []);

  const loadEvent = async () => {
    const response = await getEventBySlug(slug);
    setEvent(response);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createBuySchema),
  });

  const normalizeCpf = (value) => {
    function formatCpf(text) {
      const badchars = /[^\d]/g;
      const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/;
      const cpf = new String(text).replace(badchars, '');
      return cpf.replace(mask, '$1.$2.$3-$4').substr(0, 14) || '';
    }
    return formatCpf(value);
  };

  function normalizeCreditNumber(value) {
    const formatCardNumber = (text) => {
      const badchars = /[^\d]/g;
      const mask = /(\d{4})(\d{4})(\d{4})(\d{4})/;
      const number = new String(text).replace(badchars, '');
      return number.replace(mask, '$1 $2 $3 $4').substr(0, 19) || '';
    };
    return formatCardNumber(value);
  }

  const handleBuyEvent = async () => {
    try {
      await buyEvent({ eventId: event._id });
      history.push('/meus-ingressos');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <PageTitle>Comprar Evento</PageTitle>
      <Container>
        <FormCardWrapper>
          <Label htmlFor='userName'>Nome:</Label>
          <InputText
            type='text'
            id='userName'
            placeholder='Digite o seu nome'
            {...register('name')}
          />
          <ErrorInputs>{errors.name?.message}</ErrorInputs>

          <Label htmlFor='CPF'>CPF:</Label>
          <InputText
            type='text'
            id='CPF'
            placeholder='Digite seu CPF'
            {...register('cpf')}
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizeCpf(value);
            }}
          />
          <ErrorInputs>{errors.cpf?.message}</ErrorInputs>

          <Label htmlFor='creditCardNumber'>Número do Cartão de crédito</Label>
          <InputText
            type='text'
            id='creditCardNumber'
            placeholder='Digite o número do cartão. Ex: 0000-0000-0000-0000'
            {...register('creditCard')}
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizeCreditNumber(value);
            }}
          />
          <ErrorInputs>{errors.creditCard?.message}</ErrorInputs>

          <Label htmlFor='expireDate'>Data de expiração:</Label>
          <InputText
            type='date'
            id='expireDate'
            placeholder='Digite a data do evento'
            {...register('expiredDate')}
          />
          <ErrorInputs>{errors.expiredDate?.message}</ErrorInputs>

          <Label htmlFor='cvvNumber'>CVV</Label>
          <InputText
            type='text'
            id='cvvNumber'
            placeholder='Digite o número do CVV.'
            maxlength='3'
            {...register('cvv')}
          />
          <ErrorInputs>{errors.cvv?.message}</ErrorInputs>

          {error ? <ErrorInputs>{error}</ErrorInputs> : null}

          <FormTitle style={{ marginTop: 25 + 'px' }}>
            Subtotal: R$ {event && event.price}
          </FormTitle>
          <div className={classes.div}>
            <Button
              type='button'
              variant='contained'
              color='primary'
              onClick={() => handleBuyEvent()}
              startIcon={<SaveIcon />}
              className={classes.button}
            >
              Comprar evento
            </Button>
          </div>
        </FormCardWrapper>
      </Container>
      <Footer />
    </>
  );
}
