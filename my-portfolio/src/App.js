// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './pages/About';
import Footer from './components/Footer';
import Sunney from './pages/Sunney';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/sunney" element={<Sunney />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
