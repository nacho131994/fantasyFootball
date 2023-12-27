import React, { useState } from "react";
import "../Components/CardStat.css";

const CardStat = ({ title, filteredPlayers, param }) => {
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
              <p>{player.id}</p>
              <button>FICHAR</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardStat;
