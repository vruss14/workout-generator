import React, { useState } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function CircleTimer() {

    const style = {
        fontSize: "28px"
    }

    const largeStyle = {
        fontSize: "48px"
    }

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
          return <div className="timer" style={largeStyle}>Nice work!</div>;
        }
      
        return (
          <div className="timer">
            <div className="value">{remainingTime}</div>
            <div className="text" style={style}>seconds left...</div>
          </div>
        );
    };

    // Responsiveness; check the browser width before rendering the circleTimer component

    const [timerSize, setTimerSize] = useState(400);

    function changeSize() {

      if(window.innerWidth < 592) {
        setTimerSize(250);
        return 250;
      } else if (window.innerWidth < 768) {
        setTimerSize(300);
        return 300;
      } else if (window.innerWidth < 850) {
        setTimerSize(250);
        return 250;
      } else if (window.innerWidth < 1050) {
        setTimerSize(300)
        return 300;
      } else {
        setTimerSize(400);
        return 400;
      }
    }

    // Updates size if the user changes the browser viewport width
    window.addEventListener('resize', changeSize);

    let count = 0;

    // The timer is 60 seconds long and will repeat 10 times (i.e. 10 minutes) then stop repeating

    return (
        <CountdownCircleTimer
        duration={60}
        size={timerSize}
        // size={window.innerWidth < 768 ? 200 : 400}
        isPlaying
        onComplete={() => {
            if(count < 10) {
                count++
                return [true, 2000] // repeats the timer after two seconds
            }
            return false;
        }}
        colors={[
          ['#000000', 0.33],
          ['#273746', 0.33],
          ['#E27B00', 0.33],
        ]}
      >
        {renderTime}
      </CountdownCircleTimer>
    )
}

export default CircleTimer;