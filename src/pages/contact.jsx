import React from 'react'
import Jumbotron from '../components/Jumbotron'

export default function Contact() {
    return (
        <div className="container">
            <Jumbotron title="Connect With Me Anytime" />
            <div className="container">
                <div className="row">
                    <div className="col-6 container justify-content-center">
                        <form action="https://formspree.io/mnqgpjvd" method="POST">
                            <div className="form-group">
                                <label htmlFor="userName">Name</label>
                                <input type="text" className="form-control" id="userName" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="textArea">Your Message</label>
                                <textarea className="form-control" name="message" id="message" rows="6" placeholder="Message" />
                            </div>
                            <div className="col-sm d-flex justify-content-sm-center">
                                <button type="submit" className="btn btn-light">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}