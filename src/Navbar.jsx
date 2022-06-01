import React,{useState} from "react";
import { NavLink,Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

const Navbar =()=>{
    let nav =({isActive})=>{
        console.log(isActive)
        return {
            borderBottom:isActive? "1px solid black":"none",
        }
    }
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand text-capitalize" to="/">React Project</NavLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link active" style={nav} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" style={nav} to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" style={nav} to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" style={nav} to="/contact">Contact</NavLink>
                            </li>
                            
                        </ul>
                        
                        </div>
                    </div>
                    </nav>
            </div>
            </div>
        </div>
                    </>
    )
}
export default Navbar;