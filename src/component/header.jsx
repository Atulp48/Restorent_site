import React, { useState } from "react";
import Title from "./Title";
import "../App.css"


const Header = () => {

    // const LoggedInuser=()=>{
    //     return false;
    // }

    const [isLoggedIn,setisLoggedIn]=useState(true);

    return (
        <div className="header">
        <Title/> 
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            {isLoggedIn? <button className="logged" onClick={()=>{setisLoggedIn(false)}}>Logout</button>
            :
            <button className="logged" onClick={()=>{setisLoggedIn(true)}}>Login</button>}
        </div>
    )
}

export default Header;