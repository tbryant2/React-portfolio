import React from "react";
import { removeHyphensAndCapitalize } from '../../utils/helpers';
import './style.css'

function Projectcards({ project }) {

const { name, image, repo, link, description } = project;

    return (
        <div className="project" key={name}>
            <img
                src={require(`../../assets/projectcards/${image}.jpg`)}
                alt={removeHyphensAndCapitalize(name)}
                className="projectcard-img"
            />
            <div className="project-text">
                <h3>
                    <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
                    <a href={repo}>
                        <i className="fab fa-github"></i>
                    </a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    ); 
}

export default Projectcards; 