import React from 'react';
//Importa o css
import './style.css';

export default function LoginU(){
    return (
        <div className="page">

            <h1>Entrar</h1>   

            <form>
                <label htmlFor="email">E-mail:</label>
                <input id="email" type="email"/>
                <label htmlFor="password">Senha:</label>
                <input id="password" type="password"/>

                <button className="submitButton">
                    Entrar
                </button>
                
            </form> 
               
        </div>
    )
}