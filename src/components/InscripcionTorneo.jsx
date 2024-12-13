import { Formik, Form } from "formik";
import {default as BForm} from "react-bootstrap/Form";
import TextInput from "./TextInput";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";

function InscripcionTorneo(props){
    const schema = Yup.object({
        nombreParticipante: Yup.string().required('Campo requerido'),
    });

    return(
        <Formik
            {...props}
            validationSchema={schema}
        >
            <Form noValidate>
                <BForm.Group className="my-3">
                    <TextInput
                        label={props.labelText}
                        name="nombreParticipante"
                        type="text"
                    />
                </BForm.Group>
                <Button variant='success' type='submit'>Inscribir</Button>
            </Form>
        </Formik>
    );   
}

export default InscripcionTorneo;