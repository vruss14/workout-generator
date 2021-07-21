import React from "react";
import LandingContent from "./landingContent.js";
import LandingImg from "./landingImg.js";
import "./landingStyle.css";

// The container for the landing page; responsible for the dual background colors

function LandingContainer() {

  return (
      <main id="main-container">
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

export default LandingContainer;