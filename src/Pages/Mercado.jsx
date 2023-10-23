import React from "react";
//STYLES
import "../Pages/Mercado.css";
//COMPONENTS
import Navbar from "../Components/Navbar";
import JugadoresMercado from "../Sections/JugadoresMercado";
import DetalleJugadoresMercado from "../Sections/DetalleJugadoresMercado";
const Mercado = () => {
  return (
    <>
      <Navbar />
      <div className="section-container">
        <div className="current-money">
          <p>DINERO DISPONIBLE</p>
          <p className="money-digits">100000€</p>
        </div>
      </div>
      <div className="mercado-body">
        <JugadoresMercado />
        <DetalleJugadoresMercado />
      </div>
    </>
  );
};

export default Mercado;
