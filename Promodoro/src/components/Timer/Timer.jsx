import TimerControls from "./TimerControls/TimerControls.jsx";
import TimerClock from "./TimerClock/TimerClock.jsx";

function Timer() {
  return (
    <div className="timer-widget">
      <TimerClock />
      <TimerControls />
    </div>
  );
}

export default Timer;
