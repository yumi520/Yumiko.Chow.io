// src/components/Header.js
import React from 'react';
//import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header>
        <nav>
          <ul className="pages">
            <li className="logo"> <Link to="/"> YUMI </Link></li>
            <li className="works-link"> <Link to="/works"> WORKS </Link></li>
            <li> <Link to="/about"> ABOUT </Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
