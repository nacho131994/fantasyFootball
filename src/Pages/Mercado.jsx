import React from "react";
//STYLES
import "../Pages/Mercado.css";
//COMPONENTS
import Navbar from "../Components/Navbar";
import JugadoresMercado from "../Sections/JugadoresMercado";
import Footer from "../Components/Footer";

const Mercado = () => {
  return (
    <>
      <Navbar />
      <div className="mercado-container">
        <div className="mercado-title">
          <h1>MERCADO DE FICHAJES</h1>
        </div>
      </div>
      <div className="mercado-body">
        <JugadoresMercado />
      </div>
      <Footer />
    </>
  );
};

export default Mercado;
