import React, { useState, useEffect } from "react";
import LandingContent from "../components/landingContent.js";
import LandingImg from "../components/landingImg.js";
import "../components/landingStyle.css";

// The container for the landing page; responsible for the dual background colors

function Landing() {

    let mainStyle = { 
        opacity: "0%", 
        transition: "1.6s linear" 
    }
    
    let mainAnimated = {
        opacity: "100%",
        transition: "1.6s ease-in",
    }

    useEffect(() => {
        animatePage();
    }, []);
    
    const [animate, setAnimate] = useState(false)
    
    function animatePage() {
        setAnimate(true);
    }

    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        setAnimate(false)
    });

    return (
        <main id="main-container" style={animate ? mainAnimated : mainStyle}>
            <div className="columns" id="columns-container">
                <div className="column is-three-fifths has-background-light is-flex is-align-items-center" id="landing-content-container">
                    <LandingContent />
                </div>
                <div className="column is-two-fifths is-flex is-align-items-center" id="landing-img-container">
                    <LandingImg />
                </div>
            </div>
        </main>
    );
}

export default Landing;