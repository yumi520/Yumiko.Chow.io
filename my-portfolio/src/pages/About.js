// src/components/About.js
import React from 'react';
import '../stylesheet/About.css';
import Portrait from '../assets/IMG_9214.jpg';
import Gallery from '../components/Gallery';

function About() {
  return (
    <section class="top-section">
        <h1>Hi! I'm Yumi!</h1>
        <section class="bio-section">

            <div class="image-button-section">

                <img src={Portrait} alt="me!"></img>
                <a href="https://docs.google.com/document/d/1R-CsHKFqGwg0iKjsfwKJ5fNCJBYXQupkZWiSC9276-s/edit?usp=sharing" class="resume-anchor">
                    <button class="resume-button" type="Button">Resume ↓</button>
                </a>

            </div>    
                
            <div class="word-section"> 
                <p> Yumiko Chow (She/Her) is an incredibly talented artist who pours her heart 
                    and soul into painting portraits and capturing the spirit of animals, while also dedicating herself to art advocacy work. 
                    She is currently attending Northeastern University ('27) and studying Computer Science & Design. 
                    Yumiko's dedication to her craft and her genuine affection for both human and animal subjects shine 
                    through in every masterpiece she creates, leaving viewers captivated by the sheer artistry and heartfelt connection portrayed in her work.
                </p>
            </div>
        </section>
        <Gallery />
    </section>
  );
}

export default About;