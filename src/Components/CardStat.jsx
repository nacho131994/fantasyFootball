import React from "react";
//STYLES
import "../Components/CardStat.css";

const CardStat = ({ title }) => {
  return (
    <div className="card-stat-container">
      <div className="card-stat-title">{title} </div>
      <div className="card-stat-body">
        <ul>
          <li>
            <p>nombre</p>
            <p>puntos</p>
            <button>FICHAR</button>
          </li>
          <li>
            <p>nombre</p>
            <p>puntos</p>
            <button>FICHAR</button>
          </li>
          <li>
            <p>nombre</p>
            <p>puntos</p>
            <button>FICHAR</button>
          </li>
          <li>
            <p>nombre</p>
            <p>puntos</p>
            <button>FICHAR</button>
          </li>
          <li>
            <p>nombre</p>
            <p>puntos</p>
            <button>FICHAR</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardStat;
