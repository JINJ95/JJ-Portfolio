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
                <h2>Full Stack Web Development Certificate</h2>
                <br/>
                <iframe title="Certificate" src={Certificate} width="35%" height="400" style={{border:"none"}}/>
                {/* <button type="button" className="btn btn-secondary" onClick={() => goto()}>Projects</button> */}
            </div>
        </div>
    );
}

export default withRouter(Education)