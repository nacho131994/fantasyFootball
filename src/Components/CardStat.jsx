import React from "react";
//STYLES
import "../Components/CardStat.css";

const CardStat = ({ title }) => {
  return (
    <div className="card-stat-container">
      <div className="card-stat-title">
        <span className="plus">
          <i class="fa-solid fa-up-long"></i>
        </span>{" "}
        {title}{" "}
        <span className="minus">
          <i class="fa-solid fa-down-long"></i>
        </span>{" "}
      </div>
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
