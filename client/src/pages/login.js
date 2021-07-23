import React, { useState, useEffect } from "react";
import LoginForm from "../components/loginform.js";
import "../components/loginStyle.css";

// The Log In page

function Login() {

  // Switching the inline styling results in fade-in/fade-out animations
  let loginStyle = { 
    opacity: "0%", 
    transition: "1.6s linear"
  }

  let loginAnimated = {
    opacity: "100%",
    transition: "1.6s ease-in",
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
      <main id="main-login-container" style={animate ? loginAnimated : loginStyle}>
        <div id="relative-div">
          <LoginForm />
        </div>
      </main>
  );
}

export default Login;