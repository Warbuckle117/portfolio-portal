import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import TitleBar from "./Components/TitleBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleBar />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/About" element={<About/>} />
            <Route path="*" element={<div className="page-not-found" > Error 404: Page Not Found </div>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
