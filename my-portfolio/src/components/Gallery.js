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

function Gallery() {
    return (
    <section>
        <h2 class="works-title">My Artworks</h2>

        <section class="gallery">
            <img src={CatHaven} class="cat" alt="drawing of 3 cats"></img>
            <img src={Vines} class="vines" alt="little girl vines mural"></img>
            <img src={CreativeMind} class="paintinggirl" alt="drawing of a person with paintings on her hair"></img>
            <img src={Self} class="self" alt="oil painting of self-portrait"></img>
            <img src={CrisprMural} class="david" alt="crispr mural with david bryne"></img>
            <img src={Fish} class="fish" alt="fish with h20 coils"></img>
            <img src={Dog} class="dog" alt="dog portrait"></img>
            <img src={Couple} class="couple" alt="oil painting of a couple"></img>
            <img src={SelfWithOil} class="oil" alt="self-portrait with oil"></img>
        </section>
    </section>
    );
  }
  
  export default Gallery;