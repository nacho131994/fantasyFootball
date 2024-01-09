import React, { useState, useEffect } from "react";
import moment from "moment";

// STYLES
import "../Sections/TuXI.css";

const TuXI = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  function calculateTimeLeft() {
    const now = moment();
    let targetDate = moment().day(5).hours(0).minutes(0).seconds(0);

    // Si la fecha de destino ya ha pasado, establecerla para el próximo viernes a las 00:00
    if (now.isAfter(targetDate)) {
      targetDate = moment()
        .day(5)
        .hours(0)
        .minutes(0)
        .seconds(0)
        .add(7, "days");
    }

    const duration = moment.duration(targetDate.diff(now));
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="tuxi-body">
      <div className="tuxi-body-options">
        <div>
          <select>
            <option value="" disabled selected>
              Elije un esquema
            </option>
            <option value="opcion1" className="option">
              1-4-4-2
            </option>
            <option value="opcion2">1-4-3-3</option>
            <option value="opcion3">1-4-2-3-1</option>
            <option value="opcion4">1-3-4-3</option>
            <option value="opcion5">1-5-3-2</option>
          </select>
        </div>

        <div className="tuxi-button-section">
          <div className="tuxi-time-remaining">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <p>CONFIRMAR EN:</p>
            <p>{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`}</p>
          </div>
          <div className="tuxi-button-section-button">
            <button> GUARDAR</button>
          </div>
        </div>
      </div>

      <div className="football-pitch-section"></div>
    </div>
  );
};

export default TuXI;
