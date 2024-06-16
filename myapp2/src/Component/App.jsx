import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Err from "./Error";
import Navbar from "./Navbar";
import User from "./User";
import Search from "./Search";

const App = () => {

    return (
        <>
            <Navbar />
            <Routes> {/* path mai jo mil jaye usko pehla render kradega, isse bachne ke liye exact use krte hai */}
                {/* <Route exact path="/" element={<About />} /> by default */}
                <Route exact="true" path="/" element={<About name="About" />} /> {/* agr props dikhana ho to aise kro */}
                {/* exact taki exact match kre tbhi dikhao */}
                <Route exact="true" path="/contact" element={<Contact />} />
                {/* colon Name - this means extra parameter dynamically add kr skte hai fetch krke */}
                <Route exact path="/user/:fname/:lname" element={<User />} />
                <Route exact path="/search" element={<Search />} />
                <Route path='/*' element={<Err />} />
                {/* <Route path="/*" element={<Navigate replace to="/" />} /> */}  {/* direct homepage pe aa jayega */}
            </Routes>
        </>
    );
};

export default App;

