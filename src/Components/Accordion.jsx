import React, { useState, useEffect } from "react";
//STYLES
import "../Components/Accordion.css";

const Accordion = () => {
  const [yourTeam, setYourTeam] = useState([]);

  //-----------------------traer jugadores del equipo-----------------------
  useEffect(() => {
    fetch("https://footb.onrender.com/v2/team/players", {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setYourTeam(data);
      })
      .catch((error) => {
        console.error("Error al obtener jugadores del equipo:", error);
      });
  }, []);

  //-----------------------vender jugadores del equipo-----------------------
  const handleSellPlayer = async (playerId) => {
    try {
      await fetch(
        `https://footb.onrender.com/v2/team/player?player_id=${playerId}`,
        {
          method: "DELETE",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      setYourTeam((prevYourTeam) =>
        prevYourTeam.filter((player) => player.id !== playerId)
      );
    } catch (error) {
      console.error("Error al vender jugador:", error);
    }
  };

  return (
    <>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              PORTEROS
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              {yourTeam.length === 0 ||
              !yourTeam.some((player) => player.position_name === "Portero") ? (
                <p className="no-players-in-team-message">
                  No tienes porteros en tu equipo.
                </p>
              ) : (
                yourTeam.map((player, i) => {
                  if (player.position_name === "Portero") {
                    return (
                      <div className="player-by-position-info" key={i}>
                        <p>
                          <strong>{player.name}</strong>
                        </p>
                        <p>{player.id}</p>
                        <p>250pts</p>
                        <p>30000€</p>
                        <div className="player-button-section">
                          <button>ALINEAR</button>
                          <button onClick={() => handleSellPlayer(player.id)}>
                            VENDER
                          </button>
                        </div>
                      </div>
                    );
                  }
                })
              )}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              DEFENSAS
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              {yourTeam.length === 0 ||
              !yourTeam.some((player) => player.position_name === "Defensa") ? (
                <p className="no-players-in-team-message">
                  No tienes Defensas en tu equipo.
                </p>
              ) : (
                yourTeam.map((player, i) => {
                  if (player.position_name === "Defensa") {
                    return (
                      <div className="player-by-position-info" key={i}>
                        <p>
                          <strong>{player.name}</strong>
                        </p>
                        <p>{player.id}</p>
                        <p>250pts</p>
                        <p>30000€</p>
                        <div className="player-button-section">
                          <button>ALINEAR</button>
                          <button onClick={() => handleSellPlayer(player.id)}>
                            VENDER
                          </button>
                        </div>
                      </div>
                    );
                  }
                })
              )}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              CENTROCAMPISTAS
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              {yourTeam.length === 0 ||
              !yourTeam.some(
                (player) => player.position_name === "Centrocampista"
              ) ? (
                <p className="no-players-in-team-message">
                  No tienes Centrocampistas en tu equipo.
                </p>
              ) : (
                yourTeam.map((player, i) => {
                  if (player.position_name === "Centrocampista") {
                    return (
                      <div className="player-by-position-info" key={i}>
                        <p>
                          <strong>{player.name}</strong>
                        </p>
                        <p>{player.id}</p>
                        <p>250pts</p>
                        <p>30000€</p>
                        <div className="player-button-section">
                          <button>ALINEAR</button>
                          <button onClick={() => handleSellPlayer(player.id)}>
                            VENDER
                          </button>
                        </div>
                      </div>
                    );
                  }
                })
              )}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseFour"
            >
              DELANTEROS
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              {yourTeam.length === 0 ||
              !yourTeam.some(
                (player) => player.position_name === "Delantero"
              ) ? (
                <p className="no-players-in-team-message">
                  No tienes Delanteros en tu equipo.
                </p>
              ) : (
                yourTeam.map((player, i) => {
                  if (player.position_name === "Delantero") {
                    return (
                      <div className="player-by-position-info" key={i}>
                        <p>
                          <strong>{player.name}</strong>
                        </p>
                        <p>{player.id}</p>
                        <p>250pts</p>
                        <p>30000€</p>
                        <div className="player-button-section">
                          <button>ALINEAR</button>
                          <button onClick={() => handleSellPlayer(player.id)}>
                            VENDER
                          </button>
                        </div>
                      </div>
                    );
                  }
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
