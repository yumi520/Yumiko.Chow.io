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
import SpotifyCompAnalysis from "../components/spotify/SpotifyCompAnalysis.js";
import SpotifyUserInterviews from "../components/spotify/SpotifyUserInterviews.js";
import SpotifyFindingsAnalysis from "../components/spotify/SpotifyFindingsAnalysis.js";
import SpotifyPersona from "../components/spotify/SpotifyPersona.js";
import SpotifyDesign from "../components/spotify/SpotifyDesign.js";

function Spotify() {
    return(
        <body>
    <SpotifyTopSection />
    <SpotifyOverview />
    <SpotifyProblem />
    <SpotifySolution />

    {/* <h1 className="wip">Work in progress...Come back soon!</h1> */}
    < SpotifyCompAnalysis />
    < SpotifyUserInterviews />
    <SpotifyFindingsAnalysis />
    <SpotifyPersona />
    <SpotifyDesign />

    {/* <section class="sunneyLowfi">
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