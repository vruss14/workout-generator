import React, { useState, useEffect } from "react";
import DumbbellImg from "../images/kelly-sikkema-IZOAOjvwhaM-unsplash.jpg"
import "./landingStyle.css";

// The image for the landing page; responsible for the text

function LandingImg() {

    let imgStyle = {
        borderRadius: "50%",
        border: "3px solid #273746",
        position: "relative",
        left: "-52%",
        opacity: "100%"
    }

    let rotatedImg = {
        borderRadius: "50%",
        border: "3px solid #273746",
        position: "relative",
        left: "-52%",
        transition: "2s ease-out",
        transform: "rotateZ(30deg)",
        boxShadow: "10px 10px 20px black"
    }

    useEffect(() => {
        toggleImg();
    }, []);

    const [rotate, setRotate] = useState(false)

    function toggleImg() {
        setRotate(true);
    }

    function updateRotation() {
        if(rotate === false) {
            setRotate(true)
        }
    }

  return (
    <img src={DumbbellImg} 
      alt="Hand holding dumbbell" 
      id="dumbbell-img"
      onMouseEnter={() => updateRotation()}
      onMouseLeave={() => updateRotation()}
      style={rotate ? rotatedImg : imgStyle} />
  );
}

export default LandingImg;