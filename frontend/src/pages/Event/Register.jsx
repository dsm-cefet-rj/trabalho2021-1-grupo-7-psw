import React  from "react";
import PageName from "../../components/Event/PageName"
import EventForm from "../../components/Event/Form";
import styles from "../../components/Event/pages.module.css"
import {Button} from '@material-ui/core'
export default function CadastrarEvento(props){
    return (
        <> 
        <div className={styles.container}>
            <PageName pageName="Cadastrar Evento" ></PageName>
            <EventForm companyName="Empresa X">
                <button className={`${styles.btn_create} ${styles.btn_submit}`}>SALVAR EVENTO</button>
            </EventForm>
        </div>
        </>
    )
}