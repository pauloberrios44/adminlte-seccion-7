import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function FormUsuarios() {

    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [role, setRole] = useState('');
    const { id } = useParams();

    useEffect(
        () => {
            if (id) {
                Axios.get('http://localhost:3001/api/usuarios/' + id)
                    .then((response) => {
                        setName(response.data.name);
                        setAbout(response.data.about);
                        setRole(response.data.role);
                    })
                    .catch((error) => console.log(error));
            }
        }, [id]
    );

    // console.log(response.data);

    return (
        <div>
            Formulario de Usuarios {id}, {name}, {about}, {role}
        </div>
    );
}

export default FormUsuarios;