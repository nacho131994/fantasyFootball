import React, { useState, useEffect } from "react";
//STYLES
import "../Modals/DetalleJugadoresMercado.css";
//MODALS
import ConfirmModal from "../Modals/ConfirmModal";

const DetalleJugadoresMercado = ({
  handleCloseDetails,
  handleShowConfirmModal,
  player,
}) => {
  return (
    <div className="mercado-body-players-details">
      <div className="player-details-card">
        <section>
          {player ? player.name : "Nombre del jugador no disponible"}
        </section>
        <div className="player-info-section">
          <div className="player-info-section-photo-container">
            <img
              src="https://www.sevillafc.es/sites/default/files/team_players/profiles/Januzaj.png"
              alt="foto de jugador"
              className="player-picture"
            />
            <p>{player ? player.team_name : "no found"}</p>
            <img
              className="team-badge"
              src={
                player.team_name.includes("Sevilla")
                  ? "https://seeklogo.com/images/S/sevilla-fc-logo-0D80FA88A5-seeklogo.com.png"
                  : null
              }
            />
            <p>{player ? player.position_name : "no found"}</p>
          </div>
          {player.position_name.includes("Portero") ? (
            <div className="player-info">
              <p>PARTIDOS JUGADOS:</p>
              <p>GOLES ANOTADOS:</p>
              <p>ASISTENCIAS:</p>
              <p>PASES ACERTADOS PP:</p>
              <p>PASES FALLADOS PP:</p>
              <p>RECUPERACIONES:</p>
              <p>GOL PENALTI:</p>
              <p>FALTA REALIZADA:</p>
              <p>TARJETA ROJA:</p>
              <p>TARJETA AMARILLA:</p>
              <p>PARADAS:</p>
              <p>PARADAS PENALTI:</p>
              <p>PENALTI REALIZADO:</p>
              <p>GOL ENCAJADO:</p>
            </div>
          ) : (
            <div className="player-info">
              <p>PARTIDOS JUGADOS:</p>
              <p>GOLES ANOTADOS:</p>
              <p>ASISTENCIAS:</p>
              <p>RECUPERACIONES:</p>
              <p>GOL PENALTI:</p>
              <p>TARJETA ROJA:</p>
              <p>TARJETA AMARILLA:</p>
              <p>PENALTI REALIZADO:</p>
            </div>
          )}
        </div>
        <div className="player-info-button-section">
          <button onClick={handleShowConfirmModal}>FICHAR</button>
          <button onClick={handleCloseDetails}>CERRAR</button>
        </div>
      </div>
    </div>
  );
};

export default DetalleJugadoresMercado;
