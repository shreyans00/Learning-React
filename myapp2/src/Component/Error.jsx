import React from "react";
import { NavLink } from "react-router-dom";

const Err = () => {
    return (
        <>
            <h1>404 Error</h1>
            <p>This page is not found</p>
            <NavLink to="/">Go Back to homepage</NavLink>
        </>
    );
};

export default Err;

