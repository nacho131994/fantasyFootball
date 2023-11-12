import React, { useState, useEffect } from "react";
//STYLES
import "../Sections/JugadoresMercado.css";
//MODALS
import DetalleJugadoresMercado from "../Modals/DetalleJugadoresMercado.jsx";
//COMPONENTS
import ConfirmModal from "../Modals/ConfirmModal";

const JugadoresMercado = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [playersList, setPLayersList] = useState([]);
  const [selectedPlayerName, setSelectedPlayerName] = useState("");
  const [selectedPlayerTeam, setSelectedPlayerTeam] = useState("");

  const handleShowDetails = (playerName, playerTeam) => {
    setSelectedPlayerName(playerName);
    setSelectedPlayerTeam(playerTeam);
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

  const url =
    "https://footb.onrender.com/v2/player?skip=0&limit=2000&sort_field=id&sort_order=desc";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPLayersList(data.data);
      });
  }, []);

  return (
    <div className="mercado-body-players">
      <div className="current-money">
        <p>DINERO DISPONIBLE:</p>
        <p className="current-money-digits">4342342€</p>
      </div>

      <div className="players-list-section">
        <div className="players-searcher">
          <div className="searchbar">
            <input type="text" placeholder="Busca un jugador" />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
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
        </div>
      </div>
      <div className="mercado-players-container">
        {playersList.map((player, i) => (
          <div className="mercado-player-section">
            <div className="mercado-player">
              <div className="mercado-player-name">
                {/* <p>{player ? player.name : "cargando..."}</p> */}
                <p key={i}>{player.name}</p>
              </div>
              <div className="mercado-player-stats">
                <div className="mercado-player-stats-item">
                  <i class="fa-solid fa-star"></i> <p>4</p>
                </div>
                <div className="mercado-player-stats-item">
                  <i class="fa-solid fa-money-bill-trend-up"></i> <p>4</p>
                </div>
                <div className="mercado-player-stats-item">
                  <i class="fa-solid fa-futbol"></i> <p>4</p>
                </div>
              </div>
            </div>

            <div className="mercado-players-buttons">
              <button onClick={handleShowConfirmModal}>FICHAR</button>
              <button
                onClick={() => handleShowDetails(player.name, player.team_name)}
              >
                DATOS
              </button>
            </div>
          </div>
        ))}
      </div>

      {showDetails ? (
        <DetalleJugadoresMercado
          handleCloseDetails={handleCloseDetails}
          handleShowConfirmModal={handleShowConfirmModal}
          selectedPlayerName={selectedPlayerName}
          selectedPlayerTeam={selectedPlayerTeam}
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
  );
};

export default JugadoresMercado;
