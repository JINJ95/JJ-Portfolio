import React from 'react'
import { withRouter } from 'react-router-dom'
import worldMusic from '../../../assets/pictures/Music1080ePortfolio.pdf'
import Jumbotron from '../../../components/Jumbotron'

function Music() {
    return (
        <div className="container">
        <Jumbotron title="Music 1080: World Music" subtitle="Signature Assignment" />
        <Jumbotron title="ePortfolio Signature Assignment Overview" subtitle="Salt Lake Community College Requirements:" />
        <div class="media">
            <iframe title="Comm" src={worldMusic} width="100%" height="800" style={{ border: "none" }} />
        </div>
        <div class="media-body">
            <Jumbotron title="World Music ePortfolio Signature Assignment" subtitle="by: Jordan Johnson" />
            <div class="media">
                <iframe title="Comm" src={worldMusic} width="100%" height="800" style={{ border: "none" }} />
            </div>
        </div>
    </div>
    );
}
export default withRouter(Music)