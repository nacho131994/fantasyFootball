import React, { useState } from "react";
//STYLES
import "../Modals/Login.css";
import { Form } from "react-router-dom";

const Login = ({ handleCloseLogin }) => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleShowRegistration = () => {
    setShowRegistration(!showRegistration);
  };
  return (
    <div className="login-modal">
      <div className="login-container">
        <div className="login-container-header">INICIA SESION</div>
        <div className="login-credentials">
          <div className="user">
            <input type="text" placeholder="Usuario" />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Contraseña"
              autocomplete="off"
            ></input>
          </div>
        </div>

        <div className="login-buttons">
          <button className="accept-login">Entrar</button>
          <button className="close-login" onClick={handleCloseLogin}>
            Cerrar
          </button>
        </div>
        <div className="register-section">
          ¿Aún no tienes cuenta?{" "}
          <p onClick={handleShowRegistration}>REGISTRATE</p>
        </div>
        {showRegistration && (
          <>
            <div className="registration-body">
              <div className="user-username">
                <input type="text" placeholder="Usuario"></input>
              </div>
              <div className="user-password">
                <input type="password" placeholder="Contraseña"></input>
              </div>
              <div className="club-name">
                <input type="text" placeholder="Nombre del Equipo"></input>
              </div>
            </div>
            <div className="login-buttons registration-buttons">
              <button className="accept-login">Registrar</button>
              <button className="close-login" onClick={handleCloseLogin}>
                Cerrar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
