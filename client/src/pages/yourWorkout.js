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
        renderModal();
    }, []);
    
    const [animate, setAnimate] = useState(false)
    
    function animatePage() {
        setAnimate(true);
    }

    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        setAnimate(false)
    });

    const [showTimer, setShowTimer] = useState(false)

    function startTimer() {

        if(showTimer) {
            setShowTimer(false)
        }

        // Disables the start button after it has been pressed
        document.getElementById("start-workout-btn").disabled = true;

        setShowTimer(true);
    }

    function renderModal() {
        document.querySelector(".modal").classList.add("is-active");
    }
    
    function removeModal() {
        document.querySelector(".modal").classList.remove("is-active");
    }

    // Allows a user to click anywhere on the page for the modal to disappear
    function exitModal() {
        if(document.querySelector(".modal").classList.contains("is-active")) {
            document.querySelector(".modal").classList.remove("is-active")
        }
    }

    document.body.addEventListener("click", exitModal)

    return (
        <main id="main-workout-container" style={animate ? yourWorkoutAnimated : yourWorkoutStyle}>

            <div className="modal">
                <div className="modal-background"></div>
                    <div className="modal-card">
                    <header className="modal-card-head has-text-centered p-5">
                        <p className="modal-card-title" id="modal-title">Your workout has been generated! 🎉 </p>
                        <button id="close-btn" className="delete" aria-label="close" onClick={() => removeModal()}></button>
                    </header>
                    <section className="modal-card-body" id="modal-text">
                        Preview the exercises on the left side of the page.
                        When you are ready, start the timer by pressing the "Start" button on the right side of the page.
                        The timer will count down ten times from 60 seconds, once for each exercise. 
                    </section>
                    <footer className="modal-card-foot is-flex is-justify-content-center">
                        <button id="okay-btn" className="button has-text-centered" onClick={() => removeModal()}>Okay! Let's go!</button>
                    </footer>
                </div>
            </div>

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
                                <tr id="first-row">
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

                        <h2 className="has-text-centered pl-2 pr-2 mt-5 mb-5 custom-title">You've got this! 💪</h2>
                    </div>
                </div>

                <div className="column is-one-half has-background-light is-flex is-align-items-center is-justify-content-center" id="workout-light-container">
                    <div className="is-align-content-start" id="timer-container">
                        <h1 className="has-text-centered pl-2 pr-2 mt-4 mb-5 custom-title">TRACK PROGRESS</h1>
                        <button className="button is-black is-outlined is-large" id="start-workout-btn"
                        onClick={() => startTimer()}>START</button>

                        {showTimer ? 
                            <div id="circle-timer-container">
                                <CircleTimer />
                            </div> : null }
                    </div>
                </div>

            </div>
        </main>
    );
}

export default YourWorkout;