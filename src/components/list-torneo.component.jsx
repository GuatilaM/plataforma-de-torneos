import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ListaTorneos from "./ListaTorneos";

function ListTorneo() {
    const [torneos, setTorneos] = useState([]);

    let hoy = new Date();
    hoy = hoy.toISOString();

    useEffect(() => {
        axios.get('http://localhost:4000/torneos')
            .then(({ data }) => {
                setTorneos(data);
            })
            .catch((error) => {
                console.log('Error 404 ' + error);
            });
    }, []);

    const tableData = () => {
        return torneos.map((torneo, index) => {
            return (
                <ListaTorneos torneoObj={torneo} hoy={hoy} key={index} />
            );
        });
    }

    return (
        <Table className="my-3">
            <thead>
                <tr>
                    <th>Nombre Torneo</th>
                    <th>Fecha de inicio</th>
                    <th>Fecha fin</th>
                    <th>Tipo de torneo</th>
                    <th>Descripción</th>
                    <th>Jugadores por equipo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tableData()}
            </tbody>
        </Table>
    );
}

export default ListTorneo;