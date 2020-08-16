import React from 'react'
import { withRouter } from "react-router-dom"

function Projects({ history }) {
    function goto() {
        history.push(`/education`)
    }

    return (
        <div>
            <h1>Projects</h1>
            <button type="button" className="btn btn-secondary" onClick={() => goto()}>University Education</button>
        </div>
    );
}

export default withRouter(Projects)