import React, { useState, useEffect } from "react";
//STYLES
import "../Sections/HomeLogged.css";

const HomeLogged = ({ handleShowJoinALeagueModal }) => {
  return (
    <>
      <div className="home-body">
        <h3>TUS LIGAS</h3>

        <button onClick={handleShowJoinALeagueModal}>Unirse a una liga</button>
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
    </>
  );
};

export default HomeLogged;
