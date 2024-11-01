import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';

function FormTorneo(){
    return (
        <Formik
            initialValues={
                {
                    nombre: '', 
                    fechaInicio: '', 
                    fechaFin: '', 
                    tipo: '', 
                    descripcion: '', 
                    numJugadoresEquipo: '', 
                    minEquipos: '',
                }
            }
            validationSchema={
                Yup.object({
                    nombre: Yup.string().required('Campo Requerido'),
                    fechaInicio: Yup.date().default(() => new Date()),
                    fechaFin: Yup.date().default(() => new Date()),
                    tipo: Yup.string().required('Campo requerido'),
                    descripcion: Yup.string().required('Campo requerido'),
                    numJugadoresEquipo: Yup.number().required('Campo requerido').positive('Número inválido').integer('Número inválido'),
                    minEquipos: Yup.number().required('Campo requerido').positive('Número inválido').integer('Número inválido'),
                })
            }
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <TextInput 
                    label="Nombre"
                    name="nombre"
                    type="text"
                    placeholder="Nombre del torneo" 
                />
                <TextInput
                    label="Fecha de inicio"
                    name="fechaInicio"
                    type="text"
                    placeholder="Fecha de inicio"
                />
                <TextInput
                    label="Fecha final"
                    name="fechaFin"
                    type="text"
                    placeholder="Fecha final"
                />
                <TextInput
                    label="Tipo de torneo"
                    name="tipo"
                    type="text"
                    placeholder="Tipo de torneo"
                />
                <TextInput
                    label="Descripcion"
                    name="descripcion"
                    type="text"
                    placeholder="Descripcion"
                />
                <TextInput
                    label="Número de jugadores por equipo"
                    name="numJugadoresEquipo"
                    type="number"
                />
                <TextInput
                    label="Mínimo número de equipos"
                    name="minEquipos"
                    type="number"
                />
            </Form>
        </Formik>
    );
}

function TextInput({label, ...props}) {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </div>
    );
}

export default FormTorneo;