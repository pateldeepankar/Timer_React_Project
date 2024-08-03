import { useEffect, useState } from "react";
import "./styles.css";
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      } else {
        setSeconds(seconds + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const startTimer = () => {
    setSeconds(0);
    setMinutes(0);
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  return (
    <>
      <div className="timer">
        <div className="timer_container">
          <h1 className="header">Timer</h1>
          <h1>
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>
        </div>
        <button onClick={startTimer} className="start">
          Start
        </button>
        <button onClick={stopTimer} className="stop">
          Stop
        </button>
      </div>
    </>
  );
}
