import React, { useState, useEffect } from "react";
import { getUserToken } from "../Utils/Utils";
//STYLES
import "../Pages/Plantilla.css";
//COMPONENTS
import TuPlantilla from "../Sections/TuPlantilla";
import TuXI from "../Sections/TuXI";
const Plantilla = () => {
  const [userName, setUserName] = useState("");

  const getUserName = () => {
    fetch("https://footb.onrender.com/v2/team/", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${getUserToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserName(data.stadium);
      })
      .catch((error) => {
        setUserName("Desconocido");
      });
  };

  useEffect(() => {
    getUserName();
    console.log(" estas logueado desde Plantilla");
  });
  return (
    <>
      <div className="plantilla-container">
        <div className="plantilla-header">
          <div className="team-name">
            <h1 className="stadium-name">{userName}</h1>
          </div>
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
      </div>
    </>
  );
};

export default Plantilla;
