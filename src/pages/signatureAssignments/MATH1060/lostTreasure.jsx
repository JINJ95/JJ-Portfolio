import React from 'react'
import { withRouter } from 'react-router-dom'
import lostTreasure from '../../../assets/pictures/lostTreasure.pdf'
import jjTreasure from '../../../assets/pictures/Math-1060-LostTreasure.pdf'
import Jumbotron from '../../../components/Jumbotron'

function LostTreasure() {
    return (
        <div className="container">
            <Jumbotron title="Math 1060: Trigonometry" subtitle="Lost Tresure!: Signature Assignment" />
            <Jumbotron title="ePortfolio Signature Assignment Overview" subtitle="Salt Lake Community College Requirements:" />
            <div class="media">
                <iframe title="Comm" src={lostTreasure} width="100%" height="800" style={{ border: "none" }} />
            </div>
            <div class="media-body">
                <Jumbotron title="Lost Treasure!" subtitle="by: Jordan Johnson" />
                <div class="media">
                    <iframe title="Comm" src={jjTreasure} width="100%" height="800" style={{ border: "none" }} />
                </div>
            </div>
        </div>
    );
}
export default withRouter(LostTreasure)