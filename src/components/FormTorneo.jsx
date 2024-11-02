import { Formik, Form, Field, useField, FormikProps } from "formik";
import * as Yup from 'yup';
import Button  from "react-bootstrap/Button";
import {default as BForm} from "react-bootstrap/Form";
import parseDateInput from "../utils/formatoFecha";

function FormTorneo(){
    const hoy = new Date();

    const schema = Yup.object({
        nombre: Yup.string().required('Campo requerido'),
        fechaInicio: Yup.date()
            .typeError('Ingrese una fecha válida en el formato dd/mm/aaaa')
            .transform(parseDateInput)
            .min(hoy, 'Ingrese una fecha posterior a hoy')
            .required('Campo requerido'),
        fechaFin: Yup.date()
            .typeError('Ingrese una fecha válida en el formato dd/mm/aaaa')
            .transform(parseDateInput)
            .min(Yup.ref('fechaInicio'), 'Ingrese una fecha igual o posterior a la fecha de inicio')
            .required('Campo requerido'),
        tipo: Yup.string().required('Campo requerido'),
        descripcion: Yup.string(),
        numJugadoresEquipo: Yup.number('Numérico')
            .required('Campo requerido')
            .positive('Número inválido')
            .integer('Número inválido')
            .typeError('Ingrese sólo números'),
        minParticipantes: Yup.number()
            .required('Campo requerido')
            .positive('Número inválido')
            .integer('Número inválido')
            .typeError('Ingrese sólo números'),
    });

    return (
        <Formik
            initialValues={
                {
                    nombre: '', 
                    fechaInicio: '', 
                    fechaFin: '', 
                    tipo: 'simple', 
                    descripcion: '', 
                    numJugadoresEquipo: '', 
                    minParticipantes: '',
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
                        label="Nombre del torneo"
                        name="nombre"
                        type="text"
                    />
                </BForm.Group>
                <BForm.Group className="mb-3">
                    <TextInput
                        label="Fecha inicio"
                        name="fechaInicio"
                        type="text"
                        placeholder="dd/mm/aaaa"
                    />
                </BForm.Group>
                <BForm.Group className="mb-3">
                    <TextInput
                        label="Fecha fin"
                        name="fechaFin"
                        type="text"
                        placeholder="dd/mm/aaaa"
                    />
                </BForm.Group>
                <BForm.Group className="mb-3">
                    <BForm.Label htmlFor="tipo">Tipo de torneo</BForm.Label>
                    <Field as="select" name="tipo" className="form-select">
                        <option value="simple">Eliminación simple</option>
                        <option value="doble">Eliminación doble</option>
                        <option value="liga">Liga</option>
                    </Field>
                </BForm.Group>
                <BForm.Group className="mb-3">
                    <TextInput
                        label="Descripción"
                        name="descripcion"
                        type="text"
                        as="textarea"
                    />
                </BForm.Group>
                <BForm.Group className="mb-3">
                    <TextInput
                        label="Número de jugadores por equipo"
                        name="numJugadoresEquipo"
                        type="text"
                        placeholder="Individual: 1"
                    />
                </BForm.Group>
                <BForm.Group className="mb-3">
                    <TextInput
                        label="Mínimo de participantes"
                        name="minParticipantes"
                        type="text"
                    />
                </BForm.Group>
                <Button variant="success" type="submit">Crear Torneo</Button>
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
            {/* {meta.touched && meta.error ? (
                <BForm.Text className="text-muted">{meta.error}</BForm.Text>
            ) : null} */}
        </>
    );
}

export default FormTorneo;