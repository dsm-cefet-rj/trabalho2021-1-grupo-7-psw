import React from "react"
import styles from "./pages.module.css" 
export default function PageName(props){
    return(
        <>
        <h2 className={styles.pageName}>{props.pageName}</h2>
        </>
    )
}