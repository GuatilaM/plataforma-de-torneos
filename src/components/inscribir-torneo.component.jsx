import { useEffect, useState } from "react";
import InscripcionTorneo from "./InscripcionTorneo";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";

function InscribirTorneo(){
    const [formValues, setFormValues] = useState(
        {
            nombre: '',
            fechaInicio: '',
            fechaFin: '',
            tipo: 'simple',
            descripcion: '',
            numJugadoresEquipo: '',
            minParticipantes: '',
            nombreParticipante: '',
        }
    );

    const [label, setLabel] = useState('');

    const { id } = useParams();
    let navigate = useNavigate();

    const onSubmit = (torneoObject) => {
        if (label === 'Nombre jugador'){
            axios.put(`http://localhost:4000/torneos/inscribir-jugador/${id}`, torneoObject)
                .then((response) => {
                    if (response.status === 200) {
                        alert('Inscripción exitosa');
                        // Redirigir al usuario al inicio
                        navigate('/');
                    } else {
                        Promise.reject();
                    }
                })
                .catch((error) => alert('Ha ocurrido un error'));
        } else if (label === 'Nombre equipo'){
            axios.put(`http://localhost:4000/torneos/inscribir-equipo/${id}`, torneoObject)
                .then((response) => {
                    if (response.status === 200) {
                        alert('Inscripción exitosa');
                        // Redirigir al usuario al inicio
                        navigate('/');
                    } else {
                        Promise.reject();
                    }
                })
                .catch((error) => alert('Ha ocurrido un error'));
        }
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

                // cambiar Label de acuerdo si es equipo o individual
                if(numJugadoresEquipo === 1){
                    setLabel('Nombre jugador');
                } else {
                    setLabel('Nombre equipo');
                }
            })
            .catch((error) => console.log(error));
    }, [id]);

    return(
        <>
            <h3 className="my-4">Inscribir participante</h3>
            <InscripcionTorneo
                initialValues={formValues}
                onSubmit={onSubmit}
                enableReinitialize
                labelText={label}
            />
        </>
    )
}

export default InscribirTorneo;