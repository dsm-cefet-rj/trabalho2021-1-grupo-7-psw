/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import RegisteredEventCard from '../../components/RegisteredEventCard'
import { Main, Title, Container, RegisterEventContainer, RegisterEventBtn, Events } from './style.js'

export default function RegisteredEvents(){

    const tickets = [
        {
            id: 1,
            title: "Rock in Rio 2021",
            date: "10/11/2021",
            tickets_number: 1,
            user_id: 5,
            favorite: false
        },
        {
            id: 2,
            title: "Beto Carreiro World",
            date: "05/12/2021",
            tickets_number: 2,
            user_id: 5,
            favorite: true
        },
        {
            id: 3,
            title: "Game XP",
            date: "27/12/2021",
            tickets_number: 1,
            user_id: 5,
            favorite: false
        },
        {
            id: 4,
            title: "Rock in Rio 2021",
            date: "10/11/2021",
            tickets_number: 1,
            user_id: 5,
            favorite: false
        },
        {
            id: 5,
            title: "Beto Carreiro World",
            date: "05/12/2021",
            tickets_number: 2,
            user_id: 5,
            favorite: true
        },
        {
            id: 6,
            title: "Game XP",
            date: "27/12/2021",
            tickets_number: 1,
            user_id: 5,
            favorite: false
        }
    ]

    return(
        <>
            <Header/>
            <Main>
                <Title>Eventos cadastrados</Title>

                <Container>
                    <RegisterEventContainer><RegisterEventBtn>Cadastrar evento</RegisterEventBtn></RegisterEventContainer>
                    
                    <Events>
                        {tickets.map((ticket,index) =>{
                            return(
                                <RegisteredEventCard {...ticket} />
                            )
                        })}
                    </Events>
                </Container>
            </Main>
            <Footer/>
        </>
    )
}