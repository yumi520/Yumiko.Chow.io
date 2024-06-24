// src/components/Intro.js
import React from 'react';
//import './Intro.css';

function Intro() {
  return (
    <section className="intro-page">
        <img src="assets/portfolio-image-1 3.png" alt="drawing of Yumiko"></img>
        <p class="intro-paragraph">
            I'm Yumi, a 2nd year at Northeastern University with an interest in 
            developing skills in both software development and intuitive design.
        </p>

        <span className="my-works">↓ Works ↓</span>
    </section>
  );
}

export default Intro;