import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import Edit from "../svg/edit.svg";
import Delete from "../svg/delete.svg";

function ListaEquipos({equipoObj}) {
    let {
        _id,
        nombreEquipo,
        nombresIntegrantes,
    } = equipoObj;

    function eliminarEquipo() {
        axios.delete(`http://localhost:4000/equipos/eliminar/${_id}`)
            .then((response) => {
                if (response.status === 200){
                    alert('Equipo eliminado');
                    window.location.reload();
                } else {
                    Promise.reject();
                }
            })
            .catch((error) => alert('Ha ocurrido un error'));
    }

    return (
        <tr>
            <td>{nombreEquipo}</td>
            <td>{nombresIntegrantes}</td>
            <td className="d-flex justify-content-end">
                <Link to={`/equipos/editar/${_id}`}>
                    <Button variant="secondary" className="mx-1">
                        <img src={Edit} alt="edit" />
                    </Button>
                </Link>
                <Button variant="danger" className="mx-1" onClick={eliminarEquipo}>
                    <img src={Delete} alt="delete" />
                </Button>
            </td>
        </tr>
    );
}

export default ListaEquipos;