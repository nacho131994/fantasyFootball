import React from "react";
//STYLES
import "../Modals/ConfirmModal.css";

const ConfirmModal = ({ handleCloseConfirmModal, action }) => {
  return (
    <div className="confirm-modal">
      <div className="confirm-modal-container">
        <div className="confirm-modal-header">¿{action} A ESTE JUGADOR?</div>
        <div className="confirm-modal-button-section">
          <button>CONFIRMAR</button>
          <button onClick={handleCloseConfirmModal}>CANCELAR</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
