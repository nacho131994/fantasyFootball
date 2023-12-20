import React, { useState, useEffect } from "react";
//STYLES
import "../Sections/TuPlantilla.css";
//MODALS
import ConfirmModal from "../Modals/ConfirmModal";
//COMPONENTS
import Accordion from "../Components/Accordion";

const TuPlantilla = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [yourTeam, setYourTeam] = useState([]);
  useEffect(() => {
    fetch("https://footb.onrender.com/v2/team/players", {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setYourTeam(data);
      })
      .catch((error) => {
        console.error("Error al obtener jugadores del equipo:", error);
      });
  }, []);

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
  };
  return (
    <>
      <div className="your-team-body">
        <Accordion yourTeam={yourTeam} />
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

export default TuPlantilla;
