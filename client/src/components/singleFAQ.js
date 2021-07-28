import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../css/FAQ.css";

// Single question & answer 

function Question() {

    const [icon, setIcon] = useState(true)

    function toggleIcon() {
        if(icon === true) {
            setIcon(false);
        } else if (icon === false) {
            setIcon(true);
        }
    }

  return (

    <div className="mt-3 mb-3">
        <p onClick={ () => toggleIcon()} className="question">
            <span>{icon === true ? <FontAwesomeIcon  onClick={ () => toggleIcon()} icon="plus" /> 
            : <FontAwesomeIcon onClick={() => toggleIcon()} icon="minus" /> }
            </span> &nbsp; Does this workout generator include options for all skill levels?
        </p>

        {icon === false ? <p className="answer mt-4">Yes, all workouts are completely customizable. You can choose a gentle, moderate, or advanced workout and
        then choose specific exercises that you would feel comfortable doing so that your generated workout doesn't have anything
        you do not like.</p> : null }
    </div>
  );
}

export default Question;