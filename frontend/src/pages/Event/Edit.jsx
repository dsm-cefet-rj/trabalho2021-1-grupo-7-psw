import React, {useState} from "react"
import EventForm from "./components/Form"
import PageName from "./components/PageName"
import styles from "./components/pages.module.css"
export default function EventEdit(props){

    return(
        <>       
            <div className={styles.container}>
            <PageName pageName={props.pageName} ></PageName>
            <EventForm companyName="Empresa Y">
                <button className={`${styles.btn_edit} ${styles.btn_submit}`}>CONFIRMAR ALTERAÇÕES</button>
            </EventForm>
            </div>
        </>
    )
}