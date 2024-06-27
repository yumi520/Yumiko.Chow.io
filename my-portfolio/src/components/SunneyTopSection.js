import React from "react";
//import sunneyMock from "../assets/Screenshot 2024-01-04 at 4.48.08 PM.png";
import sunneyMockBG from '../assets/sunneyMockBG.png';


function SunneyTopSection() {
    return (
        <section class="sunneyTopSection">
        <h1>Sunney</h1>
        <p>Find opportunities for self-expression and interest exploration</p>
        <img src={sunneyMockBG} alt="Mockup of Sunney front page"></img>

        <div className="data-about-project">
        <ul>
        <span>PROJECT TYPE</span>
            <li>Course Project</li>
        </ul>

        <ul>
        <span>MY ROLE</span>
            <li>User Research</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
        </ul>

        <ul>
        <span>TOOLS</span>
            <li>Figma</li>
        </ul>

        <ul>
        <span>DURATION</span>
            <li>1 Month (2023)</li>
        </ul>
        </div>
    </section>

     );
}

export default SunneyTopSection;