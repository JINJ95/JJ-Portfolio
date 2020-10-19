import React from 'react'
import { withRouter } from "react-router-dom"
import Jumbotron from '../components/Jumbotron'

function Education({ history }) {
    // function goto() {
    //     history.push(`/projects`)
    // }

    return (
        <div className="container">
            <div>
                <Jumbotron title="Salt Lake Community College" subtitle="Associate of Science in Computer Science" />
                <h1>Completed Courses</h1>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Subject</th>
                            <th scope="col">Course</th>
                            <th scope="col">Title</th>
                            <th scope="col">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>CSIS</td>
                            <td>2420</td>
                            <td>Algorithms and Data Structures</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>CSIS</td>
                            <td>1430</td>
                            <td>Internet and XHTML Fundamentals</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>MATH</td>
                            <td>1210</td>
                            <td>Calculus I</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>CSIS</td>
                            <td>2810</td>
                            <td>Computer Architecture</td>
                            <td>B-</td>
                        </tr>
                        <tr>
                            <td>CSIS</td>
                            <td>2440</td>
                            <td>Web Programming</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>MATH</td>
                            <td>1220</td>
                            <td>Calculus II</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>CSIS</td>
                            <td>1550</td>
                            <td>SQL Programming</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>ANTH</td>
                            <td>1030</td>
                            <td>Intro to Archaeology</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>FLM</td>
                            <td>1070</td>
                            <td>Film and Culture</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>HLAC</td>
                            <td>1030</td>
                            <td>Kickboxing</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>HLAC</td>
                            <td>1350</td>
                            <td>Scuba I</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>PHIL</td>
                            <td>1000</td>
                            <td>Intro to Philosophy</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>ASL</td>
                            <td>1010</td>
                            <td>Beginning ASL I</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>ENGL</td>
                            <td>1010</td>
                            <td>Intro to Writing</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>HIST</td>
                            <td>1700</td>
                            <td>American Civilization</td>
                            <td>B+</td>
                        </tr>
                        <tr>
                            <td>MATH</td>
                            <td>1010</td>
                            <td>Intermediate Algebra</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>CSIS</td>
                            <td>1400</td>
                            <td>Fundamentals of Programming</td>
                            <td>B+</td>
                        </tr>
                        <tr>
                            <td>ENGL</td>
                            <td>2010</td>
                            <td>Intermediate Writing</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>CSIS</td>
                            <td>1030</td>
                            <td>Foundations of CS</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>MATH</td>
                            <td>1050</td>
                            <td>College Algebra</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>SOC</td>
                            <td>1010</td>
                            <td>Intro to Sociology</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>CSIS</td>
                            <td>1410</td>
                            <td>Object Oriented Programming</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>MATH</td>
                            <td>1060</td>
                            <td>Trigonometry</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>BIOL</td>
                            <td>1610 / 1615</td>
                            <td>College Biology</td>
                            <td>C</td>
                        </tr>
                        <tr>
                            <td>CHEM</td>
                            <td>1110 / 1115</td>
                            <td>Elementary Chemistry</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>FHS</td>
                            <td>1500</td>
                            <td>Lifespan of Human Development</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>BIOL</td>
                            <td>2320 / 2325</td>
                            <td>Human Anatomy</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>MATH</td>
                            <td>1040</td>
                            <td>Statistics</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>MUSC</td>
                            <td>1900</td>
                            <td>Ableton</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>MA</td>
                            <td>1100</td>
                            <td>Medical Terminology</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>COMM</td>
                            <td>1010</td>
                            <td>Elements of Effective Communication</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>MUSC</td>
                            <td>1080</td>
                            <td>World Music</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>PHYS</td>
                            <td>1040</td>
                            <td>Elementary Astronomy</td>
                            <td>B</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default withRouter(Education)