import React, { useState, useEffect } from "react";
import "../Sections/HomeLogged.css";

const HomeLogged = () => {
  const [showTeamCreation, setShowTeamCreation] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [stadiumName, setStadiumName] = useState("");
  const [teamExists, setTeamExists] = useState(false);
  const [teamInfo, setTeamInfo] = useState(null);

  const checkIfUserHasTeam = async () => {
    const response = await fetch("https://footb.onrender.com/v2/team/", {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    });

    if (response.ok) {
      const teamData = await response.json();
      setTeamInfo(teamData);
      setTeamExists(true);
      setShowTeamCreation(false);
    } else {
      setTeamExists(false);
      setShowTeamCreation(true);
    }
  };

  useEffect(() => {
    checkIfUserHasTeam();
  }, []);

  // CREAR EQUIPO
  async function handleCreateTeam(teamName, stadiumName) {
    const response = await fetch(
      `https://footb.onrender.com/v2/team/?name=${teamName}&stadium=${stadiumName}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "",
      }
    );

    if (response.ok) {
      checkIfUserHasTeam();
    }
  }
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
                  {teamName && stadiumName && (
                    <button
                      onClick={() => handleCreateTeam(teamName, stadiumName)}
                    >
                      ACEPTAR
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
        {teamExists && (
          <div className="team-exists-container">
            <div className="team-and-stadium">
              <p>Nombre del equipo:</p>
              <p>{teamInfo.name}</p>
            </div>
            <div className="team-and-stadium">
              <p>Nombre del estadio:</p>
              <p>{teamInfo.stadium}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeLogged;
