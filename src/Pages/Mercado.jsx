import React from "react";
//STYLES
import "../Pages/Mercado.css";
//COMPONENTS
import Navbar from "../Components/Navbar";
import JugadoresMercado from "../Sections/JugadoresMercado";

const Mercado = () => {
  return (
    <>
      <Navbar />
      <div className="mercado-container">
        <div className="current-money">
          <p>DINERO DISPONIBLE</p>
          <p className="money-digits">100000€</p>
        </div>
      </div>
      <div className="mercado-body">
        <JugadoresMercado />
      </div>
    </>
  );
};

export default Mercado;
