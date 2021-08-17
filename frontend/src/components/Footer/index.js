/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FooterComponent, Container, LinkList, Copyright, LogoContainer, Logo} from './style.js'
import logoImg from '../../assets/img/logo.svg'

export default function Footer(){
    return(
        <FooterComponent>
            <Container>
                <LogoContainer>
                   <Logo src={logoImg}/> 
                </LogoContainer>

                <LinkList>
                    <li>Home</li>
                    <li>Seus Pedidos</li>
                    <li>Suporte</li>
                    <li>FeedBack</li>
                    <li>Sobre</li>
                    <li>Entrar</li>
                    <li>Cadastrar-se</li>
                </LinkList>

                <hr/>

                <Copyright>&#169; IngressosHub. Todos os direitos reservados</Copyright>    
            </Container>
            
        </FooterComponent>
    )
}