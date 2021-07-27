import React, { useState, useEffect } from "react";
import CreateAccountForm from "../components/createAccountForm.js";
import "../css/createAccountStyle.css";

// The Create Account page

function Login() {

  // Switching the inline styling results in fade-in/fade-out animations
  let createStyle = { 
    opacity: "0%", 
    transition: "1s linear"
  }

  let createAnimated = {
    opacity: "100%",
    transition: "1s ease-in",
  }

  // The useEffect hook is used to switch styles on page load, resulting in the animation

  useEffect(() => {
      animatePage();
  }, []);

  const [animate, setAnimate] = useState(false)

  function animatePage() {
      setAnimate(true);
  }

  // Resets animate back to the default style (goes from 100% opacity to 0%)

  window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    setAnimate(false)
  });

  return (
      <main id="main-create-account-container" style={animate ? createAnimated : createStyle}>
        <div id="position-relative">
          <CreateAccountForm />
        </div>
      </main>
  );
}

export default Login;