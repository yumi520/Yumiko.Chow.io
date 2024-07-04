import React from "react";
import spotifyMock from '../../assets/SocialSpotifyBG.png';
import DesignTopSection from "../shared/DesignTopSections.js";


function SpotifyTopSection() {
    const sections = [
        {
            title: 'PROJECT TYPE',
            items: ['Course Project']
        },
        {
            title: 'MY ROLE',
            items: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
        },
        {
            title: 'TOOLS',
            items: ['Figma']
        },
        {
            title: 'DURATION',
            items: ['1 Month (2024)']
        }
    ];


    return (
        <DesignTopSection
            h1="Social Spotify"
            p="Discover like-minded listeners by taking a quiz!"
            src={spotifyMock}
            alt="Mockup of Social Spotify front page"
            sections={sections}
        />
     );
}

export default SpotifyTopSection;