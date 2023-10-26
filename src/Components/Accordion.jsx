import React, { useState } from "react";
//STYLES
import "../Components/Accordion.css";
//MODALS
import ConfirmModal from "../Modals/ConfirmModal";

const Accordion = () => {
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
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <div className="player-by-position-info">
                <p>
                  <strong>COURTOIS </strong>{" "}
                </p>
                <p>250pts</p>
                <p>300000€</p>
                <div className="player-button-section">
                  <button>ALINEAR</button>
                  <button onClick={handleShowConfirmModal}>VENDER</button>
                </div>
              </div>
              <div className="player-by-position-info">
                <p>
                  <strong>COURTOIS </strong>{" "}
                </p>
                <p>250pts</p>
                <p>300000€</p>
                <div className="player-button-section">
                  <button>ALINEAR</button>
                  <button onClick={handleShowConfirmModal}>VENDER</button>
                </div>
              </div>
              <div className="player-by-position-info">
                <p>
                  <strong>COURTOIS </strong>{" "}
                </p>
                <p>250pts</p>
                <p>300000€</p>
                <div className="player-button-section">
                  <button>ALINEAR</button>
                  <button onClick={handleShowConfirmModal}>VENDER</button>
                </div>
              </div>
              <div className="player-by-position-info">
                <p>
                  <strong>COURTOIS </strong>{" "}
                </p>
                <p>250pts</p>
                <p>300000€</p>
                <div className="player-button-section">
                  <button>ALINEAR</button>
                  <button onClick={handleShowConfirmModal}>VENDER</button>
                </div>
              </div>
              <div className="player-by-position-info">
                <p>
                  <strong>COURTOIS </strong>{" "}
                </p>
                <p>250pts</p>
                <p>300000€</p>
                <div className="player-button-section">
                  <button>ALINEAR</button>
                  <button onClick={handleShowConfirmModal}>VENDER</button>
                </div>
              </div>
              <div className="player-by-position-info">
                <p>
                  <strong>COURTOIS </strong>{" "}
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
              <div className="player-by-position-info">
                <p>
                  <strong>COURTOIS </strong>{" "}
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
              <div className="player-by-position-info">
                <p>
                  <strong>COURTOIS </strong>{" "}
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
              PORTEROS
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <div className="player-by-position-info">
                <p>
                  <strong>COURTOIS </strong>{" "}
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
