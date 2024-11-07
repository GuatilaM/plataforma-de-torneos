import { useEffect, useState } from "react";
import axios from "axios";

function ListTorneo() {
    const [torneos, setTorneos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/')
            .then(({ data }) => {
                setTorneos(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (torneos.length) {
        return(
            <div>
                {torneos[0].nombre}
            </div>
        );
    } else {
        return (
            <div>
                Sin torneos
            </div>
        )
    }
}

export default ListTorneo;