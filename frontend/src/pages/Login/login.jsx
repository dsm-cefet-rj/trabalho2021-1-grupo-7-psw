import React, { useCallback, useState } from 'react';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { Title,Container,Main,Form,Label,Input,Button,
  FormTitle, Hr,RegisterBtn, RegisterFlex, ErrorInputs} from '../RegisterUser/style';
import { Link } from 'react-router-dom';
import {users} from '../../utils/users'

export default function LoginU() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleChangeEmail = useCallback((evt)=>{
    setEmail(evt.target.value)
  },[setEmail])

  const handleClickPassword = useCallback((evt)=>{
    setPassword(evt.target.value)
  },[setPassword])

  const handleSubmit = useCallback((evt)=>{
    evt.preventDefault()

    let findUser = users.find(user=>user.email === email && user.password === password)

    if(!findUser){
      setError("O usuário está incorreto ou não existe.")
    }
    else{
      setError(null)
      console.log({email, password})
    }

  },[email,password])

  return (
    <>
      <Header />

      <Title>Entrar</Title>
      <Main>
        <Container>
          <Form onSubmit={handleSubmit}>
            <FormTitle>Faça Login</FormTitle>
            <Label htmlFor='email'>E-mail:</Label>
            <Input type='email' id='email' placeholder='Digite seu e-mail' value={email} onChange={handleChangeEmail} />
            
            <Label htmlFor='password'>Senha:</Label>
            <Input
              type='password'
              id='password'
              placeholder='Digite sua senha'
              onChange={handleClickPassword}
              value={password}
            />
            {error ? <ErrorInputs>{error}</ErrorInputs> : null}
            <Button className='submitButton'>Entrar</Button>
            
            <Hr/>

            <RegisterFlex>
              <Link to="/cadastrar"><RegisterBtn>Cadastrar usuário</RegisterBtn></Link>
              <Link to="/admin/cadastrar"><RegisterBtn>Cadastrar empresa</RegisterBtn></Link>
            </RegisterFlex>
            
          </Form>

          
        </Container>
      </Main>
      <Footer />
    </>
  );
}