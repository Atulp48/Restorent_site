import React from "react";
import "../App.css"
import Loading from "./img/logodd.png"


const Loader=()=>{
    return(
        <div className="body">
            {Array(20)
            .fill("")
            .map((e,index)=>(
                <h1 key={index} className="shimmerCard">
                <img className="LOADIMG"
                src={Loading}
               alt="loading"/>
                </h1>
            ))}
        </div>
    )
}

export default Loader;