import { Formik, Form } from "formik";
import * as Yup from 'yup';
import Button  from "react-bootstrap/Button";
import {default as BForm} from "react-bootstrap/Form";
import TextInput from "./TextInput";

function FormEquipo(props){

    const schema = Yup.object({
        nombreEquipo: Yup.string().required('Campo requerido')
            .min(4, 'Nombre debe tener al menos 4 caracteres')
            .max(20, 'Nombre no puede tener más de 20 caracteres'),
        nombresIntegrantes: Yup.string().required('Campo requerido'),
    });

    return (
        <Formik
            {...props}
            validationSchema={schema}
        >
            <Form noValidate>
                <BForm.Group className="mb-3">
                    <TextInput
                        label="Nombre del equipo "
                        name="nombreEquipo"
                        type="text"
                    />
                </BForm.Group>
                <BForm.Group className="mb-3">
                    <TextInput
                        label="Nombres de integrantes"
                        name="nombresIntegrantes"
                        type="text"
                        as="textarea"
                        placeholder="ej: nombre1, nombre2, nombre3"
                    />
                </BForm.Group>
                <Button variant="success" type="submit">Crear Jugador</Button>
            </Form>
        </Formik>
    );
}

export default FormEquipo;