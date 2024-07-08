import React from 'react';

import spotifySitemap from "../../assets/SpotifySitemap.svg";
import spotifyWorkflow from "../../assets/SpotifyWorkflow.svg";

function SpotifyDesign() {
    return(
        <section class="sunney-design">
        <h2>Design:</h2>
        <h3>Sitemap</h3>
        <img src={spotifySitemap} alt="Spotify sitemap"></img>
        {/* <span>I planned out the content structure based on the client's priorities.</span> */}

        <h3>Workflow</h3>
        <img src={spotifyWorkflow} alt="Spotify spotifyWorkflow"></img>
        {/* <span>I planned out the content structure based on the client's priorities.</span> */}
        
    </section>
    );
}

export default SpotifyDesign;