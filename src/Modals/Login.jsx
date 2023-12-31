import React, { useState } from "react";
//STYLES
import "../Modals/Login.css";

const Login = ({ handleCloseLogin, isLogged }) => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [showRegistrationMessage, setShowRegistrationMessage] = useState("");
  const [showRegistrationMessageClass, setShowRegistrationMessageClass] =
    useState("");
  const [loginError, setLoginError] = useState("");

  // Mostrar formulario de registro
  const handleShowRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  // Obtener el token de autentificación
  async function getUserToken() {
    const res = fetch("https://footb.onrender.com/v2/user/token", {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: new URLSearchParams({
        grant_type: "",
        username: username,
        password: password,
        scope: "",
        client_id: "",
        client_secret: "",
      }),
    })
      .then((res) => res.json())
      .then((d) => {
        localStorage.setItem("token", JSON.stringify(d));
      });
  }

  // Registrar un nuevo usuario
  async function registerNewUser(name, user, pass) {
    const newUserUrl = `https://footb.onrender.com/v2/user/register?name=${name}&username=${user}&password=${pass}`;
    const response = await fetch(newUserUrl, {
      method: "POST",
    });

    setIsRegistered(true);
    setUsername("");
    setPassword("");
    setName("");

    if (response.status === 406) {
      // REGISTRO FALLIDO
      setShowRegistration(false);
      setShowRegistrationMessage(
        "Usuario ya existente. Elige otro nombre de usuario"
      );
      setShowRegistrationMessageClass("registration-error");
      setTimeout(() => {
        setShowRegistrationMessage("");
        setShowRegistrationMessageClass("");
      }, 3000);
    } else if (response.status !== 406) {
      // REGISTRO EXITOSO
      getUserToken();
      setShowRegistrationMessage("Te has registrado con éxito");
      setShowRegistrationMessageClass("registration-success");
      setShowRegistration(false);

      setTimeout(() => {
        setIsRegistered(false);
        setShowRegistrationMessage("");
        setShowRegistrationMessageClass("");
      }, 3000);
    }

    return response.json();
  }

  //cerrar mensajes de registro

  // Iniciar Sesión : LOGIN
  async function handleLogin(loginUsername, loginPassword) {
    const loginUrl = "https://footb.onrender.com/v2/user/token";
    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "password",
          username: loginUsername,
          password: loginPassword,
          client_id: "",
          client_secret: "",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", JSON.stringify(data.access_token));

        handleCloseLogin();
      } else {
        const errorData = await response.json();
        setLoginError("usuario y/o contraseña incorrectos");

        setTimeout(() => {
          setLoginError("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      setLoginError("Error al iniciar sesión. Inténtalo de nuevo más tarde.");

      setTimeout(() => {
        setLoginError("");
      }, 3000);
    }
  }
  // Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="login-modal">
      <div className="login-container">
        {isLogged ? (
          <>
            <div className="login-container-header">CIERRA SESION</div>
            <div className="login-buttons">
              <button
                className="accept-login"
                onClick={() => {
                  handleLogout();
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
                <input
                  type="text"
                  placeholder="Usuario"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
              </div>
              <div className="password">
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="login-buttons">
              <button
                className="accept-login"
                onClick={() => handleLogin(loginUsername, loginPassword)}
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
              <div className="user-password">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="user-username">
                <input
                  type="text"
                  placeholder="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="user-password">
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
        {loginError && <div className="login-error-message">{loginError}</div>}
      </div>
    </div>
  );
};

export default Login;
