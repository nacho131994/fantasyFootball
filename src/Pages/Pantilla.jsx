import React from "react";
//STYLES
import "../Pages/Plantilla.css";
//COMPONENTS
import Navbar from "../Components/Navbar";
import TuPlantilla from "../Sections/TuPlantilla";
import TuXI from "../Sections/TuXI";
const Plantilla = () => {
  return (
    <>
      <Navbar />
      <div className="plantilla-header">
        <div className="team-name">NOMBRE DE LA PLANTILLA</div>
        <div className="team-data">
          <p>
            <i className="fa-solid fa-coins team-data-icons"></i> DINERO DEL
            EQUIPO:
          </p>
          <p>
            <i className="fa-solid fa-star team-data-icons"></i> PUNTOS DEL
            EQUIPO:
          </p>
          <p>
            <i className="fa-solid fa-money-bill-trend-up team-data-icons"></i>{" "}
            VALOR DEL EQUIPO:
          </p>
        </div>
      </div>

      <div className="plantilla-body">
        <TuPlantilla />
        <TuXI />
      </div>
    </>
  );
};

export default Plantilla;
