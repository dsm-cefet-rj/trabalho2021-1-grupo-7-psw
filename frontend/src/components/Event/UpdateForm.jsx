import {
  FormCardWrapper,
  InputText,
  Label,
  FormTitle,
  InputTextarea,
  ErrorInputs,
} from '../../pages/Event/style';

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import { updateEvent } from '../../services/event_service';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { history } from '../../history'

import { schemaUpdate } from '../../utils/eventSchema';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    width: 70 + '%',
    '@media (max-width: 600px)': {
      width: 100 + '%',
    },
  },
  div: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

export default function UpdateForm(props) {
    const classes = useStyles();
    const [error, setError] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schemaUpdate)
    });      
    {console.log(props.props)}
  
  
  function update(data){
    updateEvent(props.props.slug, data.name,data.type,data.quantity,data.date,data.price,data.description)
    .then(res=>{
     setError(null)
     history.push('/admin/eventos')
     })
     .catch(error=>{
       let errorMsg = error.response.data.msg
       setError(errorMsg)
     })
  }
  

  return (
      <FormCardWrapper onSubmit={handleSubmit(update)}>
      <FormTitle style={{ marginBottom: 25 + 'px' }}>
        {props.props.name}
      </FormTitle>

      <Label htmlFor='eventName'>Nome do evento:</Label>
      <InputText
        type='text'
        id='eventName'
        placeholder='Digite o nome do evento'
        {...register('name')}
        defaultValue={props.props.name}
      />
      {errors ? (
        <ErrorInputs>{errors.name?.message}</ErrorInputs>
      ) : null}

      <Label htmlFor='eventType'>Tipo de evento: </Label>
      <InputText
        type='text'
        id='eventType'
        placeholder='Digite o tipo do evento'
        {...register('type')}
        defaultValue={props.props.type}
      />
      {errors ? (
        <ErrorInputs>{errors.type?.message}</ErrorInputs>
      ) : null}

      <Label htmlFor='eventTicketNumber'>Quantidade de ingressos:</Label>
      <InputText
        id='eventTicketNumber'
        placeholder='Digite a quantidade de ingressos'
        {...register('quantity')}
        defaultValue={props.props.num_tickets}
      />
      {errors ? (
        <ErrorInputs>{errors.quantity?.message}</ErrorInputs>
      ) : null}
      

      <Label htmlFor='eventDate'>Data do evento:</Label>
      <InputText
        type='date'
        id='eventDate'
        placeholder='Digite a data do evento'
        {...register('date')}
        defaultValue={props.props.date}
      />
      {errors ? (
        <ErrorInputs>{errors.date?.message}</ErrorInputs>
      ) : null}
      

      <Label htmlFor='priceByTicket'>Preço por ingresso - R$</Label>
      <InputText
        type='number'
        placeholder='Digite o valor do ingresso. Ex: 200'
        id='priceByTicket'
        {...register('price')}
        defaultValue={props.props.price}
      />
      {errors ? (
        <ErrorInputs>{errors.price?.message}</ErrorInputs>
      ) : null}

      <Label htmlFor='description'>Descrição:</Label>
      <InputTextarea
        id='description'
        placeholder='Digite a descrição do evento'
        {...register('description')}
        defaultValue={props.props.description}
      />
    {errors ? (
        <ErrorInputs>{errors.description?.message}</ErrorInputs>
      ) : null}


      {/* {error ? <ErrorInputs>{error}</ErrorInputs> : null} */}

      <div className={classes.div}>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          startIcon={<EditIcon />}
          className={classes.button}
        >
          Confirmar alterações
        </Button>
      </div>
    </FormCardWrapper>
  );
}
