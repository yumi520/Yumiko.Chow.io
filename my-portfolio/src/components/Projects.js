import React from 'react';
import '../stylesheet/Projects.css'

import Sunney from '../assets/SunneyMockup copy.png';
import HolidayHack from '../assets/Screenshot 2024-03-03 at 11.03.02 PM.png';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <section className="works-section">
        <h2 className="works-title">My Works</h2>

        <section className="sunney-showcase">

            <img src={Sunney} class="Sunney" alt="App mockup of Sunney"></img>
            <div className="word-section">
                <h3>Sunney</h3>
                <h4>UI/UX Design: Mobile/Branding Design</h4>

                <div className="sunney-anchor">
                    <Link to="/sunney" className="case-study-button">View Full Project ↓</Link>
                </div>
            </div>
        </section>

    <section className="sunney-showcase">

        <img src={HolidayHack} class="Sunney" alt="home page for Christmas Designer game"></img>
        <div className="description-section">
            <h3>Christmas Designer</h3>
            <h4>Full-stack Website Application: HTML, CSS, JS</h4>
            <h5>Won Best in the Holiday Spirit Hack at Codedex Hackathon</h5>
            <div className="sunney-anchor">
                <a href="https://github.com/yumi520/holiday-hackathon-yumi-main?tab=readme-ov-file">
                    <button className="sunney-button" type="Button">View Full Project ↓</button>
                </a>
            </div>
        </div>
    </section>


    </section>
  );
}

export default Projects;