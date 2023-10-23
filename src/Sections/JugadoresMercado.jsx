import React from "react";
//STYLES
import "../Sections/JugadoresMercado.css";

const JugadoresMercado = () => {
  return (
    <div className="mercado-body-players">
      <h1>MERCADO DE JUGADORES</h1>
      <div className="players-list-section">
        <div className="players-searcher">
          <select placeholder="">
            <option value="" disabled selected>
              Buscar por...
            </option>
            <option value="opcion1">Todos los jugadores</option>
            <option value="opcion2">Por precio</option>
            <option value="opcion3">Por puntuacion</option>
            <option value="opcion4">Por portero</option>
            <option value="opcion5">Por defensa</option>
            <option value="opcion6">Por centrocampista</option>
            <option value="opcion7">Por delantero</option>
          </select>
          <div className="searchbar">
            <input type="text" placeholder="Busca un jugador" />
            <button>Buscar</button>
          </div>
        </div>
        <div className="players-list-container">
          <div className="players-list">
            <ul>
              <li>
                <div className="player-list-name">VINICIUS (RMA)</div>
                <div className="players-list-data">
                  <p>250pts</p>
                  <p>30000€</p>
                  <p>250pts</p>
                  <div className="players-list-data-button-section">
                    <button>DETALLES</button>
                    <button>FICHAR</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JugadoresMercado;
