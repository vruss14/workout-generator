import React, { useState, useEffect } from "react";
import "../css/yourWorkout.css";
import CircleTimer from "../components/circleTimer.js";

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

    return (
        <main id="main-workout-container" style={animate ? yourWorkoutAnimated : yourWorkoutStyle}>
            <div className="columns" id="columns-container">

                <div className="column is-one-half is-flex is-align-items-center is-justify-content-center" id="workout-orange-container">
                    <div id="exercise-container">
                        <h1 className="has-text-centered pl-2 pr-2 mt-4 mb-5 custom-title">WORKOUT OVERVIEW</h1>


                        <table className="table is-bordered is-fullwidth has-text-centered">
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
                                <tr id="first-row" className="custom-select">
                                    <td>Pushup</td>
                                    <td>1 minute</td>
                                </tr>
                                <tr id="second-row">
                                    <td>Pushup</td>
                                    <td>1 minute</td>
                                </tr>
                                <tr id="third-row">
                                    <td>Pushup</td>
                                    <td>1 minute</td>
                                </tr>
                                <tr id="fourth-row">
                                    <td>Pushup</td>
                                    <td>1 minute</td>
                                </tr>
                                <tr id="fifth-row">
                                    <td>Pushup</td>
                                    <td>1 minute</td>
                                </tr>
                            </tbody>
                            </table>

                        <h2 className="has-text-centered pl-2 pr-2 mt-5 mb-5 custom-title">You've got this!</h2>
                    </div>
                </div>

                <div className="column is-one-half has-background-light is-flex is-align-items-center is-justify-content-center" id="workout-light-container">
                    <div className="is-align-content-start" id="timer-container">
                        <h1 className="has-text-centered pl-2 pr-2 mt-4 mb-5 custom-title">TRACK PROGRESS</h1>
                        <button className="button is-black is-outlined is-large" id="start-workout-btn"
                        onClick={() => startTimer()}>START</button>

                        <div id="circle-timer-container">
                            <CircleTimer />
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default YourWorkout;