/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from '../../components/header/index'
import Footer from '../../components/Footer/Footer'
import styles from './myTickets.module.css'

import MyTicketCard from '../../components/myTicketCard/index'

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
            <main className={styles.mainContent}>
                <h1>Meus ingressos</h1>

                <section className={styles.container}>
                    <form className={styles.searchBar}>
                        <div className={styles.searchLeft}>
                            <input type="search" placeholder="Pesquise pelos seus ingressos" />
                        </div>
                        <div className={styles.searchRight}>
                            <button type="button"><img src="pesquisa.svg" alt="Search image"/></button>
                        </div>
                    </form>

                    <section className={styles.tickets}>
                        {tickets.map((ticket,index) =>{
                            return(
                                <MyTicketCard {...ticket} />
                            )
                        })}
                    </section>
                </section>
            </main>
            <Footer/>
        </>
    )
}