import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";
import Edit from "../svg/edit.svg";
import Delete from "../svg/delete.svg";
import Register from "../svg/register.svg";

function ListaTorneos({torneoObj}) {
    let {
        _id,
        nombre,
        fechaInicio,
        fechaFin,
        tipo,
        descripcion,
        numJugadoresEquipo,
    } = torneoObj;

    // Cambiar formato de ISO al mismo del input (legible)
    fechaInicio = format(fechaInicio, 'dd/MM/yyyy');
    fechaFin = format(fechaFin, 'dd/MM/yyyy');

    function eliminarTorneo() {
        axios.delete(`http://localhost:4000/torneos/eliminar/${_id}`)
            .then((response) => {
                if (response.status === 200){
                    alert('Torneo eliminado');
                    window.location.reload();
                } else {
                    Promise.reject();
                }
            })
            .catch((error) => alert('Ha ocurrido un error'));
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td>{fechaInicio}</td>
            <td>{fechaFin}</td>
            <td>{tipo}</td>
            <td>{descripcion}</td>
            <td>
                {numJugadoresEquipo === 1 ?
                'Individual' : numJugadoresEquipo}
            </td>
            <td>
                <Link to={`/torneos/inscripciones/${_id}`}>
                    <Button variant="success" className="mx-1">
                        <img src={Register} alt="register" />
                    </Button>
                </Link>
                <Link to={`/torneos/editar/${_id}`}>
                    <Button variant="secondary" className="mx-1">
                        <img src={Edit} alt="edit" />
                    </Button>
                </Link>
                <Button variant="danger" className="mx-1" onClick={eliminarTorneo}>
                    <img src={Delete} alt="delete" />
                </Button>
            </td>
        </tr>
    );
}

export default ListaTorneos;