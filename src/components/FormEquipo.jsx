import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';
import Button  from "react-bootstrap/Button";
import {default as BForm} from "react-bootstrap/Form";

function FormEquipo(){

    const schema = Yup.object({
        nombreEquipo: Yup.string().required('Campo requerido')
            .min(4, 'Nombre debe tener al menos 4 caracteres')
            .max(20, 'Nombre no puede tener más de 20 caracteres'),
        nombresIntegrantes: Yup.string().required('Campo requerido'),
    });

    return (
        <Formik
            initialValues={
                {
                    nombreEquipo: '', 
                    nombresIntegrantes: '',
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

export default FormEquipo;