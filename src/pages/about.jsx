import React from 'react'
import Richfield from '../assets/pictures/richfield.JPG'
import Lake from '../assets/pictures/lake.JPG'
import Powell from '../assets/pictures/Powell.jpeg'
import SkynI from '../assets/pictures/Sky&I.JPG'
import Water from '../assets/pictures/water.jpeg'
import Dogs from '../assets/pictures/dogs.JPG'
import Snow from '../assets/pictures/snow.JPG'
import KarimNI from '../assets/pictures/KarimNI.JPG'


export default function About() {
    return (
        <div className="container">
            <br />
            <br />
            <div className="row">
                <div className="col">
                    <div className="card bg-transparent" style={{ width: 18 + 'em' }}>
                        <img src={Richfield} className="card-img-top" alt="Me" />
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-transparent" style={{ width: 18 + 'em' }}>
                        <div className="card-body">
                            <p style={{ color: 'white' }} className="card-text">I am Motivated and Fascinated about Living Life and Creating Software that improves our Quality of Life!</p>
                        </div>
                        <img src={SkynI} className="card-img-top" alt="Me" />
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-transparent" style={{ width: 18 + 'em' }}>
                        <img src={KarimNI} className="card-img-top" alt="Me" />
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
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