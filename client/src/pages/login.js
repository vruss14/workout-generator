import React, { useState, useEffect } from "react";
import LoginForm from "../components/loginform.js";

// The Log In page

function Login() {

  let loginStyle = { 
    opacity: "0%", 
    transition: "1.6s linear"
  }

  let loginAnimated = {
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
      <div style={animate ? loginAnimated : loginStyle}>
        <LoginForm />
        <a href="/"><button>RETURN HOME</button></a>
      </div>
  );
}

export default Login;