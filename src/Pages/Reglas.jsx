import React from "react";
//STYLES
import "../Pages/Reglas.css";
//COMPONENTS
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Reglas = () => {
  return (
    <>
      <Navbar />
      <div className="reglas-container">
        <div className="rule">
          <h3>¿QUÉ ES FOOTBALL FANTASY?</h3>
          <p className="paragraph">
            Football Fantasy es un juego en el cual los usuarios forman un
            equipo de fútbol con jugadores de los eqipos de LaLiga EA Sports, y
            estos reciben puntos según su rendimiento en los partidos en la vida
            real.
            <br /> Los usuarios crearán un equipo y jugarán en ligas privadas, y
            el equipo con más puntos será el ganador de la misma.
          </p>
        </div>
        <div className="rule">
          <h3>¿CÓMO SE JUEGA A FOOTBALL FANTASY?</h3>
          <p className="paragraph">
            Cada usuario tendrá un mínimo de 11 y un máximo de 20 jugadores, que
            podrá fichar en el MERCADO. Cada usuario inicia su partida con un
            presupuesto establecido en X€. <br /> Cada jugador que se fiche
            tiene un coste en euros, que se restarán al presupuesto del club una
            vez se haya confirmado el fichaje. <br />
            Los jugadores que se tengan en plantilla se podrán vender, y, por
            consiguiente, el valor que tengan será abonado al presupuesto del
            club una vez confirmada la venta.
            <br />
            Se podrán alinar los 11 jugadores que se quieran, respetando los
            esquemas de juego seleccionados, siempre que se quiera entre
            jornadas. Los jueves a las 23:59 h de cada semana de jornada en la
            vida real, se debe confirmar el 11 titular del equipo para disputar
            la jornada: desde ese momento, y hasta el fin de la misma, no se
            podrá modificar el 11 titular. <br /> Cada jugador virtual
            recibirá/perderá puntos en funcion del rendimiento del jugador real.
            La suma de los puntos de todos los jugadores del equipo en cada
            jornada determinará la puntuación del equipo en dicha jornada.
            Ganará el equipo que al finalizar la liga tenga más puntos totales.
          </p>
        </div>
        <div className="rule ">
          <h3>¿CÓMO SE GANAN PUNTOS EN FOOTBALL FANTASY?</h3>
          <div className="how-to-score-points">
            <p className="paragraph">
              Los jugadores de tu plantilla que hayas alineado en TU 11 ganarán
              o perderán puntos por cada jornada en función del rendimineto que
              tengan dichos jugadores en la vida real.
              <br /> Solamente obtendrán puntos los jugadores que hayan sido
              alineados en TU 11, mientras que los que no lo hayan sido, no
              sumarán puntos en la jornada jugada. <br />
              Los jugadores ganarán puntos en funcion de la cantidad de acciones
              positivas que lleven a cabo en la vida real, y los perderán en
              función de la cantidad de acciones negativas que realicen.
            </p>
            <table border="1">
              <tr>
                <th className="title-table add-points">
                  ACCIONES QUE SUMAN PUNTOS
                </th>
                <th className="title-table">ACCIONES QUE RESTAN PUNTOS</th>
              </tr>
              <tr>
                <td>GOL ANOTADO:</td>
                <td>GOL ENCAJADO (porteros):</td>
              </tr>
              <tr>
                <td>ASISTENCIA DE GOL:</td>
                <td>PASE FALLADO:</td>
              </tr>
              <tr>
                <td>PASES ACERTADOS:</td>
                <td>TARJETA AMARILLA:</td>
              </tr>
              <tr>
                <td>RECUPERACIONES DE BALÓN:</td>
                <td>TARJETA ROJA:</td>
              </tr>
              <tr>
                <td>PARADAS (porteros):</td>
                <td>FALTA REALIZADA:</td>
              </tr>
              <tr>
                <td>GOL DE PENALTI:</td>
                <td>PENALTI COMETIDO:</td>
              </tr>
              <tr>
                <td>PENALTI PARADO (portero):</td>
                <td>GOL EN PROPIA PUERTA:</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reglas;
