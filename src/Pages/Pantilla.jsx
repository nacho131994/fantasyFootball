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
      <h1 className="team-name">NOMBRE DE LA PLANTILLA</h1>
      <div className="plantilla-body">
        <TuPlantilla />
        <TuXI />
      </div>
    </>
  );
};

export default Plantilla;
