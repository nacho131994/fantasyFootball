import React, { useState } from "react";
//STYLES
import "../Pages/Home.css";
//COMPONENTS
import Navbar from "../Components/Navbar";
import JoinALeague from "../Components/JoinALeague";

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
        <h2>¡Bienvenido a FootballFantasy!</h2>
        <h5>NOMBRE DEL EQUIPO</h5>
        <p>naach_32</p>
        <button onClick={handleShowJoinALeagueModal}>UNIRSE A UNA LIGA</button>
        <div className="your-league">
          <h3>NOMBRE DE LA LIGA</h3>
          <div className="your-league-standings">
            <p>CLASIFICACIÓN</p>
            <ul>
              <li>fdfdsfsd</li>
              <li>hngh</li>
              <li>fdfsdf</li>
              <li>jdfjhfg</li>
            </ul>
          </div>
        </div>
      </div>
      {showJoinALeagueModal && (
        <JoinALeague
          handleCloseJoinALeagueModal={handleCloseJoinALeagueModal}
        />
      )}
    </>
  );
};

export default Home;
