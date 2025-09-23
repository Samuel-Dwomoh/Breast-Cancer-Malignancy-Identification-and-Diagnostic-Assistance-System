import React from "react";
import logo from "../assets/logo.png"

function Header(){



    return(
    <div className="flex mx-10 justify-between">

        <div className="flex items-center gap-x-4">
            <a href="#"><img src={logo} alt="logo" className="w-19" /></a>
            <h4 className="uppercase text-pink-500 font-semibold">Breast Cancer Malignancy Identification and Diagnostic Assistance System</h4>
        </div>

        <nav className="flex gap-3 items-center text-pink-500 font-semibold">
            <ul><a href="#">Diagnostic Interface</a></ul>
            <ul><a href="#">Results Dashboard</a></ul>
            <ul><a href="#">Clinical Evidence</a></ul>
        </nav>

    </div>)
}
export default Header;