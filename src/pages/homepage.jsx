import React from 'react'
import Jumbotron from '../components/Jumbotron';

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { date: new Date() };
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }

//     render() {
//         return (
//             <div style={{ color: "white" }}>
//                 <h2>{this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }
// }

export default function Homepage() {
    return (
        <div className="container">
            <Jumbotron title='"I am here for a good time! I create content, software, and full stack web applications in order to improve our quality of life!"' subtitle='- Jordan Johnson' />
            <br/><br/><br/><br/>
            {/* <Jumbotron title="Jordan Johnson" subtitle="Full-Stack Web Developer" /> */}
            <Jumbotron title='“Let’s go invent tomorrow instead of worrying about what happened yesterday.”' subtitle='– Steve Jobs' />
            {/* <Clock /> */}
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}