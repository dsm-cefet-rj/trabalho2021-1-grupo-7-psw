import React from 'react';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/Footer'
//Importa o css
//import './style.css';

export default function LoginC(){
    return (
        <div className="page">
            <Header/>

            <h1 class="title">Entrar</h1>   

            <form>
                <label htmlFor="email">E-mail:</label>
                <input id="email" type="number"/>
                <label htmlFor="cnpj">CNPJ:</label>
                <input id="cnpj" type="number"/>
                <label htmlFor="password">Senha:</label>
                <input id="password" type="password"/>

                <button className="submitButton">
                    Entrar
                </button>
                
            </form> 
            

        </div>
    )
}