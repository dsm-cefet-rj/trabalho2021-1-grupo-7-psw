import React from 'react';

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import { Title, Container, Main, Form, Label, Input, Button, FormTitle} from './style.js'


export default function RegisterU(){
    return (
        <>
            <Header/>

            <Title>
            Cadastrar
            </Title>

            <Main>
                <Container>
                    <Form>
                        <FormTitle>Registro do cliente</FormTitle>

                        <Label htmlFor="fullname">Nome Completo:</Label>
                        <Input type="text" id="fullname" placeholder="Digite seu nome"/>
                        <Label htmlFor="email">E-mail:</Label>
                        <Input type="email" id="email" placeholder="Digite seu e-mail"/>
                        <Label htmlFor="CPF">CPF:</Label>
                        <Input type="text" id="CPF" placeholder="Digite seu CPF"/>
                        <Label htmlFor="password">Senha:</Label>
                        <Input type="password" id="password" placeholder="Digite sua senha"/>
                        <Label htmlFor="password">Confirmar senha:</Label>
                        <Input type="password" id="password" placeholder="Confirme sua senha"/>

                        <Button className="submitButton">
                        Criar conta
                        </Button>

                    </Form>
                </Container>
            </Main>
            <Footer/>
               
        </>
    )
}
