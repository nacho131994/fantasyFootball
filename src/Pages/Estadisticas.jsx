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
          <CardStat
            title={"PARADAS"}
            filteredPlayers={filteredPlayers}
            param={"pts."}
          />
          <CardStat
            title={"PARADA PENALTI"}
            filteredPlayers={filteredPlayers}
            param={"pts."}
          />
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
