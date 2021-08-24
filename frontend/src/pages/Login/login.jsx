import React, { useCallback, useState } from 'react';

import { getUser } from '../../services/login_service'
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { Title,Container,Main,Form,Label,Input,Button,
  FormTitle, Hr,RegisterBtn, RegisterFlex, ErrorInputs} from '../RegisterUser/style';
import { Link } from 'react-router-dom';
import {users} from '../../utils/users'

export default function LoginU() {

  const getUsername = async () => {
    const user = await getUser('lucas123@gmail.com', '123123123')
    console.log(user)
  }
  getUsername()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleChangeEmail = useCallback((evt)=>{
    setEmail(evt.target.value)
  },[setEmail])

  const handleClickPassword = useCallback((evt)=>{
    setPassword(evt.target.value)
  },[setPassword])

  const handleSubmit = useCallback(async(evt)=>{
    evt.preventDefault()

    try{const user = await getUser('lucas123@gmail.com', '12312312')
    console.log(user)
  }catch(error){
    console.log(error)
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