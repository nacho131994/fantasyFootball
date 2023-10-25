import React, { useState } from "react";
//STYLES
import "../Sections/JugadoresMercado.css";
//SECTIONS
import DetalleJugadoresMercado from "./DetalleJugadoresMercado";
//COMPONENTS
import ConfirmModal from "../Modals/ConfirmModal";

const JugadoresMercado = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };
  const handleCloseDetails = () => {
    setShowDetails(false);
  };
  const handleShowConfirmModal = () => {
    setShowConfirmModal(true);
  };
  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
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
                <div className="player-list-data">
                  <div className="players-list-name">
                    <p>VINICIUS</p>
                  </div>
                </div>
                <div className="players-list-data">
                  <p>250pts</p>
                  <p>30000€</p>
                  <p>250pts</p>
                </div>
                <div className="players-list-data-button-section">
                  <p onClick={handleShowDetails}>DETALLES</p>
                  <p onClick={handleShowConfirmModal}>FICHAR</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {showDetails ? (
          <DetalleJugadoresMercado
            handleCloseDetails={handleCloseDetails}
            handleShowConfirmModal={handleCloseConfirmModal}
            showConfirmModal={showConfirmModal}
          />
        ) : (
          ""
        )}
        {showConfirmModal ? (
          <ConfirmModal
            handleCloseConfirmModal={handleCloseConfirmModal}
            action={"FICHAR"}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default JugadoresMercado;
