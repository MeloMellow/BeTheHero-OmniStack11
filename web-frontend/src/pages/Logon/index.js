import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Your ID" />
                    <button className="button" type="subtmit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Do not have an account
                    </a>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}