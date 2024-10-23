import React from 'react';
import '../stylesheet/Projects.css';
import sunneyMockBG from '../assets/sunneyMockBG.png';
import Button from '../components/shared/Button.js';
import SocialSpotifyScreen from '../assets/SocialSpotifyBG.png';


function Design() {
    return (
        <section className="intro-page">
            <section className="works-section">
                <section className="sunney-showcase">
                    <img src={sunneyMockBG} className="Sunney" alt="Second app mockup of Sunney"></img>

                    <div className="description-section">
                        <h3>Sunney</h3>
                        <h4>UI/UX Design: Mobile App </h4>
                        <p>Redesign Project from Experience and Interaction Design</p>

                        <div className="sunney-anchor">
                            {/* <Link to="/sunney" className="case-study-button">View Full Project ↓</Link> */}
                            <Button to="/sunney" className="case-study-button">View Full Project ↓</Button>
                        </div>
                    </div>
                </section>

                <section className="sunney-showcase">
                

                <img src={SocialSpotifyScreen} className="Sunney" alt="home page Social Spotify"></img>
                <div className="description-section">
                    <h3>Social Spotify</h3>
                    <h4>UI/UX Design: Mobile App </h4>
                    <p>Redesign Project from Interaction Design Principles</p>
                    <div className="sunney-anchor">
                            <Button to="/spotify" className="case-study-button">View Full Project ↓</Button>
                        </div>
                </div>
            </section>
        </section>
    </section>
    )
}

export default Design;