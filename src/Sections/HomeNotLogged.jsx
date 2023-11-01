import React, { useState } from "react";
//STYLES
import "../Sections/HomeNotLogged.css";
//MODALS

const HomeNotLogged = () => {
  return (
    <div className="home-not-logged-container">
      <div className="home-not-logged-body">
        <div className="home-not-logged-description">
          <h1>
            La Liga fantasy donde podras crear tu propio equipo con jugadores de
            LaLiga EASports y competir con otros jugadores a lo largo del mundo.
          </h1>
        </div>

        <div className="home-not-logged-options-and-button">
          <div className="home-not-logged-options">
            <div className="options-item">
              <i class="fa-solid fa-user"></i>
              <p>Regístrate y crea tu propio equipo</p>
            </div>
            <div className="options-item">
              <i class="fa-solid fa-globe"></i>
              <p>Entra en una Liga y compite con otros jugadores</p>
            </div>
            <div className="options-item">
              <i class="fa-solid fa-money-bill-transfer"></i>
              <p>Modifica tu plantilla fichando y vendiendo jugadores</p>
            </div>
            <div className="options-item">
              <i class="fa-solid fa-star"></i>
              <p>Gana puntos según su rendimiento en la vida real</p>
            </div>
          </div>
          <div className="home-not-logged-button">
            <button> Iniciar Sesion</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNotLogged;
