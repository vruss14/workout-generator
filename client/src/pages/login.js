import React, { useState, useEffect } from "react";
import LoginForm from "../components/loginform.js";

// The Log In page

function Login() {

  let loginStyle = { opacity: "0%" }

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

  return (
      <div style={animate ? loginAnimated : loginStyle}>
        <LoginForm />
      </div>
  );
}

export default Login;