import { Formik, Form } from "formik";
import {default as BForm} from "react-bootstrap/Form";
import TextInput from "./TextInput";

function InscripcionTorneo(){
    return(
        <Formik>
            <Form noValidate>
                <BForm.Group className="mt-3">
                    <TextInput
                        label="Nombre"
                        name="nombre"
                        type="text"
                    />
                </BForm.Group>
            </Form>
        </Formik>
    );   
}

export default InscripcionTorneo;