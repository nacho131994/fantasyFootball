import React, { useState } from "react";
//STYLES
import "../Components/Accordion.css";
//MODALS
import ConfirmModal from "../Modals/ConfirmModal";

const Accordion = ({ yourTeam }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleShowConfirmModal = () => {
    setShowConfirmModal(true);
  };
  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              PORTEROS
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              {yourTeam.map((player, i) => {
                if (player.position_name === "Portero") {
                  return (
                    <div className="player-by-position-info" key={i}>
                      <p>
                        <strong>{player.name}</strong>{" "}
                      </p>
                      <p>250pts</p>
                      <p>30000€</p>
                      <div className="player-button-section">
                        <button>ALINEAR</button>
                        <button onClick={handleShowConfirmModal}>VENDER</button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              DEFENSAS
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              {yourTeam.map((player, i) => {
                if (player.position_name === "Defensa") {
                  return (
                    <div className="player-by-position-info" key={i}>
                      <p>
                        <strong>{player.name}</strong>{" "}
                      </p>
                      <p>250pts</p>
                      <p>30000€</p>
                      <div className="player-button-section">
                        <button>ALINEAR</button>
                        <button onClick={handleShowConfirmModal}>VENDER</button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              CENTROCAMPISTAS
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              {yourTeam.map((player, i) => {
                if (player.position_name === "Centrocampista") {
                  return (
                    <div className="player-by-position-info" key={i}>
                      <p>
                        <strong>{player.name}</strong>{" "}
                      </p>
                      <p>250pts</p>
                      <p>30000€</p>
                      <div className="player-button-section">
                        <button>ALINEAR</button>
                        <button onClick={handleShowConfirmModal}>VENDER</button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseFour"
            >
              DELANTEROS
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              {yourTeam.map((player, i) => {
                if (player.position_name === "Delantero") {
                  return (
                    <div className="player-by-position-info" key={i}>
                      <p>
                        <strong>{player.name}</strong>{" "}
                      </p>
                      <p>250pts</p>
                      <p>30000€</p>
                      <div className="player-button-section">
                        <button>ALINEAR</button>
                        <button onClick={handleShowConfirmModal}>VENDER</button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        {showConfirmModal ? (
          <ConfirmModal
            handleCloseConfirmModal={handleCloseConfirmModal}
            action={"VENDER"}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Accordion;
// Accordion.js
// import React, { useState } from "react";
// import "../Components/Accordion.css";
// import ConfirmModal from "../Modals/ConfirmModal";

// const Accordion = ({ yourTeam }) => {
//   const [showConfirmModal, setShowConfirmModal] = useState(false);

//   const handleShowConfirmModal = () => {
//     setShowConfirmModal(true);
//   };

//   const handleCloseConfirmModal = () => {
//     setShowConfirmModal(false);
//   };

//   // Agrupa jugadores por posición
//   const groupedPlayers = yourTeam.reduce((acc, player) => {
//     const position = player.position_name;
//     if (!acc[position]) {
//       acc[position] = [];
//     }
//     acc[position].push(player);
//     return acc;
//   }, {});

//   return (
//     <>
//       <div className="accordion" id="accordionPanelsStayOpenExample">
//         {/* Itera sobre las posiciones y pinta los jugadores asociados a esa posición */}
//         {Object.entries(groupedPlayers).map(([position, players]) => (
//           <div className="accordion-item" key={position}>
//             <h2 className="accordion-header">
//               <button
//                 className="accordion-button"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target={`#panelsStayOpen-collapse${position}`}
//                 aria-expanded="true"
//                 aria-controls={`panelsStayOpen-collapse${position}`}
//               >
//                 {position.toUpperCase()}
//               </button>
//             </h2>
//             <div
//               id={`panelsStayOpen-collapse${position}`}
//               className="accordion-collapse collapse"
//             >
//               <div className="accordion-body">
//                 {players.map((player) => (
//                   <div className="player-by-position-info" key={player.id}>
//                     <p>
//                       <strong>{player.name} </strong>
//                     </p>
//                     <p>{player.points}pts</p>
//                     <p>{player.price}€</p>
//                     <div className="player-button-section">
//                       <button>ALINEAR</button>
//                       <button onClick={handleShowConfirmModal}>VENDER</button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showConfirmModal ? (
//         <ConfirmModal
//           handleCloseConfirmModal={handleCloseConfirmModal}
//           action={"VENDER"}
//         />
//       ) : (
//         ""
//       )}
//     </>
//   );
// };

// export default Accordion;
