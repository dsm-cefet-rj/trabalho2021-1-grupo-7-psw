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

export default function LoginComp() {
  return (
    <>
      <Header />

      <Title>Entrar | Empresa</Title>
      <Main>
        <Container>
          <Form>
            <FormTitle>Login da Empresa</FormTitle>
            <Label htmlFor='email'>E-mail:</Label>
            <Input type='email' id='email' placeholder='Digite o e-mail' />
            <Label htmlFor='password'>Senha:</Label>
            <Input
              type='password'
              id='password'
              placeholder='Digite a senha'
            />

            <Button className='submitButton'>Entrar</Button>
          </Form>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
