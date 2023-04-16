import React from 'react'
import { Link } from "react-router-dom";

import './App.css'
import BackgroundImage from './assets/Header.svg'



function LandingPage(){
    return (
        <header style={ HeaderStyle }>
            <div className="box">
                <Link to="/login">
                    <button className="primary-button">Log in</button>
                </Link>
                {/* <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>Register </span></button>
                </Link> */}
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
export default LandingPage