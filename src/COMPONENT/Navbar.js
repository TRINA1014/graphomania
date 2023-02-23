//FUNCTIONAL COMPONENT
//STEP1 -- IMPORT REACT
import React from "react";
import { Link } from "react-router-dom"
//STEP2 -- CREATE FUNCTIONAL COMPONENT
function Navbar(){
    return(
        <nav>
            <Link to="/">HOME |</Link>
            <Link to="/userreg">REG |</Link>
            <Link to="/userlogin">LOGIN |</Link>
            <Link to="/contactus">CONTACT US |</Link>
            <Link to="/adminlogin">ADMIN LOGIN |</Link>

        </nav>
    )
}

//STEP3 -- EXPORT IT TO USE IT
export default Navbar