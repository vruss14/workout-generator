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

  function visitHome(event) {
    event.preventDefault();
    location.href = "/";
  }

  return (
      <main id="main-login-container" style={animate ? loginAnimated : loginStyle}>
        <LoginForm />

        {/* <form className="box has-background-light" id="form-container">

          <h1 className="has-text-weight-bold has-text-centered mt-3 mb-3" id="login-form-title">Log In</h1>

          <div className="field">
            <label className="is-size-4 mt-4 mb-4 custom-label">Email</label>
            <div className="control">
              <input className="input mt-3" type="email" placeholder="e.g. alex@example.com" />
            </div>
          </div>

          <div className="field">
            <label className="is-size-4 mt-4 mb-4 custom-label">Password</label>
            <div className="control">
              <input className="input mt-3" type="password" placeholder="********" />
            </div>
          </div>

          <button className="button is-black is-outlined is-large mt-5 has-text-centered" 
            id="log-in-submit"
            onClick={(event) => visitHome(event)}
            >LOG IN</button>
        </form> */}
      </main>
  );
}

export default Login;