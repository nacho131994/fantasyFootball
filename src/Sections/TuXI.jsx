import React from "react";
//STYLES
import "../Sections/TuXI.css";

const TuXI = () => {
  return (
    <div className="tuxi-body">
      <h1>TU 11</h1>
      <select>
        <option value="" disabled selected>
          Elije un esquema
        </option>
        <option value="opcion1">1-4-4-2</option>
        <option value="opcion2">1-4-3-3</option>
        <option value="opcion3">1-4-2-3-1</option>
        <option value="opcion4">1-3-4-3</option>
        <option value="opcion5">1-5-3-2</option>
      </select>
      <div className="football-pitch-section">
        <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/8387.png" />
      </div>
      <div className="tuxi-button-section">
        <div className="remaining-time">
          <p>Tiempo restante:</p>
          <p className="timer">1 dia 2 h 54 min</p>
        </div>

        <button> GUARDAR</button>
      </div>
    </div>
  );
};

export default TuXI;
