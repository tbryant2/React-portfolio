import React, { useState } from 'react'; 
import Projectcards from '../Projectcards'; 
import './style.css'

function Portfolio() {
    const [projectcards] = useState([
        {
            name: 'Workday Scheduler',
            image: "workday",
            description: 'Third-Party APIs',
            link: "https://tbryant2.github.io/work-day-/",
            repo: "https://github.com/tbryant2/work-day-"
          },
          {
            name: 'Team Profile Generator',
            image: "team-profile",
            description: 'Object Oriented Programming',
            link: "https://youtu.be/xiZdctRPAcM",
            repo: "https://github.com/tbryant2/Team-Prof-Gen"
          },
          {
            name: 'Social-Network API',
            image: "social-network",
            description: 'NoSQL',
            link: "https://tbryant2.github.io/Social-Network-API/",
            repo: "https://github.com/tbryant2/Social-Network-API"
          },
          {
            name: 'PWA Budget Tracker',
            image: "budget-tracker",
            description: '',
            link: "https://strawberry-pie-29674.herokuapp.com/",
            repo: "https://github.com/tbryant2/pwa-budget-tracker"
          },
          {
            name: 'Rough Days',
            image: "rough-days",
            description: 'A social network platform engaging around human interactions revolving around their dogs',
            link: "",
            repo: "https://github.com/sarahwylie/ruff-days"
          },
          {
            name: 'Project 3',
            image: "workday",
            description: 'MERN Stack',
            link: "https://github.com",
            repo: "https://github.com"
          },
    ]);

    return (
        <div>
            <div className="flex-row">
                {projectcards.map((projectcard, idx) => (
                    <Projectcards
                    project={projectcard}
                    key={"projectcards" + idx}
                    />
                ))}
            </div>
        </div>
    );
}; 

export default Portfolio; 