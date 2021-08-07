import React from 'react';
//Importa o css
import './style.css';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/Footer'

export default function LoginU(){
    return (
        <div className="page">

            <Header/>

            <div className="titulo">
                <h1>Entrar</h1>   
            </div>   


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