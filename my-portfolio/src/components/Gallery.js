import React from 'react';
import '../stylesheet/Gallery.css';

import CatHaven from '../assets/Chow,Yumiko._CatHaven_.jpg';
import Vines from '../assets/Screenshot 2023-10-30 at 6.15.24 PM.png';
import CreativeMind from '../assets/Chow,Yumiko._CreativeMind_.jpg';
import Self from '../assets/IMG_8175.jpg';
import CrisprMural from '../assets/Screenshot 2023-10-30 at 6.14.57 PM.png';
import Fish from '../assets/Screenshot 2023-10-30 at 6.15.05 PM.png';
import Dog from '../assets/Screenshot 2023-10-30 at 6.29.24 PM.png';
import Couple from '../assets/Screenshot 2023-10-30 at 6.29.43 PM.png';
import SelfWithOil from '../assets/Screenshot 2023-10-30 at 6.30.00 PM.png';

import Images from '../components/shared/Image.js';

function Gallery() {
    return (
    <section>
        <h2 class="works-title">My Artworks</h2>

        <section class="gallery">
            <Images src={CatHaven} className="cat" alt="drawing of 3 cats" title="Cat Haven" 
                                                                           caption="This is a 24 x 24 painting done in acrylic! 
                                                                           I was inspired by my love for cats and interest in painting more texturally.
                                                                           The colors are vibrant and whimsical, the details are minute and careful, and the composition is eye-catching! 
                                                                           This is one of my favorite paintings. Unfortunately the physical copy has been sold since June 2023 for 500$!"></Images>

            <Images src={Vines} className="vines" alt="little girl vines mural" title="Creative Data Visualization" 
                                                                           caption="32.5’ x 9’ mural for State Street’s Global Advisors’ office located off
                                                                            of A Street Park near AFH in South Boston."></Images>

            <Images src={CreativeMind} className="paintinggirl" alt="drawing of a person with paintings on her hair" title="Creative Mind!" 
                                                                           caption="A 24 x 36 acrylic painting inspired by my interest in art 
                                                                           history, culture, and purpose. Featured in the end-of-summer show at 
                                                                           Artists for Humanity and The Fountain Street Gallery."></Images>


            <Images src={Self} className="self" alt="oil painting of self-portrait" title="Self-Portrait" 
                                                                           caption="One of my first oil paintings where I practiced mixing skin tones."></Images>


            <Images src={CrisprMural} className="david" alt="crispr mural with david bryne" title="Imagination Over Reality!"
                                                                           caption="120' mural for CRISPR Therapeutics’ U.S. Research and Development headquarters"></Images>


            <Images src={Fish} className="fish" alt="fish with h20 coils" title="Mural at CRISPR!"
                                                                           caption=" 60' x 10' mural for CRISPR Therapeutics’ U.S. Research and Development headquarters"></Images>


            <Images src={Dog} className="dog" alt="dog portrait" title="Commissioned Dog Portrait!" 
                                                                           caption="A 24 x 32 acrylic painting commissioned for 1000$."></Images>


            <Images src={Couple} className="couple" alt="oil painting of a couple" title="Commissioned Couples Portrait!"
                                                                           caption="A commissioned oil painting for my older sister and her boyfriend."></Images>


            <Images src={SelfWithOil} className="oil" alt="self-portrait with oil" title="Self-portrait of me!" 
                                                                           caption="Oil painting of me where I spent way too much time on the ruffles. This is when I was practicing the most with oil paintings and experimenting."></Images>
        </section>
    </section>
    );
  }
  
  export default Gallery;