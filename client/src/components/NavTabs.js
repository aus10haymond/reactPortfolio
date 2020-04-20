import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/nav.css";

function NavTabs() {
    const location = useLocation();

    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link to="/about" className={location.pathname === "/about" ? "nav-link active btn btn-dark" : "nav-link"}>
                    ABOUT
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active btn btn-dark" : "nav-link"}>
                    PROJECTS
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active btn btn-dark" : "nav-link"}>
                    CONTACT
                </Link>
            </li>
        </ul>
    )
    
}

export default NavTabs;