import { useState } from "react";
import axios from "axios";
import FormEquipo from "./FormEquipo";

function CrearEquipo() {
    const [formValues, setFormValues] = useState(
        {
            nombreEquipo: '', 
            nombresIntegrantes: '',
        }
    );

    const onSubmit = (equipoObject) => {
        axios.post('http://localhost:3000/torneo/torneo', equipoObject)
            .then((response) => {
                if (response.status === 200){
                    alert('Equipo creado');
                } else {
                    Promise.reject();
                }
            })
            .catch((error) => alert('Ha ocurrido un error'));
    }
    return (
        <FormEquipo 
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        />
    );
}

export default CrearEquipo;