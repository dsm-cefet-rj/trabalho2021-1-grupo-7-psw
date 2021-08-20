import React from 'react';

import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import { Title, Container, Main, Form, Label, Input, Button, FormTitle, Line, Paragraph, TextArea} from './style'

export default function Feedback(){
    return (
        <>
             <Header/>

            <Title>Feedback</Title>
            <Main>
            <Container>
                <Form>
                <FormTitle>Formulário</FormTitle>
                <Line/>
                <Paragraph>Nos mande uma mensagem de avaliação dos nossos serviços. Ou, se preferir,
                    uma sugestão para nos ajudar a crescer e a trazer cada vez mais eventos para vocês.</Paragraph>
                <Line/>
                <Label htmlFor='name'>Nome:</Label>
                <Input type='name' id='name' placeholder='Digite seu nome' />
                <Label htmlFor='email'>E-mail:</Label>
                <Input type='password'id='email'placeholder='nome@dominio.com'/>
                <Label htmlFor='response'>Mensagem:</Label>
                <TextArea type='textarea' id='response' placeholder='Digite sua mensagem...' />

                <Button className='submitButton'>Enviar</Button>
                </Form>
            </Container>
            </Main>
            <Footer />
        </>
    )
}