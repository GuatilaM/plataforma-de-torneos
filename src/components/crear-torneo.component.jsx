import { useState } from "react";
import axios from "axios";
import { parse } from "date-fns";
import FormTorneo from "./FormTorneo";

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

    const onSubmit = (torneoObject) => {
        //Modificar input de fechas a ISO antes de enviar a backend
        torneoObject.fechaInicio = parse(torneoObject.fechaInicio, 'dd/MM/yyyy', new Date()).toISOString();
        torneoObject.fechaFin = parse(torneoObject.fechaFin, 'dd/MM/yyyy', new Date()).toISOString();
        
        //POST
        axios.post('http://localhost:4000/torneos/crear', torneoObject)
            .then((response) => {
                if (response.status === 200){
                    alert('Torneo creado');
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
        />
    );
}

export default CrearTorneo;