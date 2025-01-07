import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ListaJugadores from "./ListaJugadores";

function ListJugadores() {
    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/jugadores')
            .then(({ data }) => {
                setJugadores(data);
            })
            .catch((error) => {
                console.log('Error 404 ' + error);
            });
    }, []);

    const tableData = () => {
        return jugadores.map((jugador, index) => {
            return (
                <ListaJugadores jugadorObj={jugador} key={index} />
            );
        });
    }

    return (
        <div>
            <h3 className="h3 my-4">Todos los jugadores</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre Jugador</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tableData()}
                </tbody>
            </Table>
        </div>
    );
}

export default ListJugadores;