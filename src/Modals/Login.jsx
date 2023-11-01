import React, { useState } from "react";
//STYLES
import "../Modals/Login.css";

const Login = ({ handleCloseLogin, handleShowLogedView, showLogedView }) => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleShowRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <div className="login-modal">
      <div className="login-container">
        {showLogedView ? (
          <>
            <div className="login-container-header">CIERRA SESION</div>
            <div className="login-buttons">
              <button
                className="accept-login"
                onClick={() => {
                  handleShowLogedView();
                  handleCloseLogin();
                }}
              >
                ACEPTAR
              </button>
              <button className="close-login" onClick={handleCloseLogin}>
                CANCELAR
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="login-container-header">INICIA SESION</div>
            <div className="login-credentials">
              <div className="user">
                <input type="text" placeholder="Usuario" />
              </div>
              <div className="password">
                <input
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                ></input>
              </div>
            </div>
            <div className="login-buttons">
              <button
                className="accept-login"
                onClick={() => {
                  handleShowLogedView();
                  handleCloseLogin();
                }}
              >
                Entrar
              </button>
              <button className="close-login" onClick={handleCloseLogin}>
                Cerrar
              </button>
            </div>
            <div className="register-section">
              ¿Aún no tienes cuenta?{" "}
              <p onClick={handleShowRegistration}>REGISTRATE</p>
            </div>
          </>
        )}

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
