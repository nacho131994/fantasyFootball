import React, { useState } from "react";
import "../Components/CardStat.css";

const CardStat = ({ title, filteredPlayers, param }) => {
  const [equipo, setEquipo] = useState([]);
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
        .then((data) => {
          setEquipo([...equipo, player]);
          console.log(`Jugador ${player.name} añadido al equipo.`);
        })
        .catch((error) => {
          console.error("Error al agregar jugador al equipo:", error);
        });
    } else {
      console.log(`El jugador ${player.name} ya está en el equipo.`);
      return;
    }
  };
  return (
    <div className="card-stat-container">
      <div className="card-stat-title">
        <button>+</button>
        {title} <button>-</button>
      </div>
      <div className="card-stat-body">
        <ul>
          {filteredPlayers.map((player, i) => (
            <li key={i}>
              <p>
                <strong className="numeration-stat">{i + 1}.</strong>
                <strong>{player.name}</strong> (
                {player.position_name.slice(0, 3).toUpperCase()})
              </p>
              <p>{param}</p>

              <button onClick={() => addToTeam(player)}>FICHAR</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardStat;
