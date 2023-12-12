import TimerControls from "./TimerControls/TimerControls.jsx";
import TimerClock from "./TimerClock/TimerClock.jsx";

function TimerWidget() {
  return (
    <div className="timer-widget">
      <TimerClock />
      <TimerControls />
    </div>
  );
}

export default TimerWidget;
