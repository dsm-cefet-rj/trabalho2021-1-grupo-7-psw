import {
    PageTitle,
    FormCardWrapper,
    InputText,
    Label,
    Container,
    FormTitle, InputTextarea
  } from '../../components/Event/style';

import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import { useLocation, useParams } from 'react-router-dom'
import {getEventBySlug} from '../../utils/events'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2),
        width: 50 + "%",
        "@media (max-width: 600px)": {
            width: 100 + "%"
          }
    },
    div:{
        display: "flex",
        justifyContent: "space-around"
    },
  }));


export default function FormCard(props) {

    const classes = useStyles(); 

    const { slug } = useParams()
    const event = getEventBySlug(slug)

    return (
      <>
        <Header/>
        <PageTitle>Editar evento</PageTitle>
        <Container>
          <FormCardWrapper>
          <FormTitle style={{marginBottom: 25 + "px"} }>{event.name}</FormTitle>

          <Label htmlFor='eventName'>Nome do evento:</Label>
          <InputText type='text' id='eventName' value={event.name}placeholder='Digite o nome do evento' />

          <Label htmlFor='eventType'>Tipo de evento: </Label>
          <InputText type='text' id='eventType'  value={event.type}placeholder='Digite o tipo do evento'/>

          <Label htmlFor='eventTicketNumber'>Quantidade de ingressos:</Label>
          <InputText type='number' id='eventTicketNumber' value={event.qtd_ingresso}placeholder='Digite a quantidade de ingressos'/>

          <Label htmlFor='eventDate'>Data do evento:</Label>
          <InputText type='date' id='eventDate' value={event.date}placeholder='Digite a data do evento'/>

          <Label htmlFor='priceByTicket'>Preço por ingresso - R$</Label>
          <InputText
            type='number'
            placeholder='Digite o valor do ingresso. Ex: 200'
            id='priceByTicket'
            value={event.price}
          />

          <Label htmlFor='description'>Descrição:</Label>
          <InputTextarea id='description' value={event.descricao}placeholder='Digite a descrição do evento'/> 
           
            <div className={classes.div}>

            <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon />}
                    className={classes.button}>
            Confirmar alterações
            </Button>
            </div>
      
          </FormCardWrapper>
        </Container>
        <Footer/>
      </>
    );
  }
  