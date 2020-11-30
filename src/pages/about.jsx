import React from 'react'
import Richfield from '../assets/pictures/richfield.JPG'
import Lake from '../assets/pictures/lake.JPG'
import Powell from '../assets/pictures/Powell.jpeg'
import SkynI from '../assets/pictures/Sky&I.JPG'
import Water from '../assets/pictures/water.jpeg'
import Dogs from '../assets/pictures/dogs.JPG'
import Snow from '../assets/pictures/snow.JPG'
import KarimNI from '../assets/pictures/KarimNI.JPG'
import Jumbotron from '../components/Jumbotron'


export default function About() {
    return (
        <div className="container">
            <Jumbotron title="This is Jordan Johnson..." />
            <Jumbotron title="I work hard and play hard, everyday all day!" />
            <Jumbotron title='“Let’s go invent tomorrow instead of worrying about what happened yesterday.”' subtitle='– Steve Jobs' />
            <Jumbotron title="I Love Making All Kinds of Music!" subtitle="Check out the link to my SoundCloud!"/>
            <Jumbotron title="I am an Entrepreneaur!" subtitle="I am up for a good oppurtunity! Connect with me anytime!"/>
            <Jumbotron title="I want everyone to Live Life and Be Happy!" subtitle="No matter who you are or what you are doing, enjoy this moment as much as possible!=]"/>
            <Jumbotron title="I create Software" subtitle="I am majoring in Computer Science to build tools and use my knowledge to build an amazing future for all!" />
            <Jumbotron title="“Technology like art is a soaring exercise of the human imagination.”" subtitle='– Daniel Bell' />
            <Jumbotron title='Programming Languages, and Technologies!' subtitle="My Current Favorite Programming Languages and Technologies!" />
            <div className="row">
                <div className="col-4">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-info list-group-item-action active" id="list-Frontend-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Frontend</a>
                        <a className="list-group-item list-group-item-info list-group-item-action" id="list-Backend-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Backend</a>
                        <a className="list-group-item list-group-item-info list-group-item-action" id="list-More-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">More</a>
                    </div>
                </div>
                <div className="col-8">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-Frontend-list" style={{ fontSize: "300%" }}>
                        {`
                        | | HTML5 |
                        | CSS |
                        | React |
                        | JQuery |
                        | Javascript |
                        | ES6
                        || Bootstrap | |
                        `}</div>
                        <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-Backend-list" style={{ fontSize: "350%" }}>
                        {`
                        | | MySQL |
                        | MongoDB |
                        | NoSQL |
                        | PHP |
                        | Express.js | 
                        | Node.js |
                        | Handlebars | |
                        `}</div>
                        <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-More-list" style={{ fontSize: "350%" }}>
                        {`
                        | | Java |
                        | Python|
                        | Amazon Web Services |
                        | Google Firebase | |
                        `}</div>
                    </div>
                </div>
            </div>
            <Jumbotron title=" " subtitle=" " />
            <Jumbotron title="Fun Pictures from Jordan Johnson!" />
            <div className="row">
                <div className="col">
                    <div className="card bg-transparent" style={{ width: 18 + 'em', height: 18 +'em' }}>
                        <img src={Richfield} className="card-img-top" alt="Me" />
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-transparent" style={{ width: 18 + 'em' }}>
                        <img src={SkynI} className="card-img-top" alt="Me" />
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-transparent" style={{ width: 18 + 'em' }}>
                        <img src={KarimNI} className="card-img-top" alt="Me" />
                    </div>
                </div>
            </div>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Lake} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Lake Powell</h5>
                                <p>I Love seeing the World!.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Water} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Lake Powell</h5>
                                <p>Oasis!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Powell} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Lake Powell</h5>
                                <p>I Love taking a walk and exploring!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Dogs} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Scooby and Faith</h5>
                                <p>Fur babies!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Snow} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Park City, Utah</h5>
                                <p>I love Snowboarding!</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
        </div>
    )
}