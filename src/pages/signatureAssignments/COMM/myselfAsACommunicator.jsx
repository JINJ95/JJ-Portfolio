import React from 'react'
import Overview from '../../../assets/pictures/CommEportfolioSignatureAssignmentOverview.pdf'
import { withRouter } from 'react-router-dom'
import Jumbotron from '../../../components/Jumbotron'
import myselfCommunicator from '../../../assets/pictures/MyselfAsACommunicator.pdf'

function Myself() {
    return (
        <div className="container">
            <Jumbotron title="Communications 1010" subtitle="Myself as a Communicator Project" />
            <Jumbotron title="ePortfolio Signature Assignment Overview" subtitle="Salt Lake Community College Requirements:" />
            <div class="media">
                <iframe title="Comm" src={Overview} width="100%" height="800" style={{ border: "none" }} />
            </div>
            <div class="media-body">
                <Jumbotron title="Myself as a Communicator" subtitle="by: Jordan Johnson" />
            <div class="media">
                <iframe title="Comm" src={myselfCommunicator} width="100%" height="800" style={{ border: "none" }} />
            </div>
            </div>
        </div>
    );
}
export default withRouter(Myself)