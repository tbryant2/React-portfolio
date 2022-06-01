import React from 'react';
import profImage from '../../assets/selfie/selfie.jpg';
import './style.css';
// import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left wrapper">
          <h2 className="i-intro">Welcome, my name is</h2>
          <h2 className="i-name">Travis Bryant</h2>
          <div className="i-titles">
            <div className="i-titles-wrapper">
              <div className="i-titles-item">Web Developer</div>
              <div className="i-titles-item">React.js</div>
              <div className="i-titles-item">JavaScript</div>
              <div className="i-titles-item">Node.js</div>
            </div>
          </div>
          <div className="i-description">
          Front - end web developer with a background in Music and a bachelor's degree from Berklee College Of Music in music production and design. Recently earned a certificate in full stack development from the bootcamp at University of Texas at Austin, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known as an creative problem solver, passionate about executing the creative process harmoniously, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an eye-catching, seamless user experience. I'm also passionate about making my own music. 
          </div>

          {/* <div className="icon-wrapper">

            <a className='i-icon' href="https://www.linkedin.com/in/travis-bryant-336b5420a/" target="_blank" rel="noreferrer"><FaLinkedin size='50' /></a>

            <a className='i-icon' href="https://github.com/tbryant2" target="_blank" rel="noreferrer"> <FaGithubSquare size='50' /></a>
          </div> */}

        </div>
      </div>
      <div className="i-right">
        <div className="i-card bg"></div>
        <div className="i-card">
          <img src={profImage} alt="" className="i-image" />
        </div>
      </div>

    </div>
  )
}

export default About 