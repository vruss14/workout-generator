import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../css/FAQ.css";

// Single question & answer 

function Question(props) {

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
            </span> &nbsp; {props.question}
        </p>

        {icon === false ? <p className="answer mt-4">{props.answer}</p> : null }
    </div>
  );
}

export default Question;