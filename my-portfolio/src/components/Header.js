// src/components/Header.js
import React from 'react';
import '../stylesheet/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header>
        <nav>
          <ul className="pages">
            <li className="logo"> YUMIKO CHOW</li>
            <li className="works-link"> <Link to="/"> WORKS </Link></li>
            <li className="about-me"> <Link to="/about"> ABOUT </Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
