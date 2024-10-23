// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './pages/About';
import Footer from './components/Footer';
import Sunney from './pages/Sunney';
import Spotify from './pages/SocialSpotify.js';
import Code from './pages/Code.jsx';
import Design from './pages/Design.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/code" element={<Code />} />
          <Route path="/design" element={<Design />} />
          <Route path="/sunney" element={<Sunney />} />
          <Route path="/spotify" element={<Spotify />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
