import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppInner from './Component/Index';
import App2 from './App2';
import DigClk from './DigClk';
import Useeffect from './Useeffect';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <AppInner />
    </>
);


// ReactDOM.createRoot(<AppInner />, document.getElementById('root'));
