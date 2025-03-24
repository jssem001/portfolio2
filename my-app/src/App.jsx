import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from './portfolio';
import About from './aboutme';
import Projects from './projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />}/>
        <Route path="/aboutme" element={<About />}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </Router>
  );
  
}

export default App;
