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
  });
  return (
    <>
      <div className="plantilla-container">
        <div className="plantilla-header">
          <div className="team-name">
            <h1 className="stadium-name">{userName}</h1>
          </div>
          <div className="team-data">
            <div className="team-data-item">
              <p>
                <i className="fa-solid fa-coins team-data-icons"></i> DINERO:
              </p>
              <p>95479547</p>
            </div>
            <div className="team-data-item">
              <p>
                <i className="fa-solid fa-star team-data-icons"></i> PUNTOS:
              </p>
              <p>95479547</p>
            </div>
            <div className="team-data-item">
              <p>
                <i className="fa-solid fa-money-bill-trend-up team-data-icons"></i>{" "}
                VALOR:
              </p>
              <p>95479547</p>
            </div>
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
