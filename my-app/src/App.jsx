// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from './portfolio';
import About from './aboutme';
// import Resume from "./src/docs/Joshua_Ssemwanga_CV.pdf";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />}/>
        <Route path="/aboutme" element={<About />}/>
        {/* <Route path="/resume" element={<Resume />}/> */}
      </Routes>
    </Router>
  );
  

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
