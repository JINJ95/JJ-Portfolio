import React from 'react'
import resume from '../assets/pictures/Jordan Johnson Resume 2020.pdf'
import Jumbotron from '../components/Jumbotron'

export default function Resume() {
    return (
        <div className="container">
            <Jumbotron title="Resume"/>
            <div className="card card-body">
                <iframe title="Resume" src={resume} width="100%" height="800" style={{border:"none"}}/>
            </div>
        </div>
    );
}