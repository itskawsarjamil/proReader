import React from 'react';
import { Nav } from '../components/Nav';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;