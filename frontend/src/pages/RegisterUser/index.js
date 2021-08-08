import React from 'react';

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import { Title, Container, Main, Form, Label, Input, Button} from './style.js'


export default function RegisterU(){
    return (
        <>
            <Header/>

            <Title>
            Cadastre uma conta
            </Title>
            <Main>
                <Container>
                    <Form>
                        <Label htmlFor="fullname">Nome Completo:</Label>
                        <Input type="text" id="fullname"/>
                        <Label htmlFor="email">E-mail:</Label>
                        <Input type="email" id="email"/>
                        <Label htmlFor="CPF">CPF:</Label>
                        <Input type="text" id="CPF"/>
                        <Label htmlFor="password">Senha:</Label>
                        <Input type="password" id="password"/>
                        <Label htmlFor="password">Confirmar senha:</Label>
                        <Input type="password" id="password"/>

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
