import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    ABOUT
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
                    PROJECTS
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    CONTACT
                </Link>
            </li>
        </ul>
    )
    
}

export default NavTabs;