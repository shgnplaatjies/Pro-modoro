import PropTypes from "prop-types";
import {
  useCurrentPomodoroMode,
  useUpdatePomodoroMode,
} from "../../services/hooks/useApplicationContext";
import { POMODORO_MODES } from "../../services/constants/PomodoroModes";

/**
 * Renders the various Pomodoro app modes
 *
 * @param {object} props properties
 * @param {string} props.mode Pomodoro mode to render
 */
function Pomodoro({ mode }) {
  const { longBreak } = POMODORO_MODES;
  const updatePomodoroMode = useUpdatePomodoroMode();
  const currentPomodoroMode = useCurrentPomodoroMode();
  return (
    <>
      <h3>Current Pomodoro mode: {mode}</h3>
      <button
        type="button"
        onClick={() => {
          updatePomodoroMode(
            currentPomodoroMode === POMODORO_MODES.default
              ? longBreak
              : POMODORO_MODES.default
          );
        }}
      >
        Change to{" "}
        {currentPomodoroMode === POMODORO_MODES.default
          ? longBreak
          : POMODORO_MODES.default}
      </button>
    </>
  );
}

Pomodoro.propTypes = {
  mode: PropTypes.string,
};

export default Pomodoro;
