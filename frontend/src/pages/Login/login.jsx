import React, { useState } from 'react';

import { getUser } from '../../services/login_service';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../store/user/userSlice';
import {
  Title,
  Container,
  Main,
  Form,
  Label,
  Input,
  Button,
  FormTitle,
  Hr,
  RegisterBtn,
  RegisterFlex,
  ErrorInputs,
} from '../RegisterUser/style';
import { Link } from 'react-router-dom';
import { history } from '../../history';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../utils/loginSchema';

export default function LoginU() {
  const [erro, setErro] = useState(null);
  // const userState = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();

  const loginSubmit = async (user) => {
    const { email, password } = user;

    try {
      dispatch(fetchUser({ email, password }));
      setErro(null);
      history.push('/');
    } catch (error) {
      let msgErro = error.response.data.msg;
      setErro(msgErro);
    }
  };

  return (
    <>
      <Header />

      <Title>Entrar</Title>
      <Main>
        <Container>
          <Form onSubmit={handleSubmit(loginSubmit)}>
            <FormTitle>Faça Login</FormTitle>
            <Label htmlFor='email'>E-mail:</Label>
            <Input
              autoComplete='none'
              type='email'
              id='email'
              placeholder='Digite seu e-mail'
              id='email'
              {...register('email')}
            />
            <ErrorInputs>{errors.email?.message}</ErrorInputs>

            <Label htmlFor='password'>Senha:</Label>
            <Input
              type='password'
              id='password'
              placeholder='Digite sua senha'
              id='password'
              {...register('password')}
            />
            <ErrorInputs>{errors.password?.message}</ErrorInputs>

            {erro ? <ErrorInputs>{erro}</ErrorInputs> : null}
            <Button className='submitButton'>Entrar</Button>

            <Hr />

            <RegisterFlex>
              <Link to='/cadastrar'>
                <RegisterBtn>Cadastrar usuário</RegisterBtn>
              </Link>
              <Link to='/admin/cadastrar'>
                <RegisterBtn>Cadastrar empresa</RegisterBtn>
              </Link>
            </RegisterFlex>
          </Form>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
