import {
  PageTitle,
  FormCardWrapper,
  InputText,
  Label,
  Container,
  FormTitle,
  InputTextarea,
  ErrorInputs,
} from './style';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createEvent } from '../../store/event/eventSlice';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { useForm } from 'react-hook-form';
import { registerEvent } from '../../services/event_service';
import { history } from '../../history';
import { yupResolver } from '@hookform/resolvers/yup';
import { createEventSchema } from '../../utils/eventSchema';

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
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const [error, setErro] = useState(null);

  const userState = useSelector((state) => state.user);

  useEffect(() => {
    if (!user && userState.entities && userState.status === 'loaded') {
      const userResponse = Object.values(userState.entities)[0];
      setUser(userResponse);
    }
    // eslint-disable-next-line
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createEventSchema),
  });
  console.log(file, ' olha o user', file?.name);
  const handleFile = (e) => {
    setFile({
      lastModified: e?.lastModified,
      lastModifiedDate: e?.lastModifiedDate,
      name: e?.name,
      size: e?.size,
      type: e?.type,
      webkitRelativePath: e?.webkitRelativePath,
    });
  };

  const createEventSubmit = async (event) => {
    const { name, type, quantity, date, price, description } = event;
    try {
      dispatch(
        createEvent({
          name,
          type,
          company: user,
          quantity,
          date,
          price,
          file,
          description,
        })
      );
      setErro(null);
      history.push('/');
    } catch (error) {
      let msgErro = error.response.data.msg;
      setErro(msgErro);
    }
  };

  return (
    <>
      <Header />
      <PageTitle>Criar evento</PageTitle>
      <Container>
        <FormCardWrapper onSubmit={handleSubmit(createEventSubmit)}>
          <FormTitle style={{ marginBottom: 25 + 'px' }}>Novo evento</FormTitle>

          <Label htmlFor='eventName'>Nome do evento:</Label>
          <InputText
            type='text'
            id='eventName'
            placeholder='Digite o nome do evento'
            id='eventName'
            {...register('name')}
          />
          <ErrorInputs>{errors.name?.message}</ErrorInputs>

          <Label htmlFor='eventType'>Tipo de evento: </Label>
          <InputText
            type='text'
            id='eventType'
            placeholder='Digite o tipo do evento'
            id='eventType'
            {...register('type')}
          />
          <ErrorInputs>{errors.type?.message}</ErrorInputs>

          <Label htmlFor='eventTicketNumber'>Quantidade de ingressos:</Label>
          <InputText
            type='number'
            id='eventTicketNumber'
            placeholder='Digite a quantidade de ingressos'
            id='eventTicketNumber'
            {...register('quantity')}
          />
          <ErrorInputs>{errors.quantity?.message}</ErrorInputs>

          <Label htmlFor='eventDate'>Data do evento:</Label>
          <InputText
            type='date'
            id='eventDate'
            placeholder='Digite a data do evento'
            id='eventDate'
            {...register('date')}
          />
          <ErrorInputs>{errors.date?.message}</ErrorInputs>

          <Label htmlFor='priceByTicket'>Preço por ingresso - R$</Label>
          <InputText
            type='number'
            id='priceByTicket'
            placeholder='Digite o valor do ingresso. Ex: 200'
            id='priceByTicket'
            {...register('price')}
          />
          <ErrorInputs>{errors.price?.message}</ErrorInputs>

          <Label htmlFor='description'>Descrição:</Label>
          <InputTextarea
            id='description'
            placeholder='Digite a descrição do evento'
            id='description'
            {...register('description')}
          />

          <input
            type='file'
            id='avatar'
            name='avatar'
            accept='image/png, image/jpeg'
            onChange={(e) => handleFile(e.target.files[0])}
          />
          <ErrorInputs>{errors.description?.message}</ErrorInputs>

          {error ? <ErrorInputs>{error}</ErrorInputs> : null}

          <div className={classes.div}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              startIcon={<SaveIcon />}
              className={classes.button}
            >
              Criar evento
            </Button>
          </div>
        </FormCardWrapper>
      </Container>
      <Footer />
    </>
  );
}
