/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'

import { Main, Title, Container, SearchBar, SearchLeft, SearchRight, SearchInput, SearchBtn, Tickets } from './style.js'
import imgEvent from '../../assets/img/filme-cuties-netflix.png'
import EventCard from '../../components/EventCard/index'

export default function MyTickets(){

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
                <Title>Meus ingressos</Title>

                <Container>
                    <SearchBar>
                        <SearchLeft>
                            <SearchInput type="search" placeholder="Pesquise pelos seus ingressos" />
                        </SearchLeft>
                        
                        <SearchRight>
                            <SearchBtn><img src="pesquisa.svg" alt="Search image"/></SearchBtn>
                        </SearchRight>
                    </SearchBar>

                    <Tickets>
                        {tickets.map((ticket,index) =>{
                            return(
                                <EventCard eventName={ticket.title} eventImg={imgEvent} />
                            )
                        })}
                    </Tickets>
                </Container>
            </Main>

            <Footer/>
        </>
    )
}