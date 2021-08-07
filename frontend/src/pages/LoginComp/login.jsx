import React from 'react';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/Footer'
//Importa o css
import './style.css';

export default function LoginC(){
    return (
        <div className="page">
            <Header/>

            <div className="titulo">
                <h1>Entrar</h1>   
            </div>

            <div className="body">
                <form>
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" type="email"/>
                    <label htmlFor="cnpj">CNPJ:</label>
                    <input id="cnpj" type="text"/>
                    <label htmlFor="password">Senha:</label>
                    <input id="password" type="password"/>

                    <button className="submitButton">
                        Entrar
                    </button>
                    
                </form> 
            </div>

        </div>
    )
}