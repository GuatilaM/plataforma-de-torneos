import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

//Formulario que en adelante se podría usar para
//creación de usuarios en la plataforma
function FormUsuario() {
    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={
                Yup.object({
                    email: Yup.string().email('Email inválido').required('Campo requerido'),
                    password: Yup.string().required('Campo Requerido').min(4, 'La contraseña debe tener al menos 4 caracteres')
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
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" />
                <ErrorMessage name="email" />
                
                <label htmlFor="password">Contraseña</label>
                <Field name="password" type="password" />
                <ErrorMessage name="password" />

                <button type="submit">Enviar</button>
            </Form>
        </Formik>
    );
}

export default FormUsuario;