import React, { useState, useEffect } from 'react';

const App = () => {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(() => {
        alert("Clicked");
        document.title = `Clicked ${num} & ${num2}`
    }, [num]); // num specify krne se sirf num click hoga tbhi ye alert aaega, else kuch bhi hota to alert aa jata

    const func1 = () => {
        setNum(num + 1);
    };

    return (
        <>
            <button onClick={func1}>
                click me {num}
            </button>
            <button onClick={() => {
                setNum2(num2 + 1);
            }}>
                click me {num2}
            </button>
        </>
    );
};

export default App;

