import ChevronIcon from "../../../assets/componentized/Chevron/ChevronIcon/ChevronIcon.jsx";
import RefreshIcon from "../../../assets/componentized/RefreshIcon/RefreshIcon.jsx";
import {
  useCurrentPomodoroMode,
  useNextPomodoroModeContext,
  useResetPomodoroModeContext,
  useTogglePomodoroModeActivityContext,
} from "../../../services/hooks/usePomodoroModeContext.js";
import "./TimerControls.css";

function TimerControls() {
  const mode = useCurrentPomodoroMode();
  const toggleModeActivity = useTogglePomodoroModeActivityContext();
  const resetPomodoroMode = useResetPomodoroModeContext();
  const nextPomodoroMode = useNextPomodoroModeContext();

  const toggleButtonTextOptions = {
    inactive: "Play!",
    active: "Pause",
  };

  return (
    <div className="timer-controls">
      <button type="button" className="reset-mode" onClick={resetPomodoroMode}>
        <RefreshIcon />
      </button>
      <button
        type="button"
        className="toggle-pause"
        onClick={toggleModeActivity}
      >
        {mode.isActive
          ? toggleButtonTextOptions.active
          : toggleButtonTextOptions.inactive}
      </button>
      <button type="button" className="next-mode" onClick={nextPomodoroMode}>
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}

export default TimerControls;
