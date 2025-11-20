import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import ListaUsuarios from './components/lista_usuarios';

function ListadoUsuarios() {

    return (
        <div>
            <NavBarPrincipal />
            <SideMenu />
            <ListaUsuarios/>
        </div>


    );
}


export default ListadoUsuarios;