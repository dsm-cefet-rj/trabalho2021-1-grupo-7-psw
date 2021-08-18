import React  from "react";
import Header from '../../components/Header/index.js';
import Footer from '../../components/Footer/index';

import {Grid} from '@material-ui/core';
import {Main, Title,Img,Div,Text} from './style.js'

export default function About(){
    return(
        <>
            <Header/>
            <Main>
                <Title>Quem é a IngressoHub ?</Title>
                <Text>Somos uma empresa feita por um grupo de estudantes do CEFET-RJ apaixonados por eventos em geral. Por isso, pensamos e criamos a IngressoHub com o pensamento de compartilhar essa paixão por eventos com outras pessoas. </Text>
                <Text>Oferecendo ferramentas seguras e eficazes, além de soluções inteligentes que irão revolucionar a forma como empresas criam e administram seus eventos.</Text>
                <Text>Juntamos a inovação do e-commerce com a paixão por eventos e focamos na realização do negócio que nos move todos os dias: a cultura.</Text>
                <Text>Dê uma olhada nos eventos disponíveis no IngressoHub e adquira agora a sua reserva pra aquele evento/filme que tanto esperava acontecer.</Text>
                <Text>Não arrisque comprar o ingresso no local e seja o primeiro a reservar um lugar no seu evento favorito pelo IngressoHub.</Text>
                <Title>Criadores do site</Title>
                <Grid
                    container
                    // align-content='start'
                    justify='center'
                    // justify-content='center'
                    // alignItems='center'
                    style={{ marginTop: 15, padding: 10 }}
                >
                    <Div>
                        <a href="https://github.com/Caio-Abreu" target="_blank" rel="Git-Caio">
                            <Img src="https://github.com/Caio-Abreu.png" alt="Gostoso"></Img>Caio Abreu
                        </a>
                    </Div>
                    <Div>
                        <a href="https://github.com/dreymond1" target="_blank" rel="Git-Drey">
                            <Img src="https://github.com/dreymond1.png" alt="Mato mesmo"></Img>Andrey 
                        </a>
                    </Div>
                    <Div>
                        <a href="https://github.com/felipe-junior" target="_blank" rel="Git-Felipe">
                            <Img src="https://github.com/felipe-junior.png" alt="Rei do back" ></Img>Felipe
                        </a>
                    </Div>
                    <Div>
                        <a href="https://github.com/lucasfarolfi" target="_blank" rel="Git-Farolfi">
                            <Img src="https://github.com/lucasfarolfi.png" alt="Menino jesus"></Img>Farolfi
                        </a>
                    </Div>
                    <Div>
                        <a href="https://github.com/Joaomleite" target="_blank" rel="Git-joao">
                            <Img src="https://github.com/Joaomleite.png" alt="Rei do front"></Img>João
                        </a>
                    </Div>
                </Grid>
            </Main>

            <Footer/>
        </>
)
    }