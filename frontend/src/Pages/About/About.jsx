import React from "react";
import "./About.scss";
import NavBar from "../../components/NavBar/NavBar";

const About = () => {
    return (
        <>
            <NavBar />
            <div className="about">
                <h1>About Us</h1>
                <p>
                    Welcome to <span className="brand-name">ClothCart</span>, your one-stop shop for the latest trends in
                    clothing and fashion. Our mission is to provide quality apparel and accessories that fit your unique
                    style and personality.
                </p>
            </div>
        </>
    );
};

export default About;
