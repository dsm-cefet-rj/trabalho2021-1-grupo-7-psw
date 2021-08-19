import {
    PageTitle,
    FormCardWrapper,
    InputText,
    Label,
    Container,
    FormTitle,InputTextarea
  } from '../../components/Event/style';

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
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

    return (
      <>
        <Header/>
        <PageTitle>Criar evento</PageTitle>
        <Container>
          <FormCardWrapper>
          <FormTitle style={{marginBottom: 25 + "px"} }>Novo evento</FormTitle>

          <Label htmlFor='eventName'>Nome do evento:</Label>
          <InputText type='text' id='eventName'placeholder='Digite o nome do evento'/>

          <Label htmlFor='eventType'>Tipo de evento: </Label>
          <InputText type='text' id='eventType'placeholder='Digite o tipo do evento'/>

          <Label htmlFor='eventTicketNumber'>Quantidade de ingressos:</Label>
          <InputText type='number' id='eventTicketNumber'placeholder='Digite a quantidade de ingressos'/>

          <Label htmlFor='eventDate'>Data do evento:</Label>
          <InputText type='date' id='eventDate'placeholder='Digite a data do evento'/>

          <Label htmlFor='priceByTicket'>Preço por ingresso - R$</Label>
          <InputText
            type='number'
            placeholder='Digite o valor do ingresso. Ex: 200'
            id='priceByTicket'
          />

          <Label htmlFor='description'>Descrição:</Label>
          <InputTextarea id='description'placeholder='Digite a descrição do evento'/> 
           
            <div className={classes.div}>

            <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    className={classes.button}>
            Criar evento
            </Button>
            </div>
      
          </FormCardWrapper>
        </Container>
        <Footer/>
      </>
    );
  }
  