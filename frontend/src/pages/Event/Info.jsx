import React  from "react";
import { useParams } from "react-router-dom";

export default function EventInfo(props){

    let {slug} = useParams()

    return (
        <h1>Evento - {slug}</h1>
    )
}