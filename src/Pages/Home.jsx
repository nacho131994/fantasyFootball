import React, { useState } from "react";
//STYLES
import "../Pages/Home.css";
//COMPONENTS
import Navbar from "../Components/Navbar";
import JoinALeague from "../Components/JoinALeague";
import NextGames from "../Components/NextGames";

const Home = () => {
  const [showJoinALeagueModal, setShowJoinALeagueModal] = useState(false);
  const handleShowJoinALeagueModal = () => {
    setShowJoinALeagueModal(true);
  };
  const handleCloseJoinALeagueModal = () => {
    setShowJoinALeagueModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="section-container-home">
        <div className="home-banner">
          <div className="welcome-banner">
            <img
              src="https://www.comunio.es/images/heroes/es/home-top3-es-04.png"
              className="banner-img"
            />
            <h2>¡Bienvenido a FootballFantasy! </h2>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/LaLiga_EA_Sports_2023_Vertical_Logo.svg/2560px-LaLiga_EA_Sports_2023_Vertical_Logo.svg.png"
              className="banner-img-laliga"
            />
          </div>
          <h5>NOMBRE DEL EQUIPO</h5>
        </div>

        <div className="home-body">
          <h3>TUS LIGAS</h3>

          <button onClick={handleShowJoinALeagueModal}>
            UNIRSE A UNA LIGA
          </button>
        </div>
        <div className="your-league-container">
          <div className="your-league-header">NOMBRE DE LA LIGA</div>
          <div className="your-league-body">
            <p>hola</p>
            <p>hola</p>
            <p>hola</p>
            <p>hola</p>
            <p>hola</p>
            <p>hola</p>
            <p>hola</p>
            <p>hola</p>
          </div>
        </div>
        <div className="matchdays-section">
          <div className="matchdays-section-title">
            <h1>JORNADAS</h1>
          </div>
          <div className="matchdays-section-body">
            <NextGames matchWeek={"JORNADA ANTERIOR"} result={"1-0"} />
            <NextGames matchWeek={"SIGUIENTE JORNADA"} />
          </div>
        </div>
        {showJoinALeagueModal && (
          <JoinALeague
            handleCloseJoinALeagueModal={handleCloseJoinALeagueModal}
          />
        )}
      </div>
    </>
  );
};

export default Home;
