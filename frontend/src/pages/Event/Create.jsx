import {
    PageTitle,
    FormCardWrapper,
    InputText,
    Label,
    ButtonSubmit,
    Container,
    FormTitle
  } from '../../components/Event/style';

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

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
    let minDate = new Date().toISOString().slice(0, -14);

    const [event1, setEvent1] = useState(0)
    
    const event = {name:"CBLOL", type: "e-sports", ticketsNumber: "167", date: "2022-05-20", purchaseStartDate: "2022-04-20", purchaseLimiteDate: "2022-05-18", ticketPrice: "R$ 22,00"}
    const [open, setOpen] = React.useState(false);
    
    const classes = useStyles(); 

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
      <>
        <PageTitle>Detalhes do evento</PageTitle>
        <Container>
          <FormCardWrapper>
            <FormTitle>{"Empresa X"}</FormTitle>
  
            <Label htmlFor='eventName'>Nome do evento:</Label>
            <InputText type='text' id='eventName'  value={event.name} />
  
            <Label htmlFor='eventType'>Tipo de evento: </Label>
            <InputText type='text' id='eventType'   value={event.type}/>
  
            <Label htmlFor='eventTicketNumber'>Quantidade de ingressos:</Label>
            <InputText type='number' id='eventTicketNumber'  value={event.ticketsNumber}/>
  
            <Label htmlFor='eventDate'>Data do evento:</Label>
            <InputText type='date' min={minDate} id='eventDate'  value={event.date}/>
  
            <Label htmlFor='purchaseStartDate'>Data de inicio de compra</Label>
            <InputText type='date' id='purchaseStartDate'  value={event.purchaseStartDate}/>
  
            <Label htmlFor='purchaseLimiteDate'>Data limite de compras</Label>
            <InputText type='date' id='purchaseLimiteDate'  value={event.purchaseLimiteDate}/>
  
            <Label htmlFor='priceByTicket'>Preço por ingresso - R$</Label>
            <InputText
              type='text'
              placeholder='Insira o preço'
              id='priceByTicket'
              
                value={event.ticketPrice}
            />
           
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
      </>
    );
  }
  