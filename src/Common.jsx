import React from "react";
import { NavLink } from "react-router-dom";

const Common =(props)=>{
    return (
        <>
            <section id="header" className="d-flex align-items-center p-lg-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                <h1>{props.head}<br/> <strong className="text-info">React Project</strong></h1>
                                <h2 className="my-3">
                                    we are the team talented developers making websites
                                </h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn btn-outline-primary rounded-pill">{props.btnName}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 pt-lg-0 order-1 order-lg-1 header-img d-flex justify-content-center">
                                <img src={props.img} className="img-fluid animated w-450" alt="home image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Common;