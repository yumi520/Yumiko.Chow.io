// src/components/About.js
import React from 'react';
import '../stylesheet/About.css';
import Portrait from '../assets/IMG_9214.jpg';
import Gallery from '../components/Gallery';

function About() {
  return (
    <section class="top-section">
        <section className="bio-section">

            <div className="image-button-section">

                <img src={Portrait} alt="me!"></img>
                <a href="https://docs.google.com/document/d/1R-CsHKFqGwg0iKjsfwKJ5fNCJBYXQupkZWiSC9276-s/edit?usp=sharing" class="resume-anchor">
                    <button class="resume-button" type="Button">Resume ↓</button>
                </a>

            </div>    
                
            <div className="word-section"> 
            <h1>Hi! I'm Yumi!</h1>
                <p> 
                I am a rising second-year student at Northeastern University, majoring in Computer Science and Design with a concentration in Interaction Design.
                I'm passionate about creating digital designs and applications that are both efficient and highly usable.
                I enjoy solving problems and have a keen interest in computer and data science, human-computer interaction, and social advocacy.
                My focus is on making design accessible and centered around human needs. 

                </p>

                <h4><span className="experience">Some of my relevant experience:</span></h4>
                <ul>
                    <li>
                    ⟡ Software Engineer @ <a href="https://hackbeanpot.com/" target="_blank" rel="noopener noreferrer">HackBeanpot, Inc.</a>
                    </li>

                    <li>
                    ⟡ Communications Assistant @ <a href="https://cetr.sites.northeastern.edu/" target="_blank" rel="noopener noreferrer">CETR, Northeastern</a>
                    </li>

                    <li>
                    ⟡ Client Service Assistant @ <a href="https://www.afhboston.org/" target="_blank" rel="noopener noreferrer">Artists for Humanity</a>
                    </li>
                </ul>

                <span>
                Outside of the workplace, you can find me painting, playing games, getting sweet treats, and petting my cat!
                </span>


            </div>
        </section>
        <Gallery />
    </section>
  );
}

export default About;