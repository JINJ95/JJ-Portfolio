import React from 'react';

export default function Project(props) {
    return (
        <div className="container">
            <div className="card" style={{ width: 18 + 'rem' }}>
                <div className="card-body">
                    <h4 className="card-title" style={{ color: "black" }}>{props.title}</h4>
                    <h5 className="card-subtitle mb-2 text-muted">{props.subtitle}</h5>
                    <img src={props.imageLink} className="card-img-top" alt={props.title} />
                    <p className="card-text" style={{color: "black"}}>{props.info}</p>
                    <a target="_blank" rel="noopener noreferrer" href={props.githubLink} className="card-link">Repo</a>
                    <a target="_blank" rel="noopener noreferrer" href={props.deployedLink} className="card-link">Deployed App</a>
                </div>
            </div>
        </div>
    )
}