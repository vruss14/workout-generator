import React, { useState, useEffect } from "react";
import "../components/beginnerExercises.css";

// The Beginner Exercises Page

function BeginnerExercises() {

  // Switching the inline styling results in fade-in/fade-out animations
  let beginnerPage = { 
    opacity: "0%", 
    transition: "1.6s linear"
  }

  let beginnerPageAnimated = {
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
      <main id="main-beginner-container" style={animate ? beginnerPageAnimated : beginnerPage}>
          <div id="beginner-top-div" className="has-background-light">
            <h1 className="pt-5 has-text-centered" id="beginner-title">Which of these exercises would be okay to include in your workout?</h1>
            <p className="has-text-centered ml-3 mr-3 pl-3 pr-3 page-descr">*Please select at least five exercises to ensure your workout has enough variety.</p>
          </div>

          <form className="box has-background-light has-text-centered" id="beginner-form-container">

            <div className="columns p-5 is-desktop" id="custom-columns">

                <div className="column is-one-third custom-col">
                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Push-ups (kneeling)
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Crunches
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Shoulder taps
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Stretches
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Squats
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Lunges
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Shoulder taps
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Stretches
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Squats
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Lunges
                            </label>
                        </div>
                    </div>

                </div>

                <div className="column is-one-third has-text-justified custom-col">
                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Push-ups (kneeling)
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Crunches
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Shoulder taps
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Stretches
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Squats
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Lunges
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Shoulder taps
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Stretches
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Squats
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Lunges
                            </label>
                        </div>
                    </div>

                </div>

                <div className="column is-one-third has-text-justified custom-col">
                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Bicep Curls
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Tricep Curls
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Resistance Band Pulls
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Jump Rope
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Push-ups (yoga blocks)
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Ab Wheel
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Resistance Band Pulls
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Jump Rope
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Push-ups (yoga blocks)
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="checkbox is-size-5">
                                <input type="checkbox" /> &nbsp; Ab Wheel
                            </label>
                        </div>
                    </div>

                </div>
            </div>

            <button className="button is-black is-outlined is-large has-text-centered" 
                id="beginner-form-submit"
                onClick={(event) => visitHome(event)}>CREATE MY WORKOUT
            </button>


            </form>

          <div id="beginner-bottom-div"></div>
      </main>
  );
}

export default BeginnerExercises;