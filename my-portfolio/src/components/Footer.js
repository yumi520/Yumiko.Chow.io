// src/components/Footer.js
import React from 'react';
import '../stylesheet/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
            <ul className="bottom">
                <li>  <Link to="/"> Works </Link></li>
                <li> <Link to="/about"> About</Link> </li>
            </ul>
    </footer>
  );
}

export default Footer;