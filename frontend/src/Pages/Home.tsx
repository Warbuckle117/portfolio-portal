import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    // const [userData, setUserData] = useState<any>()

    // useEffect(() => {
    //     getUserList()
    // }, []);

    // function getUserList() {
    //     fetch("http://localhost:3102/")
    //         .then(response => response.json())
    //         .then(data => setUserData(data))
    // }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"}}
        >
            <h1>
                Home
            </h1>
            <p>
                Welcome to my website!
            </p>
            <p>
                Checkout my <Link to={"/about"}>About Me</Link> page to learn more about me.
            </p>
        </div>
        
    );
};

export default Home;