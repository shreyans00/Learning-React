import React, { createContext } from 'react';
import CompA from "./ComA";

const FirstName = createContext(); // isse data pass kr ske
const LastName = createContext();

const App = () => {
    return (
        <>
            <FirstName.Provider value={"Shreyans"}> {/* provider uss data ko pahuchaye */}
                <LastName.Provider value={"Raj"}>
                    <CompA /> {/* component provider ke bich mai hoga */}
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
};

export default App;
export { // ek se jyada ko import/export krte hai to curly braces use krna prta hai
    FirstName, LastName
};


