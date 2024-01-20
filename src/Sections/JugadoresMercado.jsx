import React, { useState, useEffect } from "react";

import "../Sections/JugadoresMercado.css";
import DetalleJugadoresMercado from "../Modals/DetalleJugadoresMercado.jsx";

const JugadoresMercado = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [playersList, setPlayersList] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({
    name: "",
    team: "",
    position: "",
  });
  const [selectedPosition, setSelectedPosition] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [playerPrice, setPlayerPrice] = useState("");
  const [equipo, setEquipo] = useState([]);

  //-----------------------Mostrar detalles del jugador seleccionado-----------------------
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

  //-----------------------Añadir jugadores al equipo (fichar)-----------------------
  const addToTeam = (player) => {
    if (!equipo.some((p) => p.id === player.id)) {
      const addPlayerUrl = `https://footb.onrender.com/v2/team/add_player?player_id=${player.id}`;

      fetch(addPlayerUrl, {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "",
      })
        .then((res) => res.json())
        .then(setEquipo([...equipo, player]))
        .catch((error) => {
          console.error("Error al agregar jugador al equipo:", error);
        });
    } else {
      console.log(`El jugador ${player.name} ya está en el equipo.`);
      return;
    }
  };

  //-----------------------Mostrar todos los jugadores de la DB-----------------------
  const listPlayersUrl =
    "https://footb.onrender.com/v2/player?skip=0&limit=2000&sort_field=id&sort_order=desc";
  useEffect(() => {
    fetch(listPlayersUrl)
      .then((res) => res.json())
      .then((data) => {
        setPlayersList(data.data);
      });
  }, []);

  //-----------------------Mostrar el precio de cada jugador de la DB-----------------------
  const pricePlayerUrl = "https://footb.onrender.com/v2/price/";
  useEffect(() => {
    fetch(pricePlayerUrl)
      .then((res) => res.json())
      .then((data) => {
        setPlayerPrice(data.price);
      });
  }, []);

  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchByName(e.target.value);
  };

  const filteredPlayers =
    selectedPosition === "Cualquier posición"
      ? playersList
      : playersList.filter(
          (player) => player.position_name === selectedPosition
        );

  const filteredPlayersBySearchName = filteredPlayers.filter((player) =>
    player.name.toLowerCase().includes(searchByName.toLowerCase())
  );

  return (
    <div className="mercado-body-players">
      <div className="current-money">
        <p>DINERO DISPONIBLE:</p>
        <p className="current-money-digits">4342342€</p>
      </div>
      <div className="players-list-section">
        <div
          className={
            showDetails ? "players-searcher-details-opened" : "players-searcher"
          }
        >
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

            <div
              className={
                showDetails
                  ? "mercado-players-container-details-opened"
                  : "mercado-players-container"
              }
            >
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
                    <button onClick={() => handleShowDetails(player)}>
                      DATOS
                    </button>
                    <button onClick={() => addToTeam(player)}>FICHAR</button>
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
          selectedPlayer={selectedPlayer}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default JugadoresMercado;
