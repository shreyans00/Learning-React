import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const App = () => {
    const [cnt, upd] = useState(0);
    const inc = () => {
        upd(cnt + 1);
    };
    const dec = () => {
        upd(cnt - 1);
    };
    return (
        <>
            <div>
                <p>Counter : {cnt}</p>
                <Tooltip title="Increase">
                    <Button onClick={inc}><AddIcon /></Button>
                </Tooltip>
                <Tooltip title="Decrease">
                    <Button onClick={dec}><RemoveIcon /></Button>
                </Tooltip>
            </div>
        </>
    );
};

export default App;

