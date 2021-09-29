import React, { useEffect, useState } from 'react';
import {
  PageTitle,
  FormCardWrapper,
  InputText,
  Label,
  Container,
  FormTitle,
  InputTextarea,
} from './style';
import { useDispatch } from 'react-redux';
import { delEvent } from '../../store/event/eventSlice';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { history } from '../../history';
import { useLocation, useParams } from 'react-router-dom';
import { getEventBySlug, deleteEvent } from '../../services/event_service';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    width: 50 + '%',
  },
  div: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

export default function FormCard(props) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const location = useLocation().pathname;
  const { slug } = useParams();
  const [event, setEvent] = useState({});

  useEffect(async () => {
    const response = await getEventBySlug(slug);
    setEvent(response);
  }, []);

  const handleDelete = () => {
    dispatch(delEvent({ slug, id: event._id }));
    history.push('/admin/eventos');
  };

  return (
    <>
      <PageTitle>Detalhes do evento</PageTitle>
      <Container>
        <FormCardWrapper>
          <FormTitle style={{ marginBottom: 25 + 'px' }}>
            {event.name}
          </FormTitle>

          <Label htmlFor='eventName'>Nome do evento:</Label>
          <InputText type='text' id='eventName' disabled value={event.name} />

          <Label htmlFor='eventType'>Tipo de evento: </Label>
          <InputText type='text' id='eventType' disabled value={event.type} />

          <Label htmlFor='eventTicketNumber'>Quantidade de ingressos:</Label>
          <InputText
            type='number'
            id='eventTicketNumber'
            disabled
            value={event.num_tickets}
          />

          <Label htmlFor='eventDate'>Data do evento:</Label>
          <InputText type='date' id='eventDate' disabled value={event.date} />

          <Label htmlFor='priceByTicket'>Preço por ingresso - R$</Label>
          <InputText
            type='text'
            placeholder='Insira o preço'
            id='priceByTicket'
            disabled
            value={event.price}
          />

          <Label htmlFor='description'>Descrição:</Label>
          <InputTextarea id='description' disabled value={event.description} />

          <div className={classes.div}>
            <Button
              variant='contained'
              color='primary'
              startIcon={<DeleteIcon />}
              className={classes.button}
              onClick={() => history.push(`${location}/editar`)}
            >
              Editar
            </Button>
            <Button
              variant='contained'
              color='secondary'
              startIcon={<DeleteIcon />}
              className={classes.button}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
              onClick={handleClickOpen}
            >
              Delete
            </Button>
          </div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>
              {'Você tem certeza que deseja apagar este evento?'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                Esta ação é irreversível!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Não
              </Button>
              <Button onClick={handleDelete} color='primary' autoFocus>
                Sim
              </Button>
            </DialogActions>
          </Dialog>
        </FormCardWrapper>
      </Container>
    </>
  );
}
