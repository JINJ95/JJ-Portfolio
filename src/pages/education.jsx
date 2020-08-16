import React from 'react'
import { withRouter } from "react-router-dom"

function Education({ history }) {
    function goto() {
        history.push(`/projects`)
    }

    return (
        <div>
            <h1>University Education</h1>
            <button type="button" className="btn btn-secondary" onClick={() => goto()}>Projects</button>
        </div>
    );
}

export default withRouter(Education)