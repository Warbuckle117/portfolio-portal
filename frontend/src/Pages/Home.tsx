import React, {useEffect, useState} from 'react';
import {User} from "../Helpers/Types";

const Home = () => {
    const [userData, setUserData] = useState<any>()

    useEffect(() => {
        getUserList()
    }, []);

    function getUserList() {
        fetch("http://localhost:3102/all/users")
            .then(response => response.json())
            .then(data => console.log(data))
    }

    console.log("user data: \n", userData)
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
                This is the home page
            </p>
        </div>
        
    );
};

export default Home;