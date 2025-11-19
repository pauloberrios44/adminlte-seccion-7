import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import Kpis from './components/kpis';

function Dashboard() {
    return (
        <div>
            <NavBarPrincipal/>
            <SideMenu/>
            <Kpis/>
        </div>
    );
}

export default Dashboard;