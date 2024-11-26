import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import './Home.scss'

const Page = () => {
    return (
        <>
            <NavBar />
            <div className="home">
                <h1>Welcome to the Home Page</h1>
                <p>This is the home page content.</p>
            </div>
        </>
    );
};

export default Page;
