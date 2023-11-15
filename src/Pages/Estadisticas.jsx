import React, { useState, useEffect } from "react";

//STYLES
import "../Pages/Estadisticas.css";
//COMPONENTS
import Navbar from "../Components/Navbar";
import CardStat from "../Components/CardStat";
import Footer from "../Components/Footer";

const Estadisticas = () => {
  const [playersList, setPlayersList] = useState([]);
  const url =
    "https://footb.onrender.com/v2/player?skip=0&limit=2000&sort_field=id&sort_order=desc";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlayersList(data.data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="estadisticas-container">
        <div className="stats-card-section">
          <CardStat title={"PUNTOS"} playersList={playersList} param={"pts."} />
          <CardStat title={"PRECIO"} playersList={playersList} param={"€"} />
          <CardStat
            title={"GOLES ANOTADOS"}
            playersList={playersList}
            param={"goles"}
          />
          <CardStat
            title={"ASISTENCIAS"}
            playersList={playersList}
            param={"asist."}
          />
          <CardStat
            title={"% PASES"}
            playersList={playersList}
            param={"% pases"}
          />
          <CardStat
            title={"RECUPERACIONES"}
            playersList={playersList}
            param={"recup."}
          />
          <CardStat
            title={"GOLES ENCAJADOS"}
            playersList={playersList}
            param={"goles encaj."}
          />

          <CardStat
            title={"PARTIDOS JUGADOS"}
            playersList={playersList}
            param={"Partidos"}
          />
          <CardStat
            title={"TARJETAS AMARILLAS"}
            playersList={playersList}
            param={"Amarilla"}
          />
          <CardStat
            title={"TARJETAS ROJAS"}
            playersList={playersList}
            param={"Roja"}
          />
          <CardStat
            title={"PARADAS"}
            playersList={playersList}
            param={"Paradas"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Estadisticas;
