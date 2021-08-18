/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FooterComponent, Container, LinkList, Copyright, LogoContainer, Logo} from './style.js'
import logoImg from '../../assets/img/logo.svg'
import {Link} from 'react-router-dom'

export default function Footer(){
    return(
        <FooterComponent>
            <Container>
                <LogoContainer>
                   <Logo src={logoImg}/> 
                </LogoContainer>

                <LinkList>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/meus-ingressos">Seus Pedidos</Link></li>
                    <li><Link to="/suporte">Suporte</Link></li>
                    <li><Link to="/feedback">FeedBack</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/entrar">Entrar</Link></li>
                    <li><Link to="/cadastrar">Cadastrar-se</Link></li>
                </LinkList>

                <hr/>

                <Copyright>&#169; IngressosHub. Todos os direitos reservados</Copyright>    
            </Container>
            
        </FooterComponent>
    )
}