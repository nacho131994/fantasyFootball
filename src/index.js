import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// STYLES
import "../src/index.css";
// VIEWS
import Home from "./Pages/Home.jsx";
import Plantilla from "./Pages/Pantilla.jsx";
import Estadisticas from "./Pages/Estadisticas.jsx";
import Mercado from "./Pages/Mercado.jsx";
import Reglas from "./Pages/Reglas";
import SobreNosotros from "./Pages/SobreNosotros";
import FAQ from "./Pages/FAQ";
import Politicas from "./Pages/Politicas";
import Contacto from "./Pages/Contacto";
// COMPONENTS
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

const AppContainer = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/estadisticas" element={<Estadisticas />} />
          <Route path="/plantilla" element={<Plantilla />} />
          <Route path="/mercado" element={<Mercado />} />
          <Route path="/reglas" element={<Reglas />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </AppContainer>
      <Footer />
    </Router>
  </React.StrictMode>
);
