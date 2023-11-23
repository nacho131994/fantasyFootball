import React from "react";
//STYLES
import "../Modals/ConfirmModal.css";

const ConfirmModal = ({ handleCloseConfirmModal, action, playerPrice }) => {
  return (
    <div className="confirm-modal">
      <div className="confirm-modal-container">
        <div className="confirm-modal-header">¿{action} A ESTE JUGADOR?</div>
        <div className="confirm-modal-body">
          <p>
            <strong>PRECIO JUGADOR:</strong>
            <p>{playerPrice}€</p>
          </p>
          <p>
            <strong>DINERO TRAS FICHAJE:</strong>
            <p>43523522 €</p>
          </p>
        </div>
        <div className="confirm-modal-button-section">
          <button>CONFIRMAR</button>
          <button onClick={handleCloseConfirmModal}>CANCELAR</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
