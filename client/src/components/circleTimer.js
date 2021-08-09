import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function CircleTimer(props) {

    console.log(props);

    return (
        <CountdownCircleTimer
        duration={60}
        size={400}
        isPlaying
        colors={[
          ['#000000', 0.33],
          ['#273746', 0.33],
          ['#E27B00', 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    )
}

export default CircleTimer;