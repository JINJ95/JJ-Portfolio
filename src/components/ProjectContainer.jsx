import React from 'react';
import Project from './Project'
import MyAutoSpace from '../assets/pictures/myAutoSpace.png'
import BudgetTracker from '../assets/pictures/Budget-Tracker.png'

export default function ProjectContainer(props) {
    return (
        <>
            <div className="container">
                <div class="row">
                    <div class="col-sm">
                        <Project
                            title="MyAutoSpace"
                            subtitle="Full-Stack Web Application"
                            info="MyAutoSpace is a must have for any home mechanic.The simple interface allows users to document their vehicle's history and keep up with suggested maintenance."
                            imageLink={MyAutoSpace}
                            githubLink="https://github.com/JINJ95/myAutoSpace"
                            deployedLink="" />
                    </div>
                    <div class="col-sm">
                        <Project
                            title="Budget-Tracker"
                            subtitle="Progressive Web Application"
                            info="Add expenses such as deposits or withdrawls to this app with or without an internet connection. Transactions are recorded and displayed when brought back online"
                            imageLink={BudgetTracker}
                            githubLink="https://github.com/JINJ95/Budget-Tracker"
                            deployedLink="" />
                    </div>
                    <div class="col-sm">
                        <Project
                            title="MyAutoSpace"
                            subtitle="Full-Stack Web Application"
                            info="MyAutoSpace is a must have for any home mechanic.The simple interface allows users to document their vehicle histories and keep up with suggested maintenance."
                            imageLink="..."
                            githubLink="https://github.com/JINJ95/myAutoSpace"
                            deployedLink="https://evening-plateau-90382.herokuapp.com/"
                            />
                    </div>
                </div>
            </div>
        </>
    )
}