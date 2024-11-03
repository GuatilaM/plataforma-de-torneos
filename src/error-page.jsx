import Alert from "react-bootstrap/Alert";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Alert variant="warning">
        Ups...algo salió mal
    </Alert>
  );
}