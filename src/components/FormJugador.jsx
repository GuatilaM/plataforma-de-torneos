import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';
import Button  from "react-bootstrap/Button";
import {default as BForm} from "react-bootstrap/Form";

function FormJugador(){

    const schema = Yup.object({
        nombreJugador: Yup.string().required('Campo requerido')
            .min(4, 'Nombre debe tener al menos 4 caracteres')
            .max(20, 'Nombre no puede tener más de 20 caracteres'),
        emailJugador: Yup.string().email('email inválido').required('Campo requerido'),
    });

    return (
        <Formik
            initialValues={
                {
                    nombreJugador: '', 
                    emailJugador: '',
                }
            }
            validationSchema={schema}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
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

function TextInput({label, ...props}) {
    const [field, meta] = useField(props);
    return (
        <>
            <BForm.Label htmlFor={props.id || props.name}>{label}</BForm.Label>
            <BForm.Control {...field} {...props} isInvalid={!!meta.error} />
            <BForm.Control.Feedback type="invalid">
                {meta.error}
            </BForm.Control.Feedback>
        </>
    );
}

export default FormJugador;