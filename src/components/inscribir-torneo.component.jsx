import { useEffect, useState } from "react";
import InscripcionTorneo from "./InscripcionTorneo";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import ListGroup from "react-bootstrap/ListGroup";
import ListaParticipantes from "./ListaParticipantes";

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
            jugadores: [],
            equipos: [],
        }
    );

    const [label, setLabel] = useState('');
    const [participantesList, setParticipantesList] = useState([]);

    const { id } = useParams();
    let navigate = useNavigate();

    const onSubmit = (torneoObject) => {
        axios.put(`http://localhost:4000/torneos/editar-participante/${id}`, torneoObject)
            .then((response) => {
                if (response.status === 200) {
                    alert('Inscripción exitosa');
                    // Redirigir al usuario al inicio
                    navigate('/');
                } else {
                    Promise.reject();
                }
            })
            .catch((error) => alert(error.response.data));
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
                    minParticipantes,
                    jugadores,
                    equipos,
                } = response.data;

                // Cambiar formato de ISO al mismo del input (legible)
                fechaInicio = format(fechaInicio, 'dd/MM/yyyy');
                fechaFin = format(fechaFin, 'dd/MM/yyyy');

                setFormValues({
                    ...formValues,
                    nombre,
                    fechaInicio,
                    fechaFin,
                    tipo,
                    descripcion,
                    numJugadoresEquipo,
                    minParticipantes, 
                    jugadores,
                    equipos,
                });

                // cambiar de acuerdo a si es equipo o individual
                setLabelAndParticipantesList(numJugadoresEquipo, jugadores, equipos);
            })
            .catch((error) => console.log(error));
    }, [id]);

    function setLabelAndParticipantesList(numJugadoresEquipo, jugadores, equipos) {
        let list = []; 
        const esIndividual = numJugadoresEquipo === 1 ? true : false;
        if (esIndividual){
            setLabel('Nombre jugador');
            list = jugadores.map((jugador, index) => 
                <ListaParticipantes participanteObj={jugador} esIndividual={esIndividual} torneoId={id} key={index} />
            );
        } else {
            setLabel('Nombre equipo');
            list = equipos.map((equipo, index) => 
                <ListaParticipantes participanteObj={equipo} esIndividual={esIndividual} torneoId={id} key={index} />
            );
        }
        setParticipantesList(list);
    }

    return(
        <>
            <h2 className="h2 mt-4">Torneo: {formValues.nombre}</h2>
            <h3 className="mt-4">
                Participantes inscritos:
                <small className="text-body-secondary h4"> {participantesList.length}</small>
            </h3>
            <h6 className="text-body-secondary h6 mb-4">mínimo para apertura:  {formValues.minParticipantes}</h6>
            <ListGroup variant="flush">
                {participantesList.length !== 0 ? participantesList : '¡sé el primero!'}
            </ListGroup>
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