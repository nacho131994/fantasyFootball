import React, { useState } from "react";
//STYLES
import "../Modals/Login.css";
import { Form } from "react-router-dom";

const Login = ({ handleCloseLogin }) => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleShowRegistration = () => {
    setShowRegistration(true);
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
            <input type="password" placeholder="Contraseña" />
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
                <p>Usuario:</p>
                <input type="text"></input>
              </div>
              <div className="user-password">
                <p>Contraseña:</p>
                <input type="password"></input>
              </div>
              <div className="club-name">
                <p>Nombre del equipo:</p>
                <input type="text"></input>
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
