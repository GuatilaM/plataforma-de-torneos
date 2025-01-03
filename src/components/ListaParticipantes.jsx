import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Close from "../svg/close.svg";

function ListaParticipantes({participanteObj, esIndividual, torneoId}){
    let id;
    let nombreParticipante;
    if (esIndividual){
        id = participanteObj._id;
        nombreParticipante = participanteObj.nombreJugador;
    } else {
        id = participanteObj._id
        nombreParticipante = participanteObj.nombreEquipo;
    }

    function eliminarParticipante() {
        axios.delete(`http://localhost:4000/torneos/${torneoId}/eliminar-participante/${id}`, {data: {esIndividual: esIndividual}})
            .then((response) => {
                if (response.status === 200){
                    alert('Participante eliminado');
                    window.location.reload();
                } else {
                    Promise.reject();
                }
            })
            .catch((error) => alert('Ha ocurrido un error'));
    }

    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {nombreParticipante}
            <button type="button" className="btn" onClick={eliminarParticipante}>
                <img src={Close} alt="close" />
            </button>
        </ListGroup.Item>
    );
}

export default ListaParticipantes;