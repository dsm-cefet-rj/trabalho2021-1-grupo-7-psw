import React from 'react';

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import { Title, Container, Main, Form, Label, Input, Button, FormTitle} from '../RegisterUser/style'


export default function RegisterC(){
    return (
        <>
            <Header/>

            <Title>
            Cadastre sua empresa
            </Title>
            <Main>
                <Container>
                    <Form>
                        <FormTitle>Cadastro da Empresa</FormTitle>
                        <Label htmlFor="CompanyName">Nome da Empresa:</Label>
                        <Input type="text" id="CompanyName" placeholder="Digite o nome da empresa"/>
                        <Label htmlFor="email">E-mail:</Label>
                        <Input type="email" id="email" placeholder="Digite o e-mail da empres"/>
                        <Label htmlFor="CNPJ">CNPJ:</Label>
                        <Input type="text" id="CNPJ" placeholder="Digite o CNPJ"/>
                        <Label htmlFor="password">Senha:</Label>
                        <Input type="password" id="password"  placeholder="Digite a senha"/>
                        <Label htmlFor="password">Confirmar senha:</Label>
                        <Input type="password" id="password" placeholder="Confirme a senha"/>

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
