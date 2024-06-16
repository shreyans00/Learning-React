import React from 'react';
import Common from './Common';
import web from "../Img/about.jpg";

const About = () => {
    return (
        <>
            <Common name='About' imgsrc={web} btname="Know more" visit="/service" />
        </>
    );
};

export default About;