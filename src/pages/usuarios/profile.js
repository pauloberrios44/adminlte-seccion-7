import React from 'react';
import NavBarPrincipal from '../components/navbar';
import SideMenu from '../components/sidemenu';
import FormUsuarios from './form_usuarios';

function PerfilUsuario() {
    return (
        <div>
            <NavBarPrincipal/>
            <SideMenu/>
            <FormUsuarios/>
        </div>
    );
}

export default PerfilUsuario;