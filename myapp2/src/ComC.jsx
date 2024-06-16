import React from "react";
import { FirstName, LastName } from "./App2";

const ComC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {  // new consumer ko sirf function hi chahiye
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <h1>My name is {fname} {lname}</h1>
                                );
                            }}
                        </LastName.Consumer>
                    );
                }}
            </FirstName.Consumer>
        </>
    );
};

export default ComC;

