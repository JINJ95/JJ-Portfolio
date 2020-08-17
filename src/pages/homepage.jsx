import React from 'react'
import Jumbotron from '../components/Jumbotron';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div style={{color: "white" }}>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default function Homepage() {
    return (
        <div className="container">
            <Jumbotron title="Welcome" subtitle="Thank you for stopping by I look forward to working with you! =]"/>
            <Clock />
        </div>
    );
}