import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import ToolPage from "./Pages/ToolPage";
import About from "./Pages/About";
import Home from "./Pages/Home";
import TitleBar from "./Components/TitleBar";
import Lost from "./Pages/Lost";



function App() {


  return (
    <div className="App">
        <TitleBar />
        <div className="page-content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/tools" element={<ToolPage users={[]} />} />
                <Route path="*" element={<Lost/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
