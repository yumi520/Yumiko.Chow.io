import React from 'react';

import Quiz from '../../assets/SocialSpotify - Quiz.mov';
import Match from '../../assets/SocialSpotify - Message.mov';


function SpotifySolution() {
    return(
        <section class="sunney-solution">
        <h2>The Solution</h2>
        <p>I designed a mobile application there are customizable music sharing options allow users
             to select which genres, artists, playlists, and listening habits they want to share,
              while an engaging and personalized quiz within Spotify enhances the user experience
               by helping them express their music preferences without feeling exposed, all without 
               needing to switch apps to meet like-minded individuals.
        </p>
            <div className="video-container-right">
                <span className="video-caption">Take a simple quiz to match with other music lovers with the same interests.</span>
                <video src={Quiz} autoPlay muted loop className="no-controls">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="video-container-left">
            <   video src={Match} autoPlay muted loop className="no-controls">
                    Your browser does not support the video tag.
                </video>
                <span className="video-caption">See what you have in common with your matches and message them!</span>
             </div>
    </section>

    );
}

export default SpotifySolution;