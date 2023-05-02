import React from 'react';
import Footer from '../pages/Share/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Share/Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
              <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;