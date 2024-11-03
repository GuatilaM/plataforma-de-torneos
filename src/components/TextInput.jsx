import { useField } from "formik";
import {default as BForm} from "react-bootstrap/Form";

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

export default TextInput;