import Button from "react-bootstrap/Button";
import Edit from "../svg/edit.svg";
import Delete from "../svg/delete.svg";

function ListaTorneos({torneoObj}) {
    const {
        _id,
        nombre,
        fechaInicio,
        fechaFin,
        tipo,
        descripcion,
        numJugadoresEquipo,
    } = torneoObj;

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
                <Button variant="secondary" className="mx-1">
                    <img src={Edit} alt="edit" />
                </Button>
                <Button variant="danger" className="mx-1">
                    <img src={Delete} alt="delete" />
                </Button>
            </td>
        </tr>
    );
}

export default ListaTorneos;