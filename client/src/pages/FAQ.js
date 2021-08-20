import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Question from "../components/singleFAQ.js"
import "../css/FAQ.css";

// The container for the landing page; responsible for the dual background colors

function FAQ() {

    let FAQStyle = { 
        opacity: "0%", 
        transition: "1s linear" 
    }
    
    let FAQAnimated = {
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

    function visitGetStarted() {
        location.href = "/get-started";
      }

    return (
        <main id="main-faq-container" style={animate ? FAQAnimated : FAQStyle}>
            <div className="columns" id="columns-container">
                <div className="column is-one-third is-flex is-align-items-center" id="orange-container"></div>
                <div className="column has-background-light is-two-thirds" id="light-container">
                    <h1 id="faq-title">FREQENTLY ASKED QUESTIONS</h1>
                    <div id="questions-container">
                        <Question
                        question="How gentle are the gentle exercises?"
                        answer="A gentle workout incorporates only low-impact exercises and will include time to rest.
                        If there are exercises you don't feel comfortable doing, you can choose not to select them as you
                        share your preferences." />
                        <Question
                        question="Do I need to purchase any equipment?"
                        answer="Some of the exercises will require equipment. If you prefer exercises without equipment,
                        select those options as you create your workout." />
                        <Question
                        question="How does the timer work?"
                        answer="Once you press the start button, the timer will count down 10 times from 60 seconds.
                        Currently, you cannot pause or reset the timer." />
                        <Question
                        question="What should I do if I don't understand how to perform a certain exercise?"
                        answer="While this site currently does not have informative videos for each exercise,
                        you are welcome to search the name of the exercise in a search engine to find demonstration videos." />
                        <Question
                        question="What if I want a workout that is longer than 10 minutes?"
                        answer="You are welcome to complete your workout multiple times (e.g. repeat twice for 20 minutes,
                        or three times for 30 minutes), or you could create multiple workouts based on your preferences." />

                        <button className="button is-black is-outlined is-large mb-2" id="start-btn"
                        onClick={() => visitGetStarted()}>GET STARTED</button>

                    </div>


                </div>
            </div>
        </main>
    );
}

export default FAQ;