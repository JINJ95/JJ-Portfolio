import React from 'react'
import { withRouter } from 'react-router-dom'
import astronomyConvo from '../../../assets/pictures/astronomyConvo.pdf'
import ePortfolioOverview from '../../../assets/pictures/astronomyEPortfolio.pdf'
import Jumbotron from '../../../components/Jumbotron'

function Astronomy() {
    return (
        <div className="container">
            <Jumbotron title="PHYS 1040: Elementary Astronomy" subtitle="Signature Assignment" />
            <Jumbotron title="ePortfolio Astronomy Conversation Overview" subtitle="Salt Lake Community College Requirements:" />
            <div class="media">
                <iframe title="Comm" src={ePortfolioOverview} width="100%" height="800" style={{ border: "none" }} />
            </div>
            <div class="media-body">
                <Jumbotron title="Astronomy Conversation" subtitle="by: Jordan Johnson" />
                <div class="media">
                    <iframe title="Comm" src={astronomyConvo} width="100%" height="800" style={{ border: "none" }} />
                </div>
            </div>
        </div>
    );
}
export default withRouter(Astronomy)