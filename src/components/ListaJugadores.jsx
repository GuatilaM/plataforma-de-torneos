import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import Edit from "../svg/edit.svg";
import Delete from "../svg/delete.svg";

function ListaJugadores({jugadorObj}) {
    let {
        _id,
        nombreJugador,
        emailJugador,
    } = jugadorObj;

    function eliminarJugador() {
        axios.delete(`http://localhost:4000/jugadores/eliminar/${_id}`)
            .then((response) => {
                if (response.status === 200){
                    alert('Jugador eliminado');
                    window.location.reload();
                } else {
                    Promise.reject();
                }
            })
            .catch((error) => alert('Ha ocurrido un error'));
    }

    return (
        <tr>
            <th>{nombreJugador}</th>
            <td>{emailJugador}</td>
            <td className="d-flex justify-content-end">
                <Link to={`/jugadores/editar/${_id}`}>
                    <Button variant="secondary" className="mx-1">
                        <img src={Edit} alt="edit" />
                    </Button>
                </Link>
                <Button variant="danger" className="mx-1" onClick={eliminarJugador}>
                    <img src={Delete} alt="delete" />
                </Button>
            </td>
        </tr>
    );
}

export default ListaJugadores;