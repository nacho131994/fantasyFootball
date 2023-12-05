import React, { useState } from "react";
//STYLES
import "../Pages/Mercado.css";
//COMPONENTS
import JugadoresMercado from "../Sections/JugadoresMercado";

const Mercado = () => {
  return (
    <>
      <div className="mercado-container">
        <div className="mercado-title">
          <h1>MERCADO DE FICHAJES</h1>
        </div>
      </div>
      <div className="mercado-body">
        <JugadoresMercado />
      </div>
    </>
  );
};

export default Mercado;
