/* eslint-disable jsx-a11y/img-redundant-alt */
import eventPhoto from '../../assets/img/filme-cuties-netflix.png'
import { EventActions, EventDescription, EventTitle, SeeEventBtn, TicketsSold, EventDate, Event, EventImg } from './style'
import SeeBtnImg from '../../assets/img/seeBtn.png'

export default function RegisteredEventCard(props){
    return(
        <Event key={props.id}>
            <EventImg src={eventPhoto} alt="Event image"/>

            <EventDescription>
                <EventTitle>{props.title}</EventTitle>
                <EventDate>{props.date}</EventDate>
                <TicketsSold>Ingressos Vendidos: {props.tickets_number}</TicketsSold>
            </EventDescription>
                     
            <EventActions>
                <SeeEventBtn imgBtn={SeeBtnImg}/>
            </EventActions>
            
        </Event>
    )
}