import PropTypes from "prop-types";
import "./ModeSelectorButton.css";
import {
  useCurrentPomodoroMode,
  useSwitchPomodoroMode,
} from "../../../services/hooks/usePomodoroModeContext.js";

/**
 * A component that allows you to select a mode
 *
 * @param {object} props Properties
 * @param {string} props.name Name to display on button
 * @param {string} props.modeKey Key from mode object that corresponds to this mode
 * @returns {JSX.Element} Mode selector button
 */
function ModeSelectorButton({ name, modeKey }) {
  const switchMode = useSwitchPomodoroMode();
  const currentMode = useCurrentPomodoroMode();

  return (
    <button
      type="button"
      className={`mode-selection ${
        currentMode.key === modeKey ? "selected" : ""
      }`}
      onClick={() => {
        switchMode(modeKey);
      }}
    >
      {name}
    </button>
  );
}

ModeSelectorButton.propTypes = {
  name: PropTypes.string.isRequired,
  modeKey: PropTypes.string.isRequired,
};

export default ModeSelectorButton;
