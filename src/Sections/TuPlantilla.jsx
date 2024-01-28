import React, { useEffect, useState } from "react";
//STYLES
import "../Sections/TuPlantilla.css";

//COMPONENTS
import Accordion from "../Components/Accordion";

const TuPlantilla = () => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {}, []);
  return (
    <>
      <div className="your-team-body">
        <Accordion />
      </div>
      <div className="standings"></div>
    </>
  );
};

export default TuPlantilla;
