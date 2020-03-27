import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

import "./styles.css";

export default function Profile(){



    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Welcome, {ongName}</span>

                <Link to="/incidents/new" className="button">
                    Register new caSe
                </Link>

                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1> Registred cases</h1>

            <ul>
                {incidents.map(incident => (
                <li key={incident.id}>
                    <strong>CASE:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIPTION:</strong>
                    <p>{incident.description}</p>

                    <strong>VALUE:</strong>
                    <p>
                    {Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL"
                    }).format(incident.value)}
                    </p>

                    <button
                    type="button"
                    onClick={() => handleDeleteIncident(incident.id)}
                    >
                    <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
};