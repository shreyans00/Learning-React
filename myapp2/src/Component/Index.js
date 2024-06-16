import React from 'react';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const Index = () => {
    return (
        <>
            <BrowserRouter>
                <App /> {/* jin sbko render krana chahte hai unko browserRouter ke andr rakhna hai*/}
            </BrowserRouter>
        </>
    );
};

export default Index;