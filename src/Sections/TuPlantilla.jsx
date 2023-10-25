import React, { useState } from "react";
//STYLES
import "../Sections/TuPlantilla.css";
//MODALS
import ConfirmModal from "../Modals/ConfirmModal";

const TuPlantilla = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleShowConfirmModal = () => {
    setShowConfirmModal(true);
  };
  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
  };
  return (
    <div className="your-team-body">
      <h1>TU PLANTILLA</h1>

      <div className="players-list">
        <div className="players-by-position">
          <div className="player-by-position-header">PORTEROS</div>
          <div className="player-by-position-info">
            <p>
              <strong>COURTOIS (RMA)</strong>{" "}
            </p>
            <p>250pts</p>
            <p>300000€</p>
            <div className="player-button-section">
              <button>ALINEAR</button>
              <button onClick={handleShowConfirmModal}>VENDER</button>
            </div>
          </div>
        </div>
        <div className="players-by-position">
          <div className="player-by-position-header">DEFENSAS</div>
          <div className="player-by-position-info">
            <p>
              <strong>MILITAO (RMA)</strong>{" "}
            </p>
            <p>250pts</p>
            <p>300000€</p>
            <div className="player-button-section">
              <button>ALINEAR</button>
              <button onClick={handleShowConfirmModal}>VENDER</button>
            </div>
          </div>
        </div>
        <div className="players-by-position">
          <div className="player-by-position-header">CENTROCAMPISTAS</div>
          <div className="player-by-position-info">
            <p>
              <strong>BELLINGHAM (RMA)</strong>{" "}
            </p>
            <p>250pts</p>
            <p>300000€</p>
            <div className="player-button-section">
              <button>ALINEAR</button>
              <button onClick={handleShowConfirmModal}>VENDER</button>
            </div>
          </div>
        </div>
        <div className="players-by-position">
          <div className="player-by-position-header">DELANTEROS</div>
          <div className="player-by-position-info">
            <p>
              <strong>VINICIUS (RMA)</strong>{" "}
            </p>
            <p>250pts</p>
            <p>300000€</p>
            <div className="player-button-section">
              <button>ALINEAR</button>
              <button onClick={handleShowConfirmModal}>VENDER</button>
            </div>
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
  );
};

export default TuPlantilla;
