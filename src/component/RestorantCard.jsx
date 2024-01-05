import React from "react";
import "../App.css"

const  RestorentCart=({id,imageId,action,accessibility})=>{
    return (
        <div className="Card">
        <img className="cardimg"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+imageId}
        alt="imgage"
        />
        <h2>{action.text}</h2>
        <h4>{accessibility.altText}</h4>
       
        </div>
    )
}

export default RestorentCart;