import React from "react";
//STYLES
import "../Components/NextGames.css";

const NextGames = ({ result, matchWeek }) => {
  return (
    <>
      <div className="next-games-container">
        <div className="next-games-header">
          <div className="next-games-header-logos">
            <p> {matchWeek}</p>
            <img
              className="laliga-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/LaLiga_2023_Horizontal_Logo.svg/1200px-LaLiga_2023_Horizontal_Logo.svg.png"
            />
          </div>
        </div>

        <div className="next-games-body">
          <div className="column">
            <p className="match">
              <img src="https://classic.comunio.es/clubImg.phtml/97.gif?size=40" />
              <p className="result-match">{result}</p>
              <img src="https://classic.comunio.es/clubImg.phtml/5.gif?size=40" />
            </p>

            <p className="match">
              <img src="https://classic.comunio.es/clubImg.phtml/22.gif?size=40" />
              <p className="result-match">{result}</p>
              <img src="https://classic.comunio.es/clubImg.phtml/87.gif?size=40" />
            </p>
            <p className="match">
              <img src="https://classic.comunio.es/clubImg.phtml/3.gif?size=40" />
              <p className="result-match">{result}</p>
              <img src="https://classic.comunio.es/clubImg.phtml/15.gif?size=40" />
            </p>
            <p className="match">
              <img src="https://classic.comunio.es/clubImg.phtml/11.gif?size=40" />
              <p className="result-match">{result}</p>
              <img src="https://classic.comunio.es/clubImg.phtml/8.gif?size=40" />
            </p>
            <p className="match">
              <img src="https://classic.comunio.es/clubImg.phtml/105.gif?size=40" />
              <p className="result-match">{result}</p>
              <img src="https://classic.comunio.es/clubImg.phtml/17.gif?size=40" />
            </p>
          </div>
          <div className="column">
            <p className="match">
              <img src="https://classic.comunio.es/clubImg.phtml/4.gif?size=40" />
              <p className="result-match">{result}</p>
              <img src="https://classic.comunio.es/clubImg.phtml/12.gif?size=40" />
            </p>
            <p className="match">
              <img src="https://classic.comunio.es/clubImg.phtml/70.gif?size=40" />
              <p className="result-match">{result}</p>
              <img src="https://classic.comunio.es/clubImg.phtml/13.gif?size=40" />
            </p>
            <p className="match">
              <img src="https://classic.comunio.es/clubImg.phtml/1.gif?size=40" />
              <p className="result-match">{result}</p>
              <img src="https://classic.comunio.es/clubImg.phtml/18.gif?size=40" />
            </p>
            <p className="match">
              <img src="https://classic.comunio.es/clubImg.phtml/2.gif?size=40" />
              <p className="result-match">{result}</p>
              <img src="https://classic.comunio.es/clubImg.phtml/89.gif?size=40" />
            </p>
            <p className="match">
              <img src="https://classic.comunio.es/clubImg.phtml/71.gif?size=40" />
              <p className="result-match">{result}</p>
              <img src="https://classic.comunio.es/clubImg.phtml/19.gif?size=40" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextGames;
