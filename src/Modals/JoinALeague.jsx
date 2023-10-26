import React from "react";
//STYLES
import "../Modals/JoinALeague.css";

const JoinALeague = ({ handleCloseJoinALeagueModal }) => {
  return (
    <div className="join-a-league-modal">
      <div className="join-a-league-container">
        <div className="join-a-league-header">ÚNETE A UNA LIGA</div>
        <div className="join-a-league-credentials">
          <div className="league-name">
            <input type="text" placeholder="Escribe el nombre de la Liga" />
          </div>
          <div className="league-password">
            <input type="password" placeholder="Escribe el código de la Liga" />
          </div>
        </div>

        <div className="join-a-league-buttons">
          <button className="accept-join-button">Unirse</button>
          <button
            className="close-join-button"
            onClick={handleCloseJoinALeagueModal}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinALeague;
