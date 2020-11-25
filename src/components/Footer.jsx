import React from 'react'

export default function Footer() {
    return (
        <div className="container">
            <br/>
            <div className="row align-items-center">
                <div className="col d-flex justify-content-center">
                    <h2><a target="_blank" rel="noopener noreferrer" href="https://github.com/JINJ95" className="badge mx-5 badge-info"><i
                        className="fab fa-github"></i></a></h2>
                    <h2><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jordan-johnson-ba745719b/"
                        className="badge mx-5 badge-info"><i className="fab fa-linkedin"></i></a></h2>
                    <h2><a href="https://www.facebook.com/jordanijohnson95/" rel="noopener noreferrer" className="badge mx-5 badge-info"><i
                        className="fab fa-facebook"></i></a></h2>
                </div>
            </div>
            <br/>
            <div className="row align-items-center justify-content-center">jordaninjohnson@gmail.com</div>
            <br/><br/><br/>
        </div>
    )
}