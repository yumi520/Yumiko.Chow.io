import React from 'react';

import persona from "../../assets/Persona.svg";

function SpotifyPersona() {
    return(
        <section class="sunney-findings-analysis">
        <h2>Persona:</h2>
        <img src={persona} alt="persona"></img>

        <ul>
            <span>I created three different refine statements for Emilia:</span>
            <li>⟡ As a music lover, find friends with similar music taste without being too invasive to her privacy</li>
            <li>⟡ Increase social interactions with her new friends on Spotify without having to migrate to another app</li>
            <li>⟡ The ability to keep her listening habits private until she feels comfortable sharing</li>
        </ul>
    </section>
    );
}

export default SpotifyPersona;