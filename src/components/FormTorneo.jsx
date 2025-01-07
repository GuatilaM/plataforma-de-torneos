import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import Button  from "react-bootstrap/Button";
import {default as BForm} from "react-bootstrap/Form";
import parseDateInput from "../utils/formatoFecha";
import TextInput from "./TextInput";

function FormTorneo(props){
    const hoy = new Date();
    const tipoDeAccion = props.esCrear ? "Crear" : "Editar"; 

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
        <div>
            <h3 className="h3 my-4">{tipoDeAccion} torneo</h3>
            <Formik
                {...props}
                validationSchema={schema}
            >
                <Form noValidate>
                    <BForm.Group className="my-3">
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
                    <Button variant="success" type="submit">{tipoDeAccion} Torneo</Button>
                </Form>
            </Formik>
        </div>
    );
}

export default FormTorneo;