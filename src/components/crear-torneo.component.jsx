import { useState } from "react";
import axios from "axios";
import { parse } from "date-fns";
import FormTorneo from "./FormTorneo";
import { useNavigate } from "react-router-dom";

function CrearTorneo() {
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

    let navigate = useNavigate();

    const onSubmit = (torneoObject) => {
        //Modificar input de fechas a ISO antes de enviar a backend
        torneoObject.fechaInicio = parse(torneoObject.fechaInicio, 'dd/MM/yyyy', new Date()).toISOString();
        torneoObject.fechaFin = parse(torneoObject.fechaFin, 'dd/MM/yyyy', new Date()).toISOString();
        
        //POST
        axios.post('http://localhost:4000/torneos/crear', torneoObject)
            .then((response) => {
                if (response.status === 200){
                    alert('Torneo creado');
                    navigate('/');
                } else {
                    Promise.reject();
                }
            })
            .catch((error) => alert('Ha ocurrido un error'));
    }
    return (
        <FormTorneo 
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
            esCrear={true}
        />
    );
}

export default CrearTorneo;