import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import FormEquipo from "./FormEquipo";

function EditarEquipo() {
    const [formValues, setFormValues] = useState(
        {
            nombreEquipo: '',
            nombresIntegrantes: '',
        }
    );

    // Obtener ID del Jugador desde los parámetros de URL
    const { id } = useParams();
    // Para redirigir al usuario
    let navigate = useNavigate();

    const onSubmit = (equipoObject) => {
        axios.put(`http://localhost:4000/equipos/editar/${id}`, equipoObject)
            .then((response) => {
                if (response.status === 200){
                    alert('Equipo editado exitosamente');
                    // Redirigir al usuario al inicio
                    navigate('/equipos/ver');
                } else {
                    Promise.reject();
                }
            })
            .catch((error) => alert('Ha ocurrido un error'));
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/equipos/editar/${id}`)
            .then((response) => {
                let {
                    nombreEquipo,
                    nombresIntegrantes,
                } = response.data;

                setFormValues({
                    nombreEquipo,
                    nombresIntegrantes,
                });
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <FormEquipo
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        />
    );
}

export default EditarEquipo;