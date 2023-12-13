import ChevronIcon from "../../../assets/componentized/Chevron/ChevronIcon/ChevronIcon.jsx";
import {
  useCurrentPomodoroMode,
  useResetPomodoroModeContext,
  useTogglePomodoroModeActivityContext,
} from "../../../services/hooks/usePomodoroModeContext.js";
import "./TimerControls.css";

function TimerControls() {
  const mode = useCurrentPomodoroMode();
  const toggleModeActivity = useTogglePomodoroModeActivityContext();
  const resetPomodoroMode = useResetPomodoroModeContext();

  const nextMode = () => {
    resetPomodoroMode();
  };

  const toggleButtonTextOptions = {
    inactive: "Play!",
    active: "Pause",
  };

  return (
    <div className="timer-controls">
      <button
        type="button"
        className="toggle-pause"
        onClick={toggleModeActivity}
      >
        {mode.isActive
          ? toggleButtonTextOptions.active
          : toggleButtonTextOptions.inactive}
      </button>
      <button type="button" className="next-mode" onClick={nextMode}>
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}

export default TimerControls;
