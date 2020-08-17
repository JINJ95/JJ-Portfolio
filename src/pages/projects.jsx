import React from 'react'
import { withRouter } from "react-router-dom"
import ProjectContainer from "../components/ProjectContainer"
import Jumbotron from '../components/Jumbotron'

function Projects({ history }) {
    // function goto() {
    //     history.push(`/education`)
    // }

    return (
        <div>
            <Jumbotron title="Web Applications" />
            {/* <button type="button" className="btn btn-secondary" onClick={() => goto()}>University Education</button> */}
            <ProjectContainer />
        </div>
    );
}

export default withRouter(Projects)