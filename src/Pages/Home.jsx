import React, { useState, useEffect } from "react";
import { getUserToken } from "../Utils/Utils";
import { useAuth } from "../Context/AuthContext";

//STYLES
import "../Pages/Home.css";
//COMPONENTS
import NextGames from "../Components/NextGames";
import LaLigaStandings from "../Components/LaLigaStandings";
//SECTIONS
import HomeLogged from "../Sections/HomeLogged";
import HomeNotLogged from "../Sections/HomeNotLogged";

const Home = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(getUserToken() ? true : false);

    console.log(isLogged, "que estas logueado desde home");
  });

  return (
    <>
      <div className="home-container">
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
        </div>
        {isLogged ? (
          <div className="section-container-home">
            <HomeLogged />
          </div>
        ) : (
          <HomeNotLogged />
        )}

        <div className="matchdays-section">
          <div className="matchdays-section-title">
            <img src="https://www.fifplay.com/img/public/laliga-logo-horizontal.png" />
            <h1>RESULTADOS</h1>
          </div>
          <div className="matchdays-and-standings">
            <div className="matchdays-section-body">
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <NextGames
                      className="nextgame"
                      matchWeek={"JORNADA ANTERIOR"}
                      result={"1-0"}
                    />
                  </div>
                  <div class="carousel-item">
                    <NextGames
                      className="nextgame"
                      matchWeek={"SIGUIENTE JORNADA"}
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="classification-section">
              <LaLigaStandings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
