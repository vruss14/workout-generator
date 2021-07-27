import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

    // This toggles all icons; need to change for specific question
    
    const [icon, setIcon] = useState(true)

    function toggleIcon() {
        if(icon === true) {
            setIcon(false);
        } else if (icon === false) {
            setIcon(true);
        }
    }

    return (
        <main id="main-faq-container" style={animate ? FAQAnimated : FAQStyle}>
            <div className="columns" id="columns-container">
                <div className="column is-one-third is-flex is-align-items-center" id="orange-container"></div>
                <div className="column has-background-light is-two-thirds" id="light-container">
                    <h1 id="faq-title">FREQENTLY ASKED QUESTIONS</h1>
                    <div id="questions-container">

                        <p onClick={ () => toggleIcon()} className="question">
                            <span>{icon === true ? <FontAwesomeIcon  onClick={ () => toggleIcon()} icon="plus" /> 
                            : <FontAwesomeIcon onClick={() => toggleIcon()} icon="minus" /> }
                            </span> Does this workout generator include options for all skill levels?
                        </p>
                        <p className="answer">Yes, all workouts are completely customizable. You can choose a gentle, moderate, or advanced workout and
                        then choose specific exercises that you would feel comfortable doing so that your generated workout doesn't have anything
                        you do not like.</p>

                        <p onClick={ () => toggleIcon()} className="question">
                            <span>{icon === true ? <FontAwesomeIcon  onClick={ () => toggleIcon()} icon="plus" /> 
                            : <FontAwesomeIcon onClick={() => toggleIcon()} icon="minus" /> }
                            </span> Does this workout generator include options for all skill levels?
                        </p>
                        <p className="answer">Yes, all workouts are completely customizable. You can choose a gentle, moderate, or advanced workout and
                        then choose specific exercises that you would feel comfortable doing so that your generated workout doesn't have anything
                        you do not like.</p>

                        <p onClick={ () => toggleIcon()} className="question">
                            <span>{icon === true ? <FontAwesomeIcon  onClick={ () => toggleIcon()} icon="plus" /> 
                            : <FontAwesomeIcon onClick={() => toggleIcon()} icon="minus" /> }
                            </span> Does this workout generator include options for all skill levels?
                        </p>
                        <p className="answer">Yes, all workouts are completely customizable. You can choose a gentle, moderate, or advanced workout and
                        then choose specific exercises that you would feel comfortable doing so that your generated workout doesn't have anything
                        you do not like.</p>

                        <p onClick={ () => toggleIcon()} className="question">
                            <span>{icon === true ? <FontAwesomeIcon  onClick={ () => toggleIcon()} icon="plus" /> 
                            : <FontAwesomeIcon onClick={() => toggleIcon()} icon="minus" /> }
                            </span> Does this workout generator include options for all skill levels?
                        </p>
                        <p className="answer">Yes, all workouts are completely customizable. You can choose a gentle, moderate, or advanced workout and
                        then choose specific exercises that you would feel comfortable doing so that your generated workout doesn't have anything
                        you do not like.</p>

                        <p onClick={ () => toggleIcon()} className="question">
                            <span>{icon === true ? <FontAwesomeIcon  onClick={ () => toggleIcon()} icon="plus" /> 
                            : <FontAwesomeIcon onClick={() => toggleIcon()} icon="minus" /> }
                            </span> Does this workout generator include options for all skill levels?
                        </p>
                        <p className="answer">Yes, all workouts are completely customizable. You can choose a gentle, moderate, or advanced workout and
                        then choose specific exercises that you would feel comfortable doing so that your generated workout doesn't have anything
                        you do not like.</p>


                    </div>
                </div>
            </div>
        </main>
    );
}

export default FAQ;