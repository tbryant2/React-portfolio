import React from 'react';
import profImage from '../../assets/selfie/selfie.jpg';
import './style.css'; 

function About() {
  return (
    <section className="my-5">
      <h1 id="about">My Background</h1>
      <div className='profile'>
      <img src={profImage} className="my-2" alt="cover" />
        <p className='bio'>
          Front-end web developer with a background in Music and a bachelor's degree from Berklee College Of Music in music production and design. Recently earned a certificate in full stack development from the bootcamp at University of Texas at Austin, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known as an creative problem solver, passionate about executing the creative process harmoniously, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an eye-catching, seamless user experience. I'm also passionate about making my own music. 
        </p>
      </div>
    </section>
  );
}

export default About;
