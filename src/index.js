import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  errorElement,
} from "react-router-dom";
//STYLES
import "../src/index.css";
//VIEWS
import Home from "./Pages/Home.jsx";
import Plantilla from "./Pages/Pantilla";
import Estadisticas from "./Pages/Estadisticas.jsx";
import Mercado from "./Pages/Mercado.jsx";
import Error from "./Pages/Error.jsx";
import Reglas from "./Pages/Reglas";
import SobreNosotros from "./Pages/SobreNosotros";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/plantilla",
    element: <Plantilla />,
  },
  {
    path: "/estadisticas",
    element: <Estadisticas />,
  },

  {
    path: "/mercado",
    element: <Mercado />,
  },
  {
    path: "/reglas",
    element: <Reglas />,
  },
  {
    path: "/sobrenosotros",
    element: <SobreNosotros />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
