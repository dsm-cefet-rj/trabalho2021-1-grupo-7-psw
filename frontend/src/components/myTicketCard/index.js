/* eslint-disable jsx-a11y/img-redundant-alt */
import styles from './style.module.css'
import eventPhoto from '../../assets/img/evento.jpg'

export default function RegisteredEventCard(props){
    return(
        <div key={props.id} className={styles.ticket}>
            <img src={eventPhoto} alt="Event image"/>

            <section className={styles.ticketContent}>
                <div className={styles.ticketDescription}>
                    <h2>{props.title}</h2>
                    <div>{props.date}</div>
                    <div>Ingressos: {props.tickets_number}</div>
                </div>

                <button type="button"></button>
            </section>
        </div>
    )
}