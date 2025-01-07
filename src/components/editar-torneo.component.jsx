import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { format, parse } from "date-fns";
import FormTorneo from "./FormTorneo";

function EditarTorneo() {
    const [formValues, setFormValues] = useState(
        {
            nombre: '',
            fechaInicio: '',
            fechaFin: '',
            tipo: 'simple',
            descripcion: '',
            numJugadoresEquipo: '',
            minParticipantes: '',
        }
    );

    // Obtener ID del Torneo desde los parámetros de URL
    const { id } = useParams();
    // Para redirigir al usuario
    let navigate = useNavigate();

    const onSubmit = (torneoObject) => {
        //Modificar input de fechas a ISO antes de enviar a backend
        torneoObject.fechaInicio = parse(torneoObject.fechaInicio, 'dd/MM/yyyy', new Date()).toISOString();
        torneoObject.fechaFin = parse(torneoObject.fechaFin, 'dd/MM/yyyy', new Date()).toISOString();

        axios.put(`http://localhost:4000/torneos/editar/${id}`, torneoObject)
            .then((response) => {
                if (response.status === 200){
                    alert('Torneo editado exitosamente');
                    // Redirigir al usuario al inicio
                    navigate('/');
                } else {
                    Promise.reject();
                }
            })
            .catch((error) => alert('Ha ocurrido un error'));
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/torneos/editar/${id}`)
            .then((response) => {
                let {
                    nombre,
                    fechaInicio,
                    fechaFin,
                    tipo,
                    descripcion,
                    numJugadoresEquipo,
                    minParticipantes
                } = response.data;

                // Cambiar formato de ISO al mismo del input (legible)
                fechaInicio = format(fechaInicio, 'dd/MM/yyyy');
                fechaFin = format(fechaFin, 'dd/MM/yyyy');

                setFormValues({
                    nombre,
                    fechaInicio,
                    fechaFin,
                    tipo,
                    descripcion,
                    numJugadoresEquipo,
                    minParticipantes
                });
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <FormTorneo
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
            esCrear={false}
        />
    );
}

export default EditarTorneo;