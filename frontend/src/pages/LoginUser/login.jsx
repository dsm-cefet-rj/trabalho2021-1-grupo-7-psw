import React from 'react';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { makeStyles } from '@material-ui/core';
import { TextField, Grid } from '@material-ui/core';
import { Title, Main, Form, Button, FormTitle } from './style.js';

const useStyles = makeStyles({
  textFieldRoot: {
    width: '100%',
    color: '#000',
  },
  multilineColor: {
    color: '#000',
  },
  labelColor: {
    color: '#000',
  },
});

export default function LoginU() {
  const classes = useStyles();

  return (
    <>
      <Header />

      <Title>Entrar</Title>

      <Main>
        <Form>
          <FormTitle>Login</FormTitle>
          <Grid style={{ margin: 20 }}>
            <TextField
              required
              variant='outlined'
              color='secundary'
              id='standard-required'
              InputProps={{
                className: classes.multilineColor,
              }}
              InputLabelProps={{
                className: classes.labelColor,
              }}
              label='E-mail'
              classes={{ root: classes.textFieldRoot }}
            />
          </Grid>
          <Grid style={{ margin: 20 }}>
            <TextField
              required
              variant='outlined'
              color='secundary'
              id='standard-password-input'
              type='password'
              InputProps={{
                className: classes.multilineColor,
              }}
              InputLabelProps={{
                className: classes.labelColor,
              }}
              label='Senha'
              autoComplete='current-password'
              classes={{ root: classes.textFieldRoot }}
            />
          </Grid>
          <Button className='submitButton'>Entrar</Button>
        </Form>
      </Main>
      <Footer />
    </>
  );
}
