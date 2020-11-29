import React from 'react'
import Overview from '../../../assets/pictures/CommEportfolioSignatureAssignmentOverview.pdf'
import { withRouter } from 'react-router-dom'
import Jumbotron from '../../../components/Jumbotron'

function Myself() {
    return (
        <div className="container">
            <Jumbotron title="Communications 1010" subtitle="Myself as a Communicator Project" />
            <Jumbotron title="ePortfolio Signature Assignment Overview" subtitle="Salt Lake Community College Requirements:" />
            <div class="media">
                <iframe title="Comm" src={Overview} width="100%" height="800" style={{ border: "none" }} />
            </div>
            <div class="media-body">
                <Jumbotron title="Myself As a Communicator" subtitle="ePortfolio Signature Assignment: Reflections / Essay" />
                <h5 class="mt-0"><p>For this part of my ePortfolio project I submitted a collection of reflections on some of my communication skills
                I learned about in this class. These reflection prompts have been assigned throughout Fall semester of 2020.
                </p>
                </h5>
                <div id="reflections">
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Reflection #1: Perception and Self
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                Reflection: Perception and Self
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Reflection #2: Verbal Communication
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    Reflection 2 Verbal Communication
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Reflection #3: Listening
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    Listening Reflection
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Reflection #4: Nonverbal Communication
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    Nonverbal Communication Reflection
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Jumbotron title="Myself as a Communicator Essay" subtitle="by: Jordan Johnson" />
            <div class="media">
                <iframe title="Comm" src={Overview} width="100%" height="800" style={{ border: "none" }} />
            </div>
            </div>
        </div>
    );
}
export default withRouter(Myself)