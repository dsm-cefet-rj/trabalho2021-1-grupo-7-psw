import {
  PageTitle,
  FormCardWrapper,
  InputText,
  Label,
  Container,
  FormTitle,InputTextarea, ErrorInputs
} from './style';

import React, { useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { registerEvent } from '../../services/event_service';
import { history } from '../../history'

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

const [error, setError] = useState(null)

const formik = useFormik({
  initialValues: {
    name: '',
    type: '',
    quantity: '',
    date: '',
    price: '',
    description: ''
  },
  validationSchema: yup.object({
    name: yup
            .string().required("O campo de nome precisa ser preenchido."),
    type: yup
            .string().required("O campo de tipo precisa ser preenchido."),
    quantity: yup
            .string().required("O campo de quantidade precisa ser preenchido."),
    date: yup
            .string().required("O campo de data precisa ser preenchido.")
            .min(10, "O campo de data precisa ser preenchido corretamente."),
    price: yup
            .string().required("O campo de preço precisa ser preenchido."),
    description: yup
            .string().required("O campo de descrição precisa ser preenchido.")
  }),
    onSubmit: (values) =>{
        //HandleSubmit
        const event = {
          name: formik.values.name,
          type: formik.values.type,
          enterprise: "Riot",
          quantity: formik.values.quantity,
          date: formik.values.date,
          price: formik.values.price,
          description: formik.values.description
        }

        registerEvent(event.name, event.type, event.enterprise ,event.quantity, event.date, event.price, event.description)
        .then(res=>{
          setError(null)
          history.push('/admin/eventos')
        })
        .catch(error=>{
          let errorMsg = error.response.data.msg
          setError(errorMsg)
        })
    }
})

  return (
    <>
      <Header/>
      <PageTitle>Criar evento</PageTitle>
      <Container>
        <FormCardWrapper onSubmit={formik.handleSubmit}>
        <FormTitle style={{marginBottom: 25 + "px"} }>Novo evento</FormTitle>

        <Label htmlFor='eventName'>Nome do evento:</Label>
        <InputText type='text' id='eventName'placeholder='Digite o nome do evento'
         {...formik.getFieldProps('name')}/>
         {formik.touched.name ? <ErrorInputs>{formik.errors.name}</ErrorInputs> : null}

        <Label htmlFor='eventType'>Tipo de evento: </Label>
        <InputText type='text' id='eventType'placeholder='Digite o tipo do evento'
        {...formik.getFieldProps('type')}/>
        {formik.touched.type ? <ErrorInputs>{formik.errors.type}</ErrorInputs> : null}
        

        <Label htmlFor='eventTicketNumber'>Quantidade de ingressos:</Label>
        <InputText type='number' id='eventTicketNumber'placeholder='Digite a quantidade de ingressos'
        {...formik.getFieldProps('quantity')}/>
        {formik.touched.quantity ? <ErrorInputs>{formik.errors.quantity}</ErrorInputs> : null}

        <Label htmlFor='eventDate'>Data do evento:</Label>
        <InputText type='date' id='eventDate'placeholder='Digite a data do evento'
        {...formik.getFieldProps('date')}/>
        {formik.touched.date ? <ErrorInputs>{formik.errors.date}</ErrorInputs> : null}

        <Label htmlFor='priceByTicket'>Preço por ingresso - R$</Label>
        <InputText
          type='number'
          placeholder='Digite o valor do ingresso. Ex: 200'
          id='priceByTicket'
        {...formik.getFieldProps('price')}/>
        {formik.touched.price ? <ErrorInputs>{formik.errors.price}</ErrorInputs> : null}

        <Label htmlFor='description'>Descrição:</Label>
        <InputTextarea id='description'placeholder='Digite a descrição do evento'
        {...formik.getFieldProps('description')}/>
        {formik.touched.description ? <ErrorInputs>{formik.errors.description}</ErrorInputs> : null}
         
         {error ? <ErrorInputs>{error}</ErrorInputs> : null}
         
          <div className={classes.div}>
          <Button
          type="submit"
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
