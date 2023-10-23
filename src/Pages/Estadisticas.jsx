import React from "react";

//STYLES
import "../Pages/Estadisticas.css";
//COMPONENTS
import Navbar from "../Components/Navbar";
import CardStat from "../Components/CardStat";

const Estadisticas = () => {
  return (
    <>
      <Navbar />

      <div className="search-player-stats-section">
        <input type="text" placeholder="Busca un jugador por su nombre" />
        <button>BUSCAR</button>
      </div>
      <div className="stats-card-section">
        <CardStat title={"PUNTOS"} />
        <CardStat title={"PRECIO"} />
        <CardStat title={"GOLES ANOTADOS"} />
        <CardStat title={"ASISTENCIAS"} />
        <CardStat title={"% PASES"} />
        <CardStat title={"RECUPERACIONES"} />
        <CardStat title={"GOLES ENCAJADOS"} />
        <CardStat title={"MINUTOS"} />
        <CardStat title={"PARTIDOS JUGADOS"} />
        <CardStat title={"TARJETAS AMARILLAS"} />
        <CardStat title={"TARJETAS ROJAS"} />
      </div>
    </>
  );
};

export default Estadisticas;
