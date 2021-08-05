import React from "react";
import "../css/landingStyle.css";

// The content for the landing page; responsible for the text

function LandingContainer() {

  function visitLogin() {
    location.href = ("/login");
  }

  function visitGetStarted() {
    location.href = "/get-started";
  }

  function visitFAQ() {
    location.href = "/frequently-asked-questions";
  }

  return (
      <section className="is-flex is-flex-wrap-wrap" id="landing-content">
            <h1 className="is-size-1 has-text-weight-bold is-flex mt-3" id="landing-title">Workout Generator</h1>
            <h2 className="is-size-4 mt-3 mb-3" id="landing-description">
                A simple solution for building healthy exercise habits. 
                Ten minute workouts for all skill levels. Start generating your workout right away, log in
                to your dashboard, or view frequently asked questions below.</h2>

            <button className="button is-black is-outlined is-large" id="get-started-btn"
            onClick={() => visitGetStarted()}>GET STARTED</button>

            <button className="button is-black is-outlined is-large mt-5" id="log-in-btn"
            onClick={() => visitLogin()}>LOG IN</button>

            <button className="button is-black is-outlined mt-5 is-large" id="questions-btn"
            onClick={() => visitFAQ()}>FAQ</button>

      </section>
  );
}

export default LandingContainer;