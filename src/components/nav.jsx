import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <Link className="navbar-brand" to="/">Jordan Johnson</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/about">About</Link>
                    <Link className="nav-item nav-link" to="/contact">Contact</Link>
                    <Link className="nav-item nav-link" to="/resume">Resume</Link>
                    <Link className="nav-item nav-link" to="/projects">Web Apps</Link>
                    <Link className="nav-item nav-link" to="/uofu">University of Utah</Link>
                    <Link className="nav-item nav-link" to="/slcc">Salt Lake Community College</Link>
                </div>
            </div>
        </nav>
    );
}