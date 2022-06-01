import React from "react";

const Footer =()=>{
    let year =new Date().getFullYear()
    return (
        <>
            <div className="bg-light text-center">
                <p>© {year} ReactProject. All reserved copyright | Term and Condition</p>
            </div>
        </>
    )
}
export default Footer; 