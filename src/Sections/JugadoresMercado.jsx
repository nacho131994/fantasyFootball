import React, { useState, useEffect } from "react";

//STYLES
import "../Sections/JugadoresMercado.css";
//MODALS
import DetalleJugadoresMercado from "../Modals/DetalleJugadoresMercado.jsx";
import ConfirmModal from "../Modals/ConfirmModal";

const JugadoresMercado = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [playersList, setPlayersList] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({
    name: "",
    team: "",
    position: "",
  });
  const [selectedPosition, setSelectedPosition] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [playerPrice, setPlayerPrice] = useState("");

  const handleShowDetails = (player) => {
    setSelectedPlayer({
      name: player.name,
      team: player.team_name,
      position: player.position_name,
    });

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

  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchByName(e.target.value);
  };

  const listPlayersUrl =
    "https://footb.onrender.com/v2/player?skip=0&limit=2000&sort_field=id&sort_order=desc";
  useEffect(() => {
    fetch(listPlayersUrl)
      .then((res) => res.json())
      .then((data) => {
        setPlayersList(data.data);
      });
  }, []);

  const pricePlayerUrl = "https://footb.onrender.com/v2/price/";
  useEffect(() => {
    fetch(pricePlayerUrl)
      .then((res) => res.json())
      .then((data) => {
        setPlayerPrice(data.price);
        console.log(data.price);
      });
  }, []);

  const filteredPlayers =
    selectedPosition === "Cualquier posición"
      ? playersList
      : playersList.filter(
          (player) => player.position_name === selectedPosition
        );

  const filteredPlayersBySearchName = filteredPlayers.filter((player) =>
    player.name.toLowerCase().startsWith(searchByName.toLowerCase())
  );

  return (
    <div className="mercado-body-players">
      <div className="current-money">
        <p>DINERO DISPONIBLE:</p>
        <p className="current-money-digits">4342342€</p>
      </div>

      <div className="players-list-section">
        <div className="players-searcher">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Busca al jugador por su nombre"
              value={searchByName}
              onChange={handleSearchChange}
            />
          </div>
          <select
            placeholder=""
            value={selectedPosition}
            onChange={handlePositionChange}
          >
            <option value="" disabled>
              Buscar por posición
            </option>
            <option value="Cualquier posición">Todos los jugadores</option>
            <option value="Portero">Portero</option>
            <option value="Defensa">Defensa</option>
            <option value="Centrocampista">Centrocampista</option>
            <option value="Delantero">Delantero</option>
          </select>

          <select placeholder="">
            <option value="" disabled selected>
              Filtrar por...
            </option>
            <option value="opcion1">Todos los jugadores</option>
            <option value="Mayor precio">Mayor precio </option>
            <option value="Menor precio">Menor precio </option>
            <option value="Mayor puntuacion">Mayor puntuacion </option>
            <option value="Menor puntuacion">Menor puntuacion</option>
          </select>
        </div>
        {filteredPlayersBySearchName.length === 0 ? (
          <p className="no-results-container">no hay resultados</p>
        ) : (
          <>
            <p className="position-selected">
              {selectedPosition}

              <span className="position-selected-counter">
                {filteredPlayersBySearchName.length} jugadores
              </span>
            </p>
            <div className="mercado-players-container">
              {filteredPlayersBySearchName.map((player, i) => (
                <div className="mercado-player-section" key={i}>
                  <div className="numeration-container">
                    <div className="numeration">
                      <p>{i + 1}</p>
                    </div>
                  </div>

                  <div className="mercado-player">
                    <div className="mercado-player-name">
                      <p>{player.name}</p>
                    </div>
                    <div className="mercado-player-stats">
                      <div className="mercado-player-stats-item">
                        <i className="fa-solid fa-star"></i> <p>4</p>
                      </div>
                      <div className="mercado-player-stats-item">
                        <i className="fa-solid fa-money-bill-trend-up"></i>{" "}
                        <p>{playerPrice}</p>
                      </div>
                      <div className="mercado-player-stats-item">
                        <i className="fa-solid fa-futbol"></i> <p>4</p>
                      </div>
                    </div>
                  </div>
                  <div className="mercado-players-buttons">
                    <button onClick={handleShowConfirmModal}>FICHAR</button>
                    <button onClick={() => handleShowDetails(player)}>
                      DATOS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {showDetails ? (
        <DetalleJugadoresMercado
          handleCloseDetails={handleCloseDetails}
          handleShowConfirmModal={handleShowConfirmModal}
          selectedPlayer={selectedPlayer}
        />
      ) : (
        ""
      )}
      {showConfirmModal ? (
        <ConfirmModal
          handleCloseConfirmModal={handleCloseConfirmModal}
          action={"FICHAR"}
          playerPrice={playerPrice}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default JugadoresMercado;
