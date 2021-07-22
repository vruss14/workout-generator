import React from "react";
import "./landingStyle.css";

// The content for the landing page; responsible for the text

function LandingContainer() {

  function visitLogin() {
    location.href = ("/login");
  }

  return (
      <section className="is-flex is-flex-wrap-wrap" id="landing-content">
            <h1 className="is-size-1 has-text-weight-bold is-flex mt-3" id="landing-title">Workout Generator</h1>
            <h2 className="is-size-4 mt-3 mb-3">
                A simple solution for building healthy exercise habits. 
                Ten minute workouts for all skill levels.</h2>
            <button className="button is-black is-outlined is-large" id="get-started-btn">GET STARTED</button>
            <button className="button is-black is-outlined is-large mt-5" 
            id="log-in-btn"
            onClick={() => visitLogin()}>LOG IN</button>

      </section>
  );
}

export default LandingContainer;