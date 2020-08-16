import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Jordan Johnson</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/about">About</Link>
                    <Link className="nav-item nav-link" to="/education">Education</Link>
                    <Link className="nav-item nav-link" to="/contact">Contact</Link>
                    <Link className="nav-item nav-link" to="/projects">Projects</Link>
                </div>
            </div>
        </nav>
    );
}