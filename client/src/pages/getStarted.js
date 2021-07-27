import React, { useState, useEffect } from "react";
import "../css/getStartedStyle.css";
import SitUpImg from "../images/exercise-situp-svgrepo-com.svg";
import WeightsImg from "../images/exercise-dumbbells-svgrepo-com.svg";
import PullUpImg from "../images/exercise-pullup-svgrepo-com.svg";

// The Get Started page

function GetStartedPage() {

  // Switching the inline styling results in fade-in/fade-out animations
  let getStarted = { 
    opacity: "0%", 
    transition: "1s linear"
  }

  let getStartedAnimated = {
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
      <main id="main-start-container" style={animate ? getStartedAnimated : getStarted}>
          <div id="start-top-div" className="has-background-light">
            <h1 className="mb-3 pt-5 has-text-centered" id="get-started-title">What best describes what you're looking for today?</h1>

            <div id="card-container">

                <div className="card custom-card" id="card-gentle">
                    <a className="exercise-form-link" href="gentle-exercises">
                      <div className="card-image">
                          <figure className="image is-4by3">
                              <img src={SitUpImg} alt="Person doing situp" className="p-5" />
                          </figure>
                      </div>
                      <div className="card-content has-text-centered">
                          <div className="content custom-content">
                              <p>Today, I'm looking for a slow, gentle workout.</p>
                          </div>
                      </div>
                    </a>
                </div>

                <div className="card custom-card" id="card-moderate">
                    <a className="exercise-form-link" href="/moderate-exercises">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src={WeightsImg} alt="Person holding weights" className="p-5" />
                            </figure>
                        </div>
                        <div className="card-content has-text-centered">
                            <div className="content custom-content">
                            <p>I'm looking for a workout with a moderate level of intensity today. 
                                </p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="card custom-card" id="card-intense">
                    <a className="exercise-form-link" href="/advanced-exercises">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src={PullUpImg} alt="Person doing a pullup" className="p-5" />
                            </figure>
                        </div>
                        <div className="card-content has-text-centered">
                            <div className="content custom-content">
                            <p>I want to try a more intense workout today that really pushes me.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
          </div>

          <div id="start-bottom-div"></div>
      </main>
  );
}

export default GetStartedPage;