import React  from "react";
import PageName from "./components/PageName"
import EventForm from "./components/Form";
import styles from "./components/pages.module.css"
export default function CadastrarEvento(props){
    return (
        <> 
        <div className={styles.container}>
            <PageName pageName={props.pageName} ></PageName>
            <EventForm companyName="Empresa X">
                <button className={`${styles.btn_create} ${styles.btn_submit}`}>SALVAR EVENTO</button>
            </EventForm>
        </div>
        </>
    )
}