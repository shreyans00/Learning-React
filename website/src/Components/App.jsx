import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Navigate replace to="/" />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;