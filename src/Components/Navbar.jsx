import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
//MODALS
import Login from "../Modals/Login.jsx";
//STYLES
import "../Components/Navbar.css";
//IMAGES
import Logo from "../images/footballfantay-logo.png";

const Navbar = ({ handleShowLogedView, showLogedView }) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <nav className="navbar navbar-expand-lg  bg-dark ">
      <div className="container-fluid">
        <div className="branding">
          <div className="footballfantasy-logo">
            <img src={Logo} />
          </div>
          <div className="branding-name-and-ligalogo">
            <a className="navbar-brand ">
              <strong>Football</strong>
              <em>Fantasy.</em>
            </a>
            <img
              className="laliga-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/LaLiga_2023_Horizontal_Logo.svg/1200px-LaLiga_2023_Horizontal_Logo.svg.png"
            />
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to="/" className="nav-link active " aria-current="page">
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/mercado"
                className="nav-link active  clickable"
                aria-current="page"
              >
                MERCADO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/plantilla"
                className="nav-link active  clickable"
                aria-current="page"
              >
                PLANTILLA
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link
                to="/estadisticas"
                className="nav-link active  clickable"
                aria-current="page"
              >
                ESTADÍSTICAS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/reglas"
                className="nav-link active"
                aria-current="page"
              >
                REGLAS
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <button
              type="button"
              className="login-button"
              onClick={handleShowLogin}
            >
              {showLogedView ? "CERRAR SESION" : "INICIAR SESIÓN"}
            </button>
          </form>
        </div>
      </div>

      {showLogin &&
        ReactDOM.createPortal(
          <Login
            handleCloseLogin={handleCloseLogin}
            handleShowLogedView={handleShowLogedView}
            showLogedView={showLogedView}
          />,
          document.body
        )}
    </nav>
  );
};

export default Navbar;
