//STYLES
import "../Modals/DetalleJugadoresMercado.css";
//IMAGES
import alaves from "../ESCUDOS/alaves.png";
import almeria from "../ESCUDOS/almería.png";
import athletic from "../ESCUDOS/athletic.png";
import atleti from "../ESCUDOS/atleti.png";
import barça from "../ESCUDOS/barça.png";
import betis from "../ESCUDOS/betis.png";
import cadiz from "../ESCUDOS/cadiz.png";
import celta from "../ESCUDOS/celta.png";
import getafe from "../ESCUDOS/getafe.png";
import girona from "../ESCUDOS/girona.png";
import granada from "../ESCUDOS/granada.png";
import laspalmas from "../ESCUDOS/laspalmas.png";
import madrid from "../ESCUDOS/madrid.png";
import mallorca from "../ESCUDOS/mallorca.png";
import osasuna from "../ESCUDOS/osasuna.png";
import rayo from "../ESCUDOS/rayo.png";
import realsociedad from "../ESCUDOS/realsociedad.png";
import sevilla from "../ESCUDOS/sevilla.png";
import valencia from "../ESCUDOS/valencia.png";
import villarreal from "../ESCUDOS/villarreal.png";

const DetalleJugadoresMercado = ({
  handleCloseDetails,
  handleShowConfirmModal,
  selectedPlayer,
}) => {
  const { name, team, position } = selectedPlayer;

  const teamBadge = () => {
    if (team.includes("Real Madrid")) {
      return `${madrid}`;
    } else if (team.includes("Barcelona")) {
      return `${barça}`;
    } else if (team.includes("Alaves")) {
      return `${alaves}`;
    } else if (team.includes("Almería")) {
      return `${almeria}`;
    } else if (team.includes("athletic")) {
      return `${athletic}`;
    } else if (team.includes("Atlético")) {
      return `${atleti}`;
    } else if (team.includes("Betis")) {
      return `${betis}`;
    } else if (team.includes("Cádiz")) {
      return `${cadiz}`;
    } else if (team.includes("Celta")) {
      return `${celta}`;
    } else if (team.includes("Getafe")) {
      return `${getafe}`;
    } else if (team.includes("Girona")) {
      return `${girona}`;
    } else if (team.includes("Granada")) {
      return `${granada}`;
    } else if (team.includes("Las Palmas")) {
      return `${laspalmas}`;
    } else if (team.includes("Mallorca")) {
      return `${mallorca}`;
    } else if (team.includes("Osasuna")) {
      return `${osasuna}`;
    } else if (team.includes("Rayo")) {
      return `${rayo}`;
    } else if (team.includes("Real Sociedad")) {
      return `${realsociedad}`;
    } else if (team.includes("Sevilla")) {
      return `${sevilla}`;
    } else if (team.includes("Valencia")) {
      return `${valencia}`;
    } else if (team.includes("Villarreal")) {
      return `${villarreal}`;
    } else return "Equipo no encontrado";
  };

  return (
    <div className="mercado-body-players-details">
      <div className="player-details-card">
        <section>{name}</section>
        <div className="player-info-section">
          <div className="player-info-section-photo-container">
            <div className="team-of-player">
              <p>{team}</p>

              <img src={teamBadge()} className="team-badge" />
            </div>

            <p>{position}</p>
          </div>
          <div className="player-info">
            {position.includes("Portero") ? (
              <>
                <p>PARTIDOS JUGADOS:</p>
                <p>PARADAS:</p>
                <p>PARADAS PENALTI:</p>
                <p>PENALTI REALIZADO:</p>
                <p>GOL ENCAJADO:</p>
                <p>TARJETA ROJA:</p>
              </>
            ) : (
              <>
                <p>PARTIDOS JUGADOS:</p>
                <p>GOLES ANOTADOS:</p>
                <p>ASISTENCIAS:</p>
                <p>PASES ACERTADOS PP:</p>
                <p>PASES FALLADOS PP:</p>
                <p>RECUPERACIONES:</p>
                <p>GOL PENALTI:</p>
                <p>FALTA REALIZADA:</p>
                <p>TARJETA ROJA:</p>
                <p>PENALTI REALIZADO:</p>
              </>
            )}
          </div>
        </div>
        <div className="player-info-button-section">
          <button onClick={handleShowConfirmModal}>FICHAR</button>
          <button onClick={handleCloseDetails}>CERRAR</button>
        </div>
      </div>
    </div>
  );
};

export default DetalleJugadoresMercado;
