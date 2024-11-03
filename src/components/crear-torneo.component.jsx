import { useState } from "react";
import axios from "axios";
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
        axios.post('http://localhost:3000/torneo/torneo', torneoObject)
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