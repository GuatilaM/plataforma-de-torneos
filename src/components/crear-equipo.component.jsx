import { useState } from "react";
import axios from "axios";
import FormEquipo from "./FormEquipo";
import { useNavigate } from "react-router-dom";

function CrearEquipo() {
    const [formValues, setFormValues] = useState(
        {
            nombreEquipo: '', 
            nombresIntegrantes: '',
        }
    );

    let navigate = useNavigate();

    const onSubmit = (equipoObject) => {
        axios.post('http://localhost:4000/equipos/crear', equipoObject)
            .then((response) => {
                if (response.status === 200){
                    alert('Equipo creado');
                    navigate('/equipos/ver');
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
            esCrear={true}
        />
    );
}

export default CrearEquipo;