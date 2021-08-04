import React from 'react';
//Importa o css
import './style.css';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/Footer'


export default function RegisterU(){
    return (
        <div className="page">
            <Header/>
            <h1>Cadastre sua empresa</h1>
    
                <form>
                    <label>Nome da Empresa:</label>
                    <input type="text"/>
                    <label>E-mail:</label>
                    <input type="text"/>
                    <label>CPF:</label>
                    <input type="text"/>
                    <label>Senha:</label>
                    <input type="password"/>
                    <label>Confirmar senha:</label>
                    <input type="password"/>

                    <button className="submitButton">
                    Criar conta
                    </button>

                </form>
            
                
               
        </div>
    )
}
