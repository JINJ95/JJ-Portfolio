import React from 'react'
import resume from '../assets/Jordan Johnson Resume 2020.pdf'

export default function Resume() {
    return (
        <div className="container">
            <h1>Resume</h1>
            <div className="card card-body">
                <iframe title="Resume" src={resume} width="100%" height="800" style={{border:"none"}}/>
            </div>
        </div>
    );
}