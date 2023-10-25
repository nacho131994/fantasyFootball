import React, { useState } from "react";
//STYLES
import "../Sections/DetalleJugadoresMercado.css";
//MODALS
import ConfirmModal from "../Modals/ConfirmModal";

const DetalleJugadoresMercado = ({ handleCloseDetails }) => {
  return (
    <div className="mercado-body-players-details">
      <div className="player-details-card">
        <section>VINICIUS JR</section>
        <div className="player-info-section">
          <div>
            <img
              src="https://www.realmadrid.com/img/vertical_380px/vinicius_380x501_20230810055554.jpg"
              alt="foto de jugador"
              className="player-picture"
            />
          </div>
          <div className="player-info">
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
          <button>FICHAR</button>
          <button onClick={handleCloseDetails}>CERRAR</button>
        </div>
      </div>
    </div>
  );
};

export default DetalleJugadoresMercado;
