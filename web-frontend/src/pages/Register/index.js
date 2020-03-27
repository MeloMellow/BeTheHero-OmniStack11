import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Sign in</h1>
                    <p>Make your registration</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Do not have an account
                    </Link>
                </section>

                <form>
                    <input placeholder="ONG Name" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="WhatsApp" />
                    <input placeholder="WhatsApp" />

                    <div className="input-group">
                        <input placeholder="City" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>
                    
                    <button className="button" type="submit" >Sign in</button>
                </form>
            </div>
        </div>
    );
};