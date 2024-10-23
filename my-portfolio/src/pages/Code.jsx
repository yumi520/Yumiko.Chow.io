import ChristmasDesignerScreen from '../assets/christmasDesignerScreen.png';
import ChineseRadicalMacbook from '../assets/ChineseRadicalMacbook.png';
import Button from '../components/shared/Button.js';
import '../stylesheet/Projects.css';

function Code() {
    return (
        <section className="intro-page">
        <section className="works-section">
            <section className="sunney-showcase">
                <img src={ChineseRadicalMacbook} className="Sunney" alt="home page for Radical Chinese game"></img>
                <div className="description-section">
                    <h3>Chinese Radical Guesser</h3>
                    <h4>Node.js Terminal-Based Game</h4>
                    <p>Personal Project for Interest in Improving my Chinese</p>
                    <div className="sunney-anchor">
                            <Button href="https://github.com/yumi520/RadicallyChinese" className="sunney-button" type="Button" target="_blank" rel="noopener noreferrer">View Full Project ↓</Button>
                    </div>
                </div>
            </section>

            <section className="sunney-showcase">
                <img src={ChristmasDesignerScreen} className="Sunney" alt="home page for Christmas Designer game"></img>
                <div className="description-section">
                    <h3>Christmas Designer</h3>
                    <h4>Full-Stack Website App</h4>
                    <p>Won Best in the Holiday Spirit Hack at Codedex Hackathon</p>
                    <div className="sunney-anchor">
                            <Button href="https://github.com/yumi520/holiday-hackathon-yumi-main?tab=readme-ov-file" className="sunney-button" type="Button" target="_blank" rel="noopener noreferrer">View Full Project ↓</Button>
                    </div>
                </div>
            </section>
        </section>
        </section>
    )
}

export default Code;