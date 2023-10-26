import React, { useState } from "react";
//STYLES
import "../Sections/TuPlantilla.css";
//MODALS
import ConfirmModal from "../Modals/ConfirmModal";
//COMPONENTS
import Accordion from "../Components/Accordion";

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
      <Accordion />
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
