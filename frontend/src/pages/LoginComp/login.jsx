import React from 'react';

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import { Title, Container, Main, Form, Label, Input, Button} from './style.js'


export default function RegisterU(){
    return (
        <>
            <Header/>

            
            <Title>
            Entrar
            </Title>
            <Main>
                <Container>
                    <Form>
                        <Label htmlFor="email">E-mail:</Label>
                        <Input type="email" id="email"/>
                        <Label htmlFor="CNPJ">CPNJ:</Label>
                        <Input type="text" id="CNPJ"/>
                        <Label htmlFor="password">Senha:</Label>
                        <Input type="password" id="password"/>

                        <Button className="submitButton">
                        Entrar
                        </Button>

                    </Form>
                </Container>
            </Main> 
            <Footer/>
               
        </>
    )
}
