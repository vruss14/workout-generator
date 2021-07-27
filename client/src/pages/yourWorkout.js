import React, { useState, useEffect } from "react";
import "../components/yourWorkout.css";

// The page that displays the user's workout

function YourWorkout() {

    let yourWorkoutStyle = { 
        opacity: "0%", 
        transition: "1s linear" 
    }
    
    let yourWorkoutAnimated = {
        opacity: "100%",
        transition: "1s ease-in",
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

    // 600 seconds = 10 minutes
    let secondsRemaining = 600;

    function startTimer() {
        let timerInterval = setInterval(function() {
          secondsRemaining--;
          console.log(secondsRemaining)
      
          if(secondsRemaining === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
          }
      
        }, 1000);
    }

    return (
        <main id="main-workout-container" style={animate ? yourWorkoutAnimated : yourWorkoutStyle}>
            <div className="columns" id="columns-container">

                <div className="column is-one-half is-flex is-align-items-center is-justify-content-center" id="workout-orange-container">
                    <div id="exercise-container">
                        <h1 className="has-text-centered pl-2 pr-2 mt-4 mb-5 custom-title">WORKOUT OVERVIEW</h1>


                        <table className="table is-hoverable is-striped is-bordered is-fullwidth has-text-centered">
                            <thead>
                                <tr>
                                    <th>Exercise</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tfoot className="has-text-centered">
                                <tr>
                                    <th colSpan="2">Repeat: 2x</th>
                                </tr>  
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td>Pushup</td>
                                    <td>1 minute</td>
                                </tr>
                                <tr>
                                    <td>Pushup</td>
                                    <td>1 minute</td>
                                </tr>
                                <tr>
                                    <td>Pushup</td>
                                    <td>1 minute</td>
                                </tr>
                                <tr>
                                    <td>Pushup</td>
                                    <td>1 minute</td>
                                </tr>
                                <tr>
                                    <td>Pushup</td>
                                    <td>1 minute</td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>

                <div className="column is-one-half has-background-light is-flex is-align-items-center is-justify-content-center" id="workout-light-container">
                    <div className="is-align-content-start" id="timer-container">
                        <h1 className="has-text-centered pl-2 pr-2 mt-4 mb-5 custom-title">TRACK PROGRESS</h1>
                        <button className="button is-black is-outlined is-large" 
                        id="start-workout-btn"
                        onClick={() => startTimer()}>START</button>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default YourWorkout;