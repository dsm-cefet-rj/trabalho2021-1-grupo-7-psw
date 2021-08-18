import React from 'react';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import {
  Title,
  Container,
  Main,
  Form,
  Label,
  Input,
  Button,
  FormTitle,
} from '../RegisterUser/style';

export default function RegisterU() {
  return (
    <>
      <Header />

      <Title>Entrar</Title>
      <Main>
        <Container>
          <Form>
            <FormTitle>Login da Empresa</FormTitle>
            <Label htmlFor='email'>E-mail:</Label>
            <Input type='email' id='email' placeholder='Digite seu e-mail' />
            <Label htmlFor='password'>Senha:</Label>
            <Input
              type='password'
              id='password'
              placeholder='Digite sua senha'
            />

            <Button className='submitButton'>Entrar</Button>
          </Form>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
