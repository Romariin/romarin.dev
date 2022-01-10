import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";

import Home from './Home/homeIndex';
import NotFound from './NotFound/notFoundIndex';
import Footer from './Footer/footerIndex';
import Navbar from "./Navbar/navbarIndex";
import Tech from "./Tech/techIndex"
import Soon from "./Soon/soonIndex";


class myRoutes extends React.Component {

    render() {
        return (
            <Routes>
                <Route exact path="/" element={
                    <>
                        <Navbar/>
                        <Home/>
                        <Footer/>
                    </>
                }/>
                <Route exact path="/home" element={<Navigate to="/"/>}/>

                <Route exact path="/meth" element={
                    <>
                        <Navbar/>
                        <Soon/>
                        <Footer/>
                    </>
                }/>
                <Route exact path="/tech" element={
                    <>
                        <Navbar/>
                        <Tech/>
                        <Footer/>
                    </>
                }/>
                <Route exact path="/hum" element={
                    <>
                        <Navbar/>
                        <Soon/>
                        <Footer/>
                    </>
                }/>
                <Route path="*" element={<><NotFound/></>}/>
            </Routes>
        );
    }
}

export default myRoutes;