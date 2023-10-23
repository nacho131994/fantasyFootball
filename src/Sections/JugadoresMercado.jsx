import React, { useState } from "react";
//STYLES
import "../Sections/JugadoresMercado.css";
//SECTIONS
import DetalleJugadoresMercado from "./DetalleJugadoresMercado";

const JugadoresMercado = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };
  const handleCloseDetails = () => {
    setShowDetails(false);
  };
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
            <option value="opcion2">Mayor precio </option>
            <option value="opcion3">Menor precio </option>
            <option value="opcion4">Mayor puntuacion </option>
            <option value="opcion5">Menor puntuacion</option>
            <option value="opcion6">Portero</option>
            <option value="opcion7">Defensa</option>
            <option value="opcion8">Centrocampista</option>
            <option value="opcion9">Delantero</option>
          </select>
          <div className="searchbar">
            <input type="text" placeholder="Busca un jugador" />
            <button>BUSCAR</button>
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
                    <p onClick={handleShowDetails}>DETALLES</p>
                    <p>FICHAR</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {showDetails === true ? (
          <DetalleJugadoresMercado handleCloseDetails={handleCloseDetails} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default JugadoresMercado;
