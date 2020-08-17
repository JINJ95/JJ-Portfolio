import React from 'react'
import { withRouter } from "react-router-dom"
import Jumbotron from '../components/Jumbotron'

function Education({ history }) {
    function goto() {
        history.push(`/projects`)
    }

    return (
        <div>
            <Jumbotron title="University of Utah Alumni" subtitle="Lifelong Learner"/>
            <button type="button" className="btn btn-secondary" onClick={() => goto()}>Projects</button>
        </div>
    );
}

export default withRouter(Education)