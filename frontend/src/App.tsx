import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import ToolPage from "./Pages/ToolPage";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import TitleBar from "./Components/TitleBar";
import Lost from "./Pages/Lost";
import {Box} from "@mui/material";



function App() {


  return (
    <div className="App">
        <TitleBar />
        <div className="page-content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<AboutMe/>} />
                <Route path="/tools" element={<ToolPage />} />
                <Route path="/tools/notes" element={<Box> Notes Coming soon </Box>}/>
                <Route path="/tools/meal-planner" element={<Box> Meal Planner Coming soon </Box>}/>
                <Route path="/tools/gym-tracker" element={<Box> Gym Tracker Coming soon </Box>}/>
                <Route path="*" element={<Lost/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
