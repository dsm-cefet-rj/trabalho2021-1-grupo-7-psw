import React from "react"
import Inputs from "./Inputs"
import styles from "./pages.module.css"
export default function EventForm(props){

    return(
        <>
        <form method="POST" action="" className={styles.card}>         
            <h3>{props.companyName}</h3>
            <Inputs> </Inputs>
            {props.children}
        </form>
        </>
    )
}