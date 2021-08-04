import React  from "react";
import PageName from "../../components/Event/PageName"
import EventForm from "../../components/Event/Form";
import styles from "../../components/Event/pages.module.css"
export default function EventDelete(props){
    return (
        <> 
        <div className={styles.container}>
            <PageName pageName="Excluir evento" ></PageName>
            <EventForm companyName="Empresa X">
                <button className={`${styles.btn_delete} ${styles.btn_submit}`}>EXCLUIR EVENTO</button>
            </EventForm>
        </div>
        </>
    )
}