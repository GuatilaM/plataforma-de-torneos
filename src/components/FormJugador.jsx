import { Formik, Form } from "formik";
import * as Yup from 'yup';
import Button  from "react-bootstrap/Button";
import {default as BForm} from "react-bootstrap/Form";
import TextInput from "./TextInput";

function FormJugador(props){

    const schema = Yup.object({
        nombreJugador: Yup.string().required('Campo requerido')
            .min(4, 'Nombre debe tener al menos 4 caracteres')
            .max(20, 'Nombre no puede tener más de 20 caracteres'),
        emailJugador: Yup.string().email('email inválido').required('Campo requerido'),
    });

    return (
        <Formik
            {...props}
            validationSchema={schema}
        >
            <Form noValidate>
                <BForm.Group className="mb-3">
                    <TextInput
                        label="Nombre de jugador"
                        name="nombreJugador"
                        type="text"
                    />
                </BForm.Group>
                <BForm.Group className="mb-3">
                    <TextInput
                        label="Email"
                        name="emailJugador"
                        type="text"
                    />
                </BForm.Group>
                <Button variant="success" type="submit">Crear Jugador</Button>
            </Form>
        </Formik>
    );
}

export default FormJugador;