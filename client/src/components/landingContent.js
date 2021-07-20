import React from "react";

// The content for the landing page; responsible for the text

function LandingContainer(props) {

    const indent = {
        marginLeft: "3em",
        marginRight: "3em",
        paddingRight: "25em",
    }

    const largeMargin = {
        marginTop: "5rem"
    }

    const playfair = {
        fontFamily: "'Playfair Display SC', serif"
    }

    const smallCaps = {
        fontVariant: "small-caps"
    }

  return (
      <section className="is-flex is-flex-direction-column is-flex-wrap-wrap" style={indent}>
            <h1 className="is-size-1 has-text-weight-bold is-flex mt-3" style={playfair}>Workout Generator</h1>
            <h2 className="is-size-4 mt-3 mb-3">
                A simple solution for building healthy exercise habits. 
                Ten minute workouts for all skill levels.</h2>
            <button className="button is-black is-outlined is-large" style={largeMargin}>GET STARTED</button>
      </section>
  );
}

export default LandingContainer;