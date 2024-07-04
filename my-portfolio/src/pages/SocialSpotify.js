import React from "react";
import "../stylesheet/Sunney.css"
import sunneyLofi from "../assets/Screenshot 2024-01-04 at 5.15.33 PM.png";
import sunneyBranding from "../assets/Screenshot 2024-01-04 at 5.16.57 PM.png";
import sunneyHifi1 from "../assets/Screenshot 2024-01-04 at 4.48.08 PM.png";
import sunneyHifi2 from "../assets/Screenshot 2024-01-04 at 5.17.42 PM.png";

// component imports
import SpotifyTopSection from "../components/spotify/SpotifyTopSection.js";
import SpotifyOverview from "../components/spotify/SpotifyOverview.js"
import SpotifyProblem from "../components/spotify/SpotifyProblem.js";
import SpotifySolution from "../components/spotify/SpotifySolution.js";
import sunneySitemap from "../assets/sunney - sitemap.png";
import sunneyCompAnalysis from "../assets/sunney - comp analysis.png";

function Spotify() {
    return(
        <body>
    <SpotifyTopSection />
    <SpotifyOverview />
    <SpotifyProblem />
    <SpotifySolution />

    <h1 className="wip">Work in progress...Come back soon!</h1>

    {/* <section class="sunney-comp-analysis">
        <h2>Competitve Analysis:</h2>
        <span>I started researching popular traveling sites like Let’s Go, Footprint, and Lonely Planet. </span>
        <img src={sunneyCompAnalysis} alt="Low-Fidelity mockup of Sunney design"></img>
        <p>I created a chart of strengths and weaknesses among popular traveling websites. 
        <mark className="highlight">&nbsp;I noticed that most of them had overwhelming information and
             I had a difficult time navigating to where I wanted to go.&nbsp;</mark>
              One commonality between all these sites is the beautiful imagery.
        </p>
    </section>

    <section class="sunney-user-interviews">
        <h2>User Interviews:</h2>
        <span>These users fell into this category: college students.</span>
        <ul>
            <span>Objects for 1:1 Interviews</span>
            <li>⟡ Find out what adjectives are associated with college students</li>
            <li>⟡ Learn what people typically go to travel sites for</li>
            <li>⟡ Find out what makes a traveling site pleasant or frustrating</li>
        </ul>
    </section>

    <section class="sunney-findings-analysis">
        <h2>Findings and Analysis:</h2>
        <span>After interviewing people from said category, I saw a trend:</span>
        <ul>
            <span>College Students Prefer:</span>
            <li>⟡ Budget-friendly</li>
            <li>⟡ Convenience</li>
            <li>⟡ Networking opportunities</li>
            <li>⟡ Program size</li>
            <li>⟡ Learning about culture</li>
            <li>⟡ Social life</li>
        </ul>
    </section>

    <section class="sunney-design">
        <h2>Design:</h2>
        <h3>Sitemap</h3>
        <img src={sunneySitemap} alt="Low-Fidelity mockup of Sunney design"></img>
        <span>I planned out the content structure based on the client's priorities.</span>
        
    </section>

    <section class="sunneyLowfi">
        <h2>Low-Fidelity Explorations:</h2>
        <p>I utilized a lot of rounded shapes to convey balance and nature. I wanted to keep it as simple as possible.</p>
        <img src={sunneyLofi} alt="Low-Fidelity mockup of Sunney design"></img>
    </section>

    <section class="sunneyBranding">
        <h2>Branding:</h2>
        <img src={sunneyBranding} alt="Branding of sunney design"></img>
    </section>

    <section class="sunneyHifi">
        <h2>High-Fidelity Explorations:</h2>
        <p>I knew I wanted a warm and comforting branding for my app, so I created a mood board where I experimented with the colors red, yellow, pink, and a opaque blue for contrast. </p>
        <img src={sunneyHifi1} alt="High-Fidelity mockup of Sunney design"></img>
        <img src={sunneyHifi2} alt="High-Fidelity mockup of Sunney design"></img>
    </section> */}
</body>

    );
}


export default Spotify;