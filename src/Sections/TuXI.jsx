import React from "react";
//STYLES
import "../Sections/TuXI.css";
//IMAGES
import Pitch from "../images/pizarra.jpg";

const TuXI = () => {
  return (
    <div className="tuxi-body">
      <select>
        <option value="" disabled selected>
          Elije un esquema
        </option>
        <option value="opcion1" className="option">
          1-4-4-2
        </option>
        <option value="opcion2">1-4-3-3</option>
        <option value="opcion3">1-4-2-3-1</option>
        <option value="opcion4">1-3-4-3</option>
        <option value="opcion5">1-5-3-2</option>
      </select>

      <div className="football-pitch-section">
        <img src={Pitch} />
      </div>
      <div className="tuxi-button-section">
        <div className="tuxi-time-remaining">
          <i className="fa-solid fa-triangle-exclamation"></i>
          <p>CONFIRMAR EN:</p>
          <p>2d 3h 54m</p>
        </div>
        <div className="tuxi-button-section-button">
          <button> GUARDAR</button>
        </div>
      </div>
    </div>
  );
};

export default TuXI;
