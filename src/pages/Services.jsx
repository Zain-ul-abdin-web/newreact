import React from "react";
import Card from "../Card";
import cardData from "../cardData";

const Services =()=>{
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-10 mx-auto">
                        <div className="row pt-4 serv">
                            <h1 className="col-12 text-center">Our Services</h1>
                            {
                                cardData.map((val,ind)=>{
                                    return <Card key={ind} img={val.img} title={val.title}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
}
export default Services;