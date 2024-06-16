import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Clock from 'react-digital-clock';

const DigClk = () => {
    return (
        <>
            <h1 className="text-capitalize text-center mt-5 text-danger">Select the clock to see</h1>
            <Clock />
        </>
    );
};

export default DigClk;