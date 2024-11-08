import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ListaTorneos from "./ListaTorneos";

function ListTorneo() {
    const [torneos, setTorneos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/')
            .then(({ data }) => {
                setTorneos(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const tableData = () => {
        return torneos.map((torneo, index) => {
            return (
                <ListaTorneos torneoObj={torneo} key={index} />
            );
        });
    }

    return (
        <Table>
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