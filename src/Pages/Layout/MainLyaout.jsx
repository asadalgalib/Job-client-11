import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import Footer from '../../Shared/Footer';

const MainLyaout = () => {
    return (
        <div className='lg:px-20 md:px-10 px-4 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLyaout;