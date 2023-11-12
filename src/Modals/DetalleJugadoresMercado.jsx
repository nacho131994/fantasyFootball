import React, { useState, useEffect } from "react";
//STYLES
import "../Modals/DetalleJugadoresMercado.css";
//MODALS
import ConfirmModal from "../Modals/ConfirmModal";

const DetalleJugadoresMercado = ({
  handleCloseDetails,
  handleShowConfirmModal,
  selectedPlayerName,
  selectedPlayerTeam,
}) => {
  return (
    <div className="mercado-body-players-details">
      <div className="player-details-card">
        <section>{selectedPlayerName}</section>
        <div className="player-info-section">
          <div className="player-info-section-photo-container"></div>
          <p>{selectedPlayerTeam}</p>
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
