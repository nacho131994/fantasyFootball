import React, { useState } from "react";
//STYLES
import "../Components/CardStat.css";
//MODALS
import ConfirmModal from "../Modals/ConfirmModal";

const CardStat = ({ title }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleShowConfirmModal = () => {
    setShowConfirmModal(true);
  };
  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
  };
  return (
    <div className="card-stat-container">
      <div className="card-stat-title">
        <span className="plus">
          <i class="fa-solid fa-up-long"></i>
        </span>{" "}
        {title}{" "}
        <span className="minus">
          <i class="fa-solid fa-down-long"></i>
        </span>{" "}
      </div>
      <div className="card-stat-body">
        <ul>
          <li>
            <p>nombre</p>
            <p>puntos</p>
            <button onClick={handleShowConfirmModal}>FICHAR</button>
          </li>
          <li>
            <p>nombre</p>
            <p>puntos</p>
            <button onClick={handleShowConfirmModal}>FICHAR</button>
          </li>
          <li>
            <p>nombre</p>
            <p>puntos</p>
            <button onClick={handleShowConfirmModal}>FICHAR</button>
          </li>
          <li>
            <p>nombre</p>
            <p>puntos</p>
            <button onClick={handleShowConfirmModal}>FICHAR</button>
          </li>
          <li>
            <p>nombre</p>
            <p>puntos</p>
            <button onClick={handleShowConfirmModal}>FICHAR</button>
          </li>
        </ul>
      </div>
      {showConfirmModal ? (
        <ConfirmModal
          handleCloseConfirmModal={handleCloseConfirmModal}
          action={"FICHAR"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default CardStat;
