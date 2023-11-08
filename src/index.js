import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//STYLES
import "../src/index.css";

//VIEWS
import Home from "./Pages/Home.jsx";
import Plantilla from "./Pages/Pantilla";
import Estadisticas from "./Pages/Estadisticas.jsx";
import Mercado from "./Pages/Mercado.jsx";
import Reglas from "./Pages/Reglas";
import SobreNosotros from "./Pages/SobreNosotros";
import FAQ from "./Pages/FAQ";
import Politicas from "./Pages/Politicas";
import Contacto from "./Pages/Contacto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/sobrenosotros",
    element: <SobreNosotros />,
  },
  {
    path: "/politicas",
    element: <Politicas />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
