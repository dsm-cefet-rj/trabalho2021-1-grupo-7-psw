/* eslint-disable jsx-a11y/img-redundant-alt */
import styles from './style.module.css'
import eventPhoto from '../../assets/img/evento.jpg'

export default function RegisteredEventCard(props){
    return(
        <div key={props.id} className={styles.event}>
            <img src={eventPhoto} alt="Event image"/>

            <section className={styles.eventContent}>
                <div className={styles.eventDescription}>
                        <h2>{props.title}</h2>
                        <div>{props.date}</div>
                    <div>Ingressos Vendidos: {props.tickets_number}</div>
                </div>

                <div className={styles.eventActions}>
                    <button className={styles.seeEventBtn} type="button"></button>
                    <button className={styles.editEventBtn} type="button"></button>
                    <button className={styles.deleteEventBtn} type="button"></button>
                </div>
            </section>
        </div>
    )
}