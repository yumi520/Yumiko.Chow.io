import React from "react";
import sunneyMockBG from "../../assets/sunneyMockBG.png"
import DesignTopSection from "../shared/DesignTopSections.js";

function SunneyTopSection() {
    const sections = [
        {
            title: 'PROJECT TYPE',
            items: ['Course Project']
        },
        {
            title: 'MY ROLE',
            items: ['User Research', 'Wireframing', 'Prototyping']
        },
        {
            title: 'TOOLS',
            items: ['Figma']
        },
        {
            title: 'DURATION',
            items: ['1 Month (2023)']
        }
    ];

    return (
        <DesignTopSection
        h1="Sunney"
        p="Find opportunities for self-expression and interest exploration"
        src={sunneyMockBG}
        alt="Mockup of Sunney front page"
        sections={sections}
         />

     );
}

export default SunneyTopSection;