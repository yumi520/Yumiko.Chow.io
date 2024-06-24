import React from 'react';
import '../stylesheet/Projects.css'

import Sunney from '../assets/SunneyMockup copy.png';
import HolidayHack from '../assets/Screenshot 2024-03-03 at 11.03.02 PM.png';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <section class="works-section">
        <h2 class="works-title">My Works</h2>

        <section class="sunney-showcase">

            <img src={Sunney} class="Sunney" alt="App mockup of Sunney"></img>
            <div class="word-section">
                <h3>Sunney</h3>
                <h4>UI/UX Design: Mobile/Branding Design</h4>

                <a href="sunney.html" className="sunney-anchor">
                    <button class="sunney-button" type="Button"><Link to="/sunney">View Full Project ↓</Link></button>
                </a>
            </div>
        </section>

    <section className="sunney-showcase">

        <img src={HolidayHack} class="Sunney" alt="image of home page for Christmas Designer game"></img>
        <div class="word-section">
            <h3>Christmas Designer</h3>
            <h4>Full-stack Website Application: HTML, CSS, JS</h4>
            <h5>Won Best in the Holiday Spirit hach at Codedex Hackathon</h5>

            <a href="https://github.com/yumi520/holiday-hackathon-yumi-main?tab=readme-ov-file" class="sunney-anchor">
                <button className="sunney-button" type="Button">View Full Project ↓</button>
            </a>
        </div>
    </section>


    </section>
  );
}

export default Projects;