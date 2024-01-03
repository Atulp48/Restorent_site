import React from "react";
import Title from "./Title";
import "../App.css"


const Header = () => {
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
        </div>
    )
}

export default Header;