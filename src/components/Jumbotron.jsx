import React from "react"

function Jumbotron(props) {
    return(
    <div className="jumbotron">
        <h1 className="display-4">Welcome, {props.name}'s Portfolio!</h1>
        <p>I look forward to creating more software that improves our quality of life!</p>
        <hr className="my-4" />
        <p className="lead">Check out my projects!</p>
        <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
    </div>
    )
}


export default Jumbotron