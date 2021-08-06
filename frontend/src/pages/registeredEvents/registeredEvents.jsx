/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/Footer'
import styles from './registeredEvents.module.css'
import RegisteredEventCard from '../../components/RegisteredEventCard'

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
            <main className={styles.mainContent}>
                <h1>Eventos cadastrados</h1>

                <section className={styles.container}>

                    <section className={styles.events}>
                        {tickets.map((ticket,index) =>{
                            return(
                                <RegisteredEventCard {...ticket} />
                            )
                        })}
                    </section>
                    
                </section>
            </main>
            <Footer/>
        </>
    )
}