import React, { useState } from "react";

const Contact =()=>{
    let [inputs,setInputs] =useState(
        {
            fName:"",
            pNum:"",
            eMail:"",
            message:""
        }
    )
    let data =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInputs((pre)=>{
            return {
                ...pre,
                [name]: value
            }
        })
    }
    let submit =(e)=>{
        e.preventDefault()
        alert(`${inputs.fName} ${inputs.pNum} ${inputs.eMail} ${inputs.message}`)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="text-center">
                            <h1>Contact Us</h1>
                            <form onSubmit={submit} className="row g-3 needs-validation text-start d-flex justify-content-center" novalidate>
                                <div className="col-md-8">
                                    <label for="validationCustom01" className="form-label">Full name</label>
                                    <input name="fName" onChange={data} type="text" className="form-control" id="validationCustom01" placeholder="Enter your name" required/>
                                    <div className="valid-feedback">
                                    Looks good!
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <label for="validationCustom02" className="form-label">Phone number</label>
                                    <input name="pNum"  onChange={data}type="text" className="form-control" id="validationCustom02" placeholder="Phone number" required/>
                                    <div className="valid-feedback">
                                    Looks good!
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <label for="validationCustom02" className="form-label">Phone number</label>
                                    <input name="eMail" onChange={data} type="text" className="form-control" id="validationCustom02" placeholder="name@gmail.com" required/>
                                    <div className="valid-feedback">
                                    Looks good!
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <label for="validationCustom02" className="form-label">Message</label>
                                    <textarea name="message" onChange={data} type="text" className="form-control min-width" id="validationCustom02" placeholder="" required/>
                                    <div className="valid-feedback">
                                    Looks good!
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;