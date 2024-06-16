import React, { useContext } from "react";
import { FirstName, LastName } from "./App2";

const ComB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <h1>My name is {fname} {lname}</h1>
    )
}

export default ComB;

