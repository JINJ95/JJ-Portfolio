import React from 'react'

export default function Contact() {
    return (
        <div className="container">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm d-flex justify-content-sm-center">
                        <h2 class="py-3">Connect With Me Anytime!</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 container justify-content-center">
                        <form action="https://formspree.io/mnqgpjvd" method="POST">
                            <div class="form-group">
                                <label for="userName">Name</label>
                                <input type="text" class="form-control" id="userName" name="name" placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <label for="textArea">Your Message</label>
                                <textarea class="form-control" name="message" id="message" rows="6" placeholder="Message" />
                            </div>
                            <div class="col-sm d-flex justify-content-sm-center">
                                <button type="submit" class="btn btn-light">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}