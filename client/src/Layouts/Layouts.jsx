import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../commonComponents/Menu.jsx';
import Nav from '../commonComponents/Nav.jsx';

export default function Layout() {
    return (
        <>
            <Menu />
            <div className="container mx-auto bg-white min-h-screen flex justify-center items-center">

                <Outlet />
            </div>
            <Nav />
        </>
    );
}