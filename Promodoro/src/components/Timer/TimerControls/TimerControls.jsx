import RefreshIcon from "../../../assets/componentized/RefreshIcon/RefreshIcon.jsx";
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
      <button
        type="button"
        className="reset-time-left"
        onClick={resetPomodoroMode}
      >
        <RefreshIcon />
      </button>
    </div>
  );
}

export default TimerControls;
