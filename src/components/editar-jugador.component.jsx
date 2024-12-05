import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import FormJugador from "./FormJugador";

function EditarJugador() {
    const [formValues, setFormValues] = useState(
        {
            nombreJugador: '',
            emailJugador: '',
        }
    );

    // Obtener ID del Jugador desde los parámetros de URL
    const { id } = useParams();
    // Para redirigir al usuario
    let navigate = useNavigate();

    const onSubmit = (jugadorObject) => {
        axios.put(`http://localhost:4000/jugadores/editar/${id}`, jugadorObject)
            .then((response) => {
                if (response.status === 200){
                    alert('Jugador editado exitosamente');
                    // Redirigir al usuario al inicio
                    navigate('/jugadores/ver');
                } else {
                    Promise.reject();
                }
            })
            .catch((error) => alert('Ha ocurrido un error'));
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/jugadores/editar/${id}`)
            .then((response) => {
                let {
                    nombreJugador,
                    emailJugador,
                } = response.data;

                setFormValues({
                    nombreJugador,
                    emailJugador,
                });
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <FormJugador
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        />
    );
}

export default EditarJugador;