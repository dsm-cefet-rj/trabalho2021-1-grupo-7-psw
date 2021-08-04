import React from "react"
import styles from "./pages.module.css"

export default function EventForm(props){
    let minDate =new Date().toISOString().slice(0, -14)
    return(
        <>
        <form method="POST" action="" className={styles.card}>         
            <h3>{props.companyName}</h3>
            <label htmlFor="eventName">Título:</label>
            <input type="text" id="eventName" /> 
            <label htmlFor="eventType">Tipo de evento: </label>
            <input type="text" id="eventType" />
            
            <label htmlFor="eventTicketNumber">Quantidade de ingressos:</label>
            <input type="number" id="eventTicketNumber" />
            
            <label htmlFor="eventDate">Data do evento:</label>
            <input  type="date" min={minDate}  id="eventDate" />
            
            <label htmlFor="purchaseStartDate">Data de inicio de compra</label>
            <input type="date" id="purchaseStartDate" />
            
            <label htmlFor="purchaseLimiteDate">Data limite de compras</label>
            <input type="date" id="purchaseLimiteDate" />
            <label htmlFor="priceByTicket">Preço por ingresso - R$</label>
            <input type="text" placeholder="Insira o preço" id="priceByTicket" />
            {props.children}
        </form>
        </>
    )
}