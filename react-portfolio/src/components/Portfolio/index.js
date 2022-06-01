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
            description: 'Useful app to track budgets and deductions',
            link: "https://strawberry-pie-29674.herokuapp.com/",
            repo: "https://github.com/tbryant2/pwa-budget-tracker"
          },
          {
            name: 'Beers and Bands',
            image: "beers-bands",
            description: 'Find a local brewpub and your favorite band or concert venue. Search by city and date to plan one or several nights of drunken moshing, chill jamming, or groovy grinding',
            link: "https://sarahwylie.github.io/BeersandBands/",
            repo: "https://github.com/tbryant2/BeersandBands"
          },
          {
            name: 'Flower Power',
            image: "flower-power",
            description: 'A user based website offering interaction and wise words between plant lovers',
            link: "https://flowerpowerrr.herokuapp.com/",
            repo: "https://github.com/tbryant2/flower-power"
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