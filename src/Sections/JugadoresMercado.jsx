import React, { useState } from "react";
//STYLES
import "../Sections/JugadoresMercado.css";
//MODALS
import DetalleJugadoresMercado from "../Modals/DetalleJugadoresMercado.jsx";
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
      <div className="current-money">
        <p>DINERO DISPONIBLE:</p>
        <p className="current-money-digits">4342342€</p>
      </div>
      <div className="players-list-section">
        <div className="players-searcher">
          <select placeholder="">
            <option value="" disabled selected>
              Buscar por posición
            </option>
            <option value="opcion1">Todos los jugadores</option>
            <option value="opcion2">Portero</option>
            <option value="opcion3">Defensa</option>
            <option value="opcion4">Centrocampista</option>
            <option value="opcion5">Delantero</option>
          </select>
          <select placeholder="">
            <option value="" disabled selected>
              Buscar por...
            </option>
            <option value="opcion1">Todos los jugadores</option>
            <option value="opcion2">Mayor precio </option>
            <option value="opcion3">Menor precio </option>
            <option value="opcion4">Mayor puntuacion </option>
            <option value="opcion5">Menor puntuacion</option>
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
                  <div className="players-list-data-item">
                    <i class="fa-solid fa-star"></i>
                    <p>250pts</p>
                  </div>
                  <div className="players-list-data-item">
                    <i class="fa-solid fa-money-bill-trend-up"></i>
                    <p>30000€</p>
                  </div>
                  <div className="players-list-data-item">
                    <i class="fa-solid fa-futbol"></i>
                    <p>GOLES</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="players-list-data-button-section">
              <p onClick={handleShowDetails}>DETALLES</p>
              <p onClick={handleShowConfirmModal}>FICHAR</p>
            </div>
          </div>
        </div>
        {showDetails ? (
          <DetalleJugadoresMercado
            handleCloseDetails={handleCloseDetails}
            handleShowConfirmModal={handleShowConfirmModal}
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
