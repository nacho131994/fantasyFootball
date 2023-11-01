import React from "react";
import { Link } from "react-router-dom";
//STYLES
import "../Components/Footer.css";
//IMAGES
import Logo from "../images/footballfantay-logo.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="foto" />
        </div>
        <div className="footer-links">
          <Link to="/sobrenosotros">
            <p>SOBRE NOSOTROS</p>
          </Link>
          <Link to="/contacto">
            <p>CONTACTO</p>
          </Link>
          <Link to="/faq">
            <p>FAQ</p>
          </Link>
          <Link to="/reglas">
            <p>REGLAS</p>
          </Link>
          <Link to="/politicas">
            <p>POLITICAS LEGALES</p>
          </Link>
          <a href="https://www.laliga.com/es-GB" target="_blank">
            <p>LA LIGA</p>
          </a>
        </div>
        <div className="footer-logo-laliga">
          <img src="https://www.fifplay.com/img/public/laliga-logo-white.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
