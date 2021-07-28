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

    return (
        <main id="main-faq-container" style={animate ? FAQAnimated : FAQStyle}>
            <div className="columns" id="columns-container">
                <div className="column is-one-third is-flex is-align-items-center" id="orange-container"></div>
                <div className="column has-background-light is-two-thirds" id="light-container">
                    <h1 id="faq-title">FREQENTLY ASKED QUESTIONS</h1>
                    <div id="questions-container">
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FAQ;