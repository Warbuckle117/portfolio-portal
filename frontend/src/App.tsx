import React, {useEffect, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './App.css';
import ToolPage from "./Pages/ToolPage";
import About from "./Pages/About";
import Home from "./Pages/Home";
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

  console.log("backend users: \n", backendUsers)

  return (
    <div className="App">
        <TitleBar />
        <div className="page-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/tools" element={<ToolPage users={[]} />} />
                <Route path="*" element={<>You seem to be lost return to <Link to="/">Home</Link></>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
