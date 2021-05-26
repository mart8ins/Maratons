import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

import "./Header.css";


function Header() {
    return (
        <div className="header">
            <div className="header_left center"><p><Link to="/">Izskrien Rīgu!</Link></p></div>
            <div className="header_right center">
                <Navigation />
            </div>
        </div>
    )
}

export default Header;