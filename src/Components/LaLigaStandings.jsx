import React, { useState, useEffect } from "react";
// STYLES
import "../Components/LaLigaStandings.css";

const LaLigaStandings = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    fetch("https://footb.onrender.com/v2/standing", {
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStandings(data.data.reverse());
        console.log(data, "data de los standings");
      });
  }, []);
  const getRankColor = (rank) => {
    if (rank <= 4) {
      return "blue-background";
    } else if (rank === 5) {
      return "orange-background";
    } else if (rank === 6) {
      return "green-background";
    } else if (rank >= 18 && rank <= 20) {
      return "red-background";
    } else {
      return ""; // Puedes ajustar esto según tus necesidades
    }
  };
  return (
    <>
      <div className="standings-section">
        <div className="standings-title">
          <p>Clasificación</p>
        </div>
        <div className="standings-body">
          <div className="categories">
            <p>PTS</p>
            <p>PJ</p>
            <p>PG</p>
            <p>PE</p>
            <p>PP</p>
            <p>DG</p>
          </div>
          {standings.map((item, i) => (
            <div className="standings-data" key={i}>
              <div className="standing-team-rank">
                <p>{item.rank}</p>
              </div>
              <div className="standing-team-results">
                <p className={`standing-team-name ${getRankColor(item.rank)}`}>
                  {item.name}
                </p>
                <p className="standing-team">{item.points}</p>
                <p className="standing-team">{item.played}</p>
                <p className="standing-team">{item.win}</p>
                <p className="standing-team">{item.draw}</p>
                <p className="standing-team">{item.lose}</p>
                <p className="standing-team">{item.goalsDiff}</p>
              </div>
            </div>
          ))}
          <div className="leyenda">
            <div className="meaning">
              <p>PTS: Puntos</p>
              <p>PJ: Partidos Jugados</p>
              <p>PG: Partidos Ganados</p>
              <p>PE: Partidos Empatados</p>
              <p>PP: Partidos Perdidos</p>
              <p>DG: Diferencia de Goles</p>
            </div>
            <div className="colours">
              <div className="colour">
                <p className="square blue blue-background"> </p>
                <p>Champions League</p>
              </div>
              <div className="colour">
                <p className="square orange-background"> </p>
                <p>Europa League</p>
              </div>
              <div className="colour">
                <p className="square green-background"> </p>
                <p>Conference League</p>
              </div>
              <div className="colour">
                <p className="square red-background"> </p>
                <p>Descenso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaLigaStandings;
