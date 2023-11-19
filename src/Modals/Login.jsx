import React, { useEffect, useState } from "react";
//STYLES
import "../Modals/Login.css";

const Login = ({ handleCloseLogin, handleShowLogedView, showLogedView }) => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [showRegistrationMessage, setShowRegistrationMessage] = useState("");
  const [showRegistrationMessageClass, setShowRegistrationMessageClass] =
    useState("");

  //Mostrar formulario de registro
  const handleShowRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  //obtener el token de autentificación
  async function getUserToken() {
    const res = fetch("https://footb.onrender.com/v2/user/token", {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: new URLSearchParams({
        grant_type: "",
        username: "nacho_13",
        password: "footballFantasy",
        scope: "",
        client_id: "",
        client_secret: "",
      }),
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        localStorage.setItem("token", JSON.stringify(d));
      });
  }

  //Registrar un nuevo usuario
  async function registerNewUser(name, user, pass) {
    const newUserUrl = `https://footb.onrender.com/v2/user/register?name=${name}&username=${user}&password=${pass}`;
    const response = await fetch(newUserUrl, {
      method: "POST",
    });
    console.log(newUserUrl);
    setIsRegistered(true);

    if (response.status === 406) {
      setShowRegistrationMessage(
        "usuario ya existente. Elige otro nombre de usuario"
      );
      setShowRegistrationMessageClass("registration-error"); // Nueva línea
    } else if (response.status !== 406) {
      setShowRegistrationMessage("Te has registrado con éxito");
      setShowRegistrationMessageClass("registration-success"); // Nueva línea
      setShowRegistration(false);
    }
    return response.json();
  }

  // //Loguearse
  // const handleLogin=()=>{

  // }
  //Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token");
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
                  handleLogout();
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
              <button onClick={getUserToken}>fndisfs</button>
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
              <div className="user-password">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="user-username">
                <input
                  type="text"
                  placeholder="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div className="user-password">
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="login-buttons registration-buttons">
              {name && username && password ? (
                <button
                  className="accept-login"
                  onClick={() => {
                    registerNewUser(name, username, password);
                  }}
                >
                  Registrar
                </button>
              ) : null}
              <button className="close-login" onClick={handleCloseLogin}>
                Cerrar
              </button>
            </div>
          </>
        )}
        {isRegistered && (
          <div
            className={`registration-message ${showRegistrationMessageClass}`}
          >
            {showRegistrationMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
