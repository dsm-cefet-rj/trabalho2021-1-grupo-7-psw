import React, {useState} from "react"
import EventForm from "../../components/Event/Form"
import PageName from "../../components/Event/PageName"
import styles from "../../components/Event/pages.module.css"
export default function EventEdit(props){

    return(
        <>       
            <div className={styles.container}>
            <PageName pageName="Atualizar evento" ></PageName>
            <EventForm companyName="Empresa X">
                <button className={`${styles.btn_edit} ${styles.btn_submit}`}>CONFIRMAR ALTERAÇÕES</button>
            </EventForm>
            </div>
        </>
    )
}