import TimerControls from "./TimerControls/TimerControls.jsx";
import TimerClock from "./TimerClock/TimerClock.jsx";
import ModeSelector from "../ModeSelector/ModeSelector.jsx";

function Timer() {
  return (
    <div className="timer-widget">
      <ModeSelector />
      <TimerClock />
      <TimerControls />
    </div>
  );
}

export default Timer;
