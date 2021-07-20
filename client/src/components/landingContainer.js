import React from "react";
import LandingContent from "./landingContent.js";
import LandingImg from "./landingImg.js";
import "./landingStyle.css";

// The container for the landing page; responsible for the dual background colors

function LandingContainer(props) {

    const height = {
        height: "100vh",
        margin: 0
    }

    const orange = {
        backgroundColor: "#E27B00"
    }

  return (
      <main>
            <div className="columns" style={height}>
                <div className="column is-three-fifths has-background-light is-flex is-align-items-center">
                    <LandingContent />
                </div>
                <div className="column is-two-fifths is-flex is-align-items-center" style={orange}>
                    <LandingImg />
                </div>
            </div>
      </main>
  );
}

export default LandingContainer;