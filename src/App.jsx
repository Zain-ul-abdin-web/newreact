import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import { Navigate, Route, Routes } from "react-router-dom";
const App =()=>{
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/*" element={<Navigate to="/"/>}/>
            </Routes>
            <Footer/>
        </>
    )
}
export default App;