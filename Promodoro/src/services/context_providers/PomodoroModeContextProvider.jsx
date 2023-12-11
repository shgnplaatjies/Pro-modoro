import { useCallback, useState } from "react";
import { POMODORO_MODES } from "../constants/PomodoroModes.js";
import {
  CurrentPomodoroModeContext,
  AvailablePomodoroModesContext,
  UpdatePomodoroModeContext,
  ResetPomodoroModeContext,
} from "../contexts/PomodoroModeContext.js";
import PropTypes from "prop-types";

/**
 * Provides the values for Pomodoro modes context
 *
 * @param {React.JSX.Element} children Uses react's built-in prop 'children'
 * @returns
 */
const PomodoroModesContextProvider = ({ children }) => {
  const [mode, setMode] = useState(POMODORO_MODES.default);

  const isValid = (newMode) => {
    for (const key in POMODORO_MODES)
      if (newMode === POMODORO_MODES[key]) return true;
    return false;
  };

  const changeMode = useCallback((newMode) => {
    if (isValid(newMode)) setMode(newMode);
    else
      throw Error(
        "String doesn't map to a valid pomodoro mode key, use the global constant."
      );
  }, []);

  const resetMode = useCallback(() => setMode(POMODORO_MODES.default), []);

  return (
    <CurrentPomodoroModeContext.Provider value={mode}>
      <AvailablePomodoroModesContext.Provider value={POMODORO_MODES}>
        <UpdatePomodoroModeContext.Provider value={changeMode}>
          <ResetPomodoroModeContext.Provider value={resetMode}>
            {children}
          </ResetPomodoroModeContext.Provider>
        </UpdatePomodoroModeContext.Provider>
      </AvailablePomodoroModesContext.Provider>
    </CurrentPomodoroModeContext.Provider>
  );
};

PomodoroModesContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PomodoroModesContextProvider;
