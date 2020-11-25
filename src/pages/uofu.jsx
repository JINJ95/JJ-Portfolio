import React from 'react'
import { withRouter } from "react-router-dom"
import Jumbotron from '../components/Jumbotron'
import Certificate from '../assets/pictures/Certificate.pdf'

function Education({ history }) {
    // function goto() {
    //     history.push(`/projects`)
    // }

    return (
        <div className="container">
            <div>
                <Jumbotron title="University of Utah" subtitle="Current Student BS in Computer Science" />
                <Jumbotron title="Full Stack Web Development Certificate" subtitle="August 2020" />
                <iframe title="Certificate" src={Certificate} width="35%" height="400" style={{border:"none"}}/>
                <Jumbotron title="" subtitle="" />
            </div>
        </div>
    );
}

export default withRouter(Education)