import React, { useState, useEffect } from "react";
//STYLES
import "../Sections/HomeLogged.css";

const HomeLogged = () => {
  const [showTeamCreation, setShowTeamCreation] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [stadiumName, setStadiumName] = useState("");

  useEffect(() => {
    fetch("https://footb.onrender.com/v2/team/", {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    }).then((res) => {
      if (res.ok) {
        setShowTeamCreation(false);
      } else {
        setShowTeamCreation(true);
      }
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "teamName") {
      setTeamName(value);
    } else if (name === "stadiumName") {
      setStadiumName(value);
    }
  };

  return (
    <>
      <div className="create-team-container">
        {showTeamCreation && (
          <>
            <div className="create-team">
              <div className="create-team-title">
                <h1>CREA TU EQUIPO</h1>
              </div>
              <div className="create-team-body">
                <input
                  placeholder="Nombre del Equipo"
                  type="text"
                  name="teamName"
                  value={teamName}
                  onChange={handleInputChange}
                ></input>
                <input
                  placeholder="Nombre del Estadio"
                  type="text"
                  name="stadiumName"
                  value={stadiumName}
                  onChange={handleInputChange}
                ></input>

                <div className="create-team-buttons">
                  {teamName && stadiumName && <button>ACEPTAR </button>}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomeLogged;
