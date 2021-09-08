import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../store/user/userSlice';
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
  ErrorInputs,
} from './style.js';
import { Link } from 'react-router-dom';
import { registerUser } from '../../services/register';
import { history } from '../../history';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { registerUserSchema } from '../../utils/registerSchema';

const normalizeCpf = (value) => {
  function formatCpf(text) {
    const badchars = /[^\d]/g;
    const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/;
    const cpf = new String(text).replace(badchars, '');
    return cpf.replace(mask, '$1.$2.$3-$4').substr(0, 14) || '';
  }
  return formatCpf(value);
};

export default function RegisterU() {
  const linkStyle = {
    color: '#074AB8',
  };
  const dispatch = useDispatch();

  const [erro, setErro] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerUserSchema),
  });

  const registerSubmit = async (user) => {
    try {
      dispatch(
        createUser({
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          cpf: user.cpf,
          password: user.password,
        })
      );
      // await registerUser(`${user.firstName} ${user.lastName}`, user.email ,user.cpf, user.password);
      setErro(null);
      history.push('/entrar');
    } catch (error) {
      let msgErro = error.response.data.msg;
      setErro(msgErro);
    }
  };

  return (
    <>
      <Header />

      <Title>Cadastrar-se</Title>

      <Main>
        <Container>
          <Form onSubmit={handleSubmit(registerSubmit)}>
            <FormTitle>Cadastro do cliente</FormTitle>

            <Label htmlFor='firstName'>Nome:</Label>
            <Input
              type='text'
              id='firstName'
              placeholder='Digite seu nome'
              {...register('firstName')}
            />
            <ErrorInputs>{errors.firstName?.message}</ErrorInputs>

            <Label htmlFor='lastName'>Sobrenome</Label>
            <Input
              type='text'
              id='lastName'
              placeholder='Digite seu sobrenome'
              {...register('lastName')}
            />
            <ErrorInputs>{errors.lastName?.message}</ErrorInputs>

            <Label htmlFor='email'>E-mail:</Label>
            <Input
              type='email'
              id='email'
              placeholder='Digite seu e-mail'
              {...register('email')}
            />
            <ErrorInputs>{errors.email?.message}</ErrorInputs>

            <Label htmlFor='CPF'>CPF:</Label>
            <Input
              type='text'
              id='CPF'
              placeholder='Digite seu CPF'
              {...register('cpf')}
              onChange={(event) => {
                const { value } = event.target;
                event.target.value = normalizeCpf(value);
              }}
            />
            <ErrorInputs>{errors.cpf?.message}</ErrorInputs>

            <Label htmlFor='password'>Senha:</Label>
            <Input
              type='password'
              id='password'
              placeholder='Digite sua senha'
              {...register('password')}
            />
            <ErrorInputs>{errors.password?.message}</ErrorInputs>

            <Label htmlFor='confirmPassword'>Confirmar senha:</Label>
            <Input
              type='password'
              id='confirmPassword'
              placeholder='Confirme sua senha'
              {...register('confirmPassword')}
            />
            <ErrorInputs>{errors.confirmPassword?.message}</ErrorInputs>

            {erro ? <ErrorInputs>{erro}</ErrorInputs> : null}
            <Button type='submit' className='submitButton'>
              Criar conta
            </Button>

            <Link to='/entrar' style={linkStyle}>
              Voltar ao login
            </Link>
          </Form>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
