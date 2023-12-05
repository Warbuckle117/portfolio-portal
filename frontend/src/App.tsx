import React, {useEffect, useState} from 'react';
import './App.css';
import Users from "./Pages/Users";
import About from "./Pages/About";
import Home from "./Pages/Home";
import {Route, Routes} from "react-router-dom";
import TitleBar from "./Components/TitleBar";



function App() {
  const [backendUsers, setBackendUsers] = useState<string[]>([])

  useEffect(() => {
    getUserList()
  }, []);

  function getUserList() {
    fetch("http://localhost:3102/users")
        .then(response => response.json())
        .then(data => setBackendUsers(data))
  }

  console.log("These are the Backend Users", backendUsers)

  return (
    <div className="App">
        <TitleBar />
        <div>Work in Progress</div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="*" element={<>404 NOT FOUND</>}/>
        </Routes>
    </div>
  );
}

export default App;
