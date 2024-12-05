import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormJugador from "./FormJugador";

function CrearJugador() {
    const [formValues, setFormValues] = useState(
        {
            nombreJugador: '', 
            emailJugador: '',
        }
    );

    let navigate = useNavigate();

    const onSubmit = (jugadorObject) => {
        axios.post('http://localhost:4000/jugadores/crear', jugadorObject)
            .then((response) => {
                if (response.status === 200){
                    alert('Jugador creado');
                    navigate('/jugadores/ver');
                } else {
                    Promise.reject();
                }
            })
            .catch((error) => alert('Ha ocurrido un error'));
    }
    return (
        <FormJugador 
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        />
    );
}

export default CrearJugador;