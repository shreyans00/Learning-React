import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../Img/home.jpg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common name="Home" imgsrc={web} btname="Get started" visit="/service" />
        </>
    );
};

export default Home;