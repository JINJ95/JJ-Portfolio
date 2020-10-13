import React from 'react';
import Project from './Project'
import MyAutoSpace from '../assets/pictures/myAutoSpace.png'
import BudgetTracker from '../assets/pictures/Budget-Tracker.png'
import googleBooks from '../assets/pictures/googleBooks.png'
import employeeDirectory from '../assets/pictures/employeeDirectory.png'
import WorkoutTracker from '../assets/pictures/WorkoutTracker.png'
import employeeTracker from '../assets/pictures/employeeTracker.png'
import teamSummary from '../assets/pictures/teamSummary.gif'
import readme from '../assets/pictures/readmeGenerator.gif'
import burgers from '../assets/pictures/burgers.png'
import noteTaker from '../assets/pictures/noteTaker.gif'
import strtUP from '../assets/pictures/strtup.png'
import weatherDashboard from '../assets/pictures/NewWeatherDashboard.png'
import workDayScheduler from '../assets/pictures/NewWorkDayScheduler.png'
import codingQuiz from '../assets/pictures/codingQuiz.png'
import passwordGenerator from '../assets/pictures/NewPasswordGenerator.png'

export default function ProjectContainer(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Project
                            title="AutoSpace"
                            subtitle="Full-Stack Web Application"
                            info="AutoSpace is a must have for any home mechanic.The simple interface allows users to document their vehicle's history and keep up with suggested maintenance."
                            imageLink={MyAutoSpace}
                            githubLink="https://github.com/JINJ95/myAutoSpace"
                            deployedLink="https://young-lake-34599.herokuapp.com/" />
                    </div>
                    <div className="col-sm">
                        <Project
                            title="Budget-Tracker"
                            subtitle="Progressive Web Application"
                            info="Add expenses such as deposits or withdrawls to this app with or without an internet connection. Transactions are recorded and displayed when brought back online"
                            imageLink={BudgetTracker}
                            githubLink="https://github.com/JINJ95/Budget-Tracker"
                            deployedLink="https://evening-plateau-90382.herokuapp.com/" />
                    </div>
                    <div className="col-sm">
                        <Project
                            title="Google-Books-Search"
                            subtitle="React"
                            info="React-based Google Books Search app"
                            imageLink={googleBooks}
                            githubLink="https://github.com/JINJ95/Google-Books-Search"
                            deployedLink="https://rocky-waters-88828.herokuapp.com/"
                            />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <Project
                            title="Employee-Directory"
                            subtitle="React"
                            info="An employee directory capable of filtering and using React."
                            imageLink={employeeDirectory}
                            githubLink="https://github.com/JINJ95/Employee-Directory"
                            deployedLink="https://jinj95.github.io/Employee-Directory/" />
                    </div>
                    <div className="col-sm">
                        <Project
                            title="Workout-Tracker"
                            subtitle="Full-Stack Web Application"
                            info="Create and track daily workouts. Log multiple exercises using an interactive dashboard"
                            imageLink={WorkoutTracker}
                            githubLink="https://github.com/JINJ95/Workout-Tracker"
                            deployedLink="https://boiling-shore-23550.herokuapp.com/" />
                    </div>
                    <div className="col-sm">
                        <Project
                            title="Employee-Tracker"
                            subtitle="MySQL, Node"
                            info="Solution for managing a company's employees using node, inquirer, and MySQL!"
                            imageLink={employeeTracker}
                            githubLink="https://github.com/JINJ95/Employee-Tracker"
                            deployedLink="https://rocky-waters-88828.herokuapp.com/"
                            />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <Project
                            title="Team-Summary"
                            subtitle="Node"
                            info="A Node CLI that takes in information about a team member and generates an HTML webpage that displays summaries for each person!"
                            imageLink={teamSummary}
                            githubLink="https://github.com/JINJ95/Team-Summary"
                            deployedLink="" />
                    </div>
                    <div className="col-sm">
                        <Project
                            title="ReadMe-Generator"
                            subtitle="Node"
                            info="Generate a good ReadMe with Node.js"
                            imageLink={readme}
                            githubLink="https://github.com/JINJ95/ReadMe-Generator"
                            deployedLink="" />
                    </div>
                    <div className="col-sm">
                        <Project
                            title="Burgers"
                            subtitle="MySQL, Node, Express, "
                            info="A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)"
                            imageLink={burgers}
                            githubLink="https://github.com/JINJ95/Burgers"
                            deployedLink="https://sheltered-badlands-09778.herokuapp.com/"
                            />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <Project
                            title="NoteTaker"
                            subtitle="Node"
                            info="An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file."
                            imageLink={noteTaker}
                            githubLink="https://github.com/JINJ95/NoteTaker"
                            deployedLink="https://frozen-harbor-30950.herokuapp.com/" />
                    </div>
                    <div className="col-sm">
                        <Project
                            title="strtUP"
                            subtitle="Node, Express, API's"
                            info="strtUP is a browser dashboard that incorporates widgets! The dashboard puts your most frequently accessed information all in one place.​"
                            imageLink={strtUP}
                            githubLink="https://github.com/JINJ95/strtUP"
                            deployedLink="https://brentp24.github.io/strtUP/" />
                    </div>
                    <div className="col-sm">
                        <Project
                            title="Weather-Dashboard"
                            subtitle="Node, Express "
                            info="You can search different cities and generate a button for each. Once a city is clicked a weather forecast for that city will be displayed."
                            imageLink={weatherDashboard}
                            githubLink="https://github.com/JINJ95/Weather-Dashboard"
                            deployedLink="https://jinj95.github.io/Weather-Dashboard/"
                            />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <Project
                            title="Work-Day-Scheduler"
                            subtitle="jQuery, HTML5, CSS"
                            info="A simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery."
                            imageLink={workDayScheduler}
                            githubLink="https://github.com/JINJ95/Work-Day-Scheduler"
                            deployedLink="https://jinj95.github.io/Work-Day-Scheduler/" />
                    </div>
                    <div className="col-sm">
                        <Project
                            title="Coding-Quiz"
                            subtitle="Javascript"
                            info="Multiple Choice Quiz on Coding!"
                            imageLink={codingQuiz}
                            githubLink="https://github.com/JINJ95/Coding-Quiz"
                            deployedLink="https://jinj95.github.io/coding-quiz/" />
                    </div>
                    <div className="col-sm">
                        <Project
                            title="Password-Generator"
                            subtitle="Javascript"
                            info="Generate a random password to enhance security!"
                            imageLink={passwordGenerator}
                            githubLink="https://github.com/JINJ95/Password-Generator"
                            deployedLink="https://jinj95.github.io/Password-Generator/"
                            />
                    </div>
                </div>
            </div>
        </>
    )
}