import React from "react";
import "../App.css"

const  RestorentCart=({info})=>{
    return (
        <div className="Card">
        <img className="cardimg"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+info.cloudinaryImageId}
        alt="imgage"
        />
        <h2>{info.name}</h2>
        <h4>{info.costForTwo}</h4>
        <p1>{info.name}</p1>
        <h5>{info.locality}</h5>
        </div>
    )
}

export default RestorentCart;