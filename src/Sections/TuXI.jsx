import React, { useState, useEffect } from "react";
import moment from "moment";

// STYLES
import "../Sections/TuXI.css";

const TuXI = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [selectedFormation, setSelectedFormation] = useState("4-3-3");

  const formations = {
    "4-3-3": [[1], [2, 3, 4, 5], [6, 7, 8], [9, 10, 11]],
    "4-2-3-1": [[1], [2, 3, 4, 5], [6, 7], [8, 9, 10], [11]],
    "4-4-2": [[1], [2, 3, 4, 5], [6, 7, 8, 9], [10, 11]],
    "5-3-2": [[1], [2, 3, 4, 5, 6], [7, 8, 9], [10, 11]],
    "3-4-3": [[1], [2, 3, 4], [, 5, 6, 7, 8], [9, 10, 11]],
    "3-5-2": [[1], [2, 3, 4], [, 5, 6, 7, 8, 9], [10, 11]],
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  function calculateTimeLeft() {
    const now = moment();
    let targetDate = moment().day(5).hours(0).minutes(0).seconds(0);
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
  const handleFormationChange = (e) => {
    setSelectedFormation(e.target.value);
  };

  return (
    <div className="tuxi-body">
      <div className="tuxi-body-options">
        <div>
          <select onChange={handleFormationChange} value={selectedFormation}>
            <option value="" disabled selected>
              Elije un esquema
            </option>
            <option value="4-3-3">4-3-3</option>
            <option value="4-2-3-1">4-2-3-1</option>
            <option value="4-4-2">4-4-2</option>
            <option value="5-3-2">5-3-2</option>
            <option value="3-4-3">3-4-3</option>
            <option value="3-5-2">3-5-2</option>
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

      <div className="football-pitch-section">
        {formations[selectedFormation].map((row, rowIndex) => (
          <div key={rowIndex} className="pitch-row">
            {row.map((playerNumber) => (
              <div
                key={playerNumber}
                className={
                  playerNumber.length > 13
                    ? "playernumber-long pitch-player"
                    : "playernumber-short pitch-player"
                }
              >
                {isNaN(playerNumber) ? (
                  <>
                    <p>{playerNumber}</p>
                    <i class="fa-regular fa-circle-xmark"></i>
                  </>
                ) : (
                  <p>{playerNumber}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TuXI;
