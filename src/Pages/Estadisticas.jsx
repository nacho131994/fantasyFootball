import React, { useState, useEffect } from "react";
//STYLES
import "../Pages/Estadisticas.css";
//COMPONENTS
import CardStat from "../Components/CardStat";

const Estadisticas = () => {
  const [playersList, setPlayersList] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState("");

  const url =
    "https://footb.onrender.com/v2/player?skip=0&limit=2000&sort_field=id&sort_order=desc";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlayersList(data.data);
      });
  }, []);

  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };

  const filteredPlayers = selectedPosition
    ? playersList.filter((player) => player.position_name === selectedPosition)
    : playersList;

  const counter = 1;
  return (
    <>
      <div className="estadisticas-container">
        <div className="estadisticas-dropdown">
          <select
            placeholder=""
            value={selectedPosition}
            onChange={handlePositionChange}
          >
            <option disabled>Filtrar por...</option>
            <option value="">Todos los jugadores</option>
            <option value="Portero">Porteros</option>
            <option value="Defensa">Defensas</option>
            <option value="Centrocampista">Centrocampistas</option>
            <option value="Delantero">Delanteros</option>
          </select>
        </div>
        <div className="stats-card-section">
          <CardStat
            title={"PUNTOS"}
            filteredPlayers={filteredPlayers}
            param={"pts."}
            counter={counter}
          />
          <CardStat
            title={"PRECIO"}
            filteredPlayers={filteredPlayers}
            param={"pts."}
          />
          <CardStat
            title={"GOLES"}
            filteredPlayers={filteredPlayers}
            param={"pts."}
          />
          <CardStat
            title={"ASISTENCIAS"}
            filteredPlayers={filteredPlayers}
            param={"pts."}
          />
          <div className="card-stat-container">
            <div className="card-stat-title">
              <button>+</button>
              PARADAS <button>-</button>
            </div>
            <div className="card-stat-body">
              <ul>
                {filteredPlayers
                  .filter((player) => player.position_name === "Portero")
                  .map((player, i) => (
                    <li key={i}>
                      <p>
                        <strong className="numeration-stat">{i + 1}.</strong>
                        <strong>{player.name}</strong> (
                        {player.position_name.slice(0, 3).toUpperCase()})
                      </p>
                      <p>Paradas</p>
                      <button>FICHAR</button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="card-stat-container">
            <div className="card-stat-title">
              <button>+</button>
              PARADAS PENALTI <button>-</button>
            </div>
            <div className="card-stat-body">
              <ul>
                {filteredPlayers
                  .filter((player) => player.position_name === "Portero")
                  .map((player, i) => (
                    <li key={i}>
                      <p>
                        <strong className="numeration-stat">{i + 1}.</strong>
                        <strong>{player.name}</strong> (
                        {player.position_name.slice(0, 3).toUpperCase()})
                      </p>
                      <p>Par. Penalti</p>
                      <button>FICHAR</button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <CardStat
            title={"ASISTENCIAS"}
            filteredPlayers={filteredPlayers}
            param={"pts."}
          />
          <CardStat
            title={"PARTIDOS JUGADOS"}
            filteredPlayers={filteredPlayers}
            param={"pts."}
          />
          <CardStat
            title={"TARETAS ROJAS"}
            filteredPlayers={filteredPlayers}
            param={"pts."}
          />
        </div>
      </div>
    </>
  );
};

export default Estadisticas;
