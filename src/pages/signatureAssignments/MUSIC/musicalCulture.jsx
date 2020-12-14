import React from 'react'
import { withRouter } from 'react-router-dom'
import worldMusic from '../../../assets/pictures/Music1080ePortfolio.pdf'
import powerpoint from '../../../assets/pictures/printhandler.ashx.pdf'
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
                <Jumbotron title="Reflection"
                    subtitle="I had such a great time researching the musical culture of my ancestors throughout this assignment! I am truly amazed by the rich history of the Middle East. Music culture and instrument engineering in the Middle East is unique and has influenced music culture around the world. The Middle East is so important to the history of our species in many ways. I really appreciate the oppurtunity this assignment gave me to learn more about my family's heritage and the music culture in the Middle East. I look forward to creating music using instruments from the Middle East and to continue learning everything I can about Middle Eastern Music!" />
                <Jumbotron title="Music in The Middle East" subtitle="by: Jordan Johnson" />
                <div class="media">
                    <iframe title="Music in The Middle East" src={powerpoint} width="100%" height="800" style={{ border: "none" }} />
                </div>
                {/* <Jumbotron title="Download Presentation" subtitle="Music In The Middle East! by: Jordan Johnson" />
                <a href={powerpoint} download="Music In The Middle East.pdf"> Click here to Download </a> */}
                <Jumbotron title="" subtitle="" />

            </div>
        </div>
    );
}
export default withRouter(Music)