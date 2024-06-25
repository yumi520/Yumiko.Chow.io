import React from 'react';
import '../stylesheet/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <section className="footer-nav">
        <span>yumi520.github.io</span>
        <ul>
          <li><a href="https://github.com/yumi520" target="_blank" rel="noopener noreferrer">github</a></li>
          <li><a href="https://www.linkedin.com/in/yumiko-chow/" target="_blank" rel="noopener noreferrer">linkedin</a></li>
          <li><a href="mailto:chow.y@northeastern.edu">email</a></li>
        </ul>
      </section>
      <ul className="bottom">
        <li><Link to="/">Works</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;