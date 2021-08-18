import {
    PageTitle,
    FormCardWrapper,
    InputText,
    Label,
    ButtonSubmit,
    Container,
  } from './style';

import React from 'react';
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
    },
    div:{
        display: "flex",
        justifyContent: "space-around"
    }
  }));
export default function FormCard(props) {
    let minDate = new Date().toISOString().slice(0, -14);
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
            <h3 style={{marginBottom: 10 + "px"} }>{"Empresa X"}</h3>
  
            <Label htmlFor='eventName'>Nome do evento:</Label>
            <InputText type='text' id='eventName' disabled value={event.name} />
  
            <Label htmlFor='eventType'>Tipo de evento: </Label>
            <InputText type='text' id='eventType' disabled  value={event.type}/>
  
            <Label htmlFor='eventTicketNumber'>Quantidade de ingressos:</Label>
            <InputText type='number' id='eventTicketNumber' disabled value={event.ticketsNumber}/>
  
            <Label htmlFor='eventDate'>Data do evento:</Label>
            <InputText type='date' min={minDate} id='eventDate' disabled value={event.date}/>
  
            <Label htmlFor='purchaseStartDate'>Data de inicio de compra</Label>
            <InputText type='date' id='purchaseStartDate' disabled value={event.purchaseStartDate}/>
  
            <Label htmlFor='purchaseLimiteDate'>Data limite de compras</Label>
            <InputText type='date' id='purchaseLimiteDate' disabled value={event.purchaseLimiteDate}/>
  
            <Label htmlFor='priceByTicket'>Preço por ingresso - R$</Label>
            <InputText
              type='text'
              placeholder='Insira o preço'
              id='priceByTicket'
              disabled
                value={event.ticketPrice}
            />
           
            <div className={classes.div}>

            <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DeleteIcon />}
                    className={classes.button}>
            Editar
            </Button> 
            <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            className={classes.button}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            onClick={handleClickOpen}>
                
            Delete
            </Button>
            </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Você tem certeza que deseja apagar este evento?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta ação é irreversível!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Não
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
          </FormCardWrapper>
        </Container>
      </>
    );
  }
  