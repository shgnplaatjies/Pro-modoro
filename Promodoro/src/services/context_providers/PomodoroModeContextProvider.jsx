import { useCallback, useState, useEffect } from "react";
import { POMODORO_OBJECTS } from "../constants/PomodoroModes.js";
import {
  CurrentPomodoroModeContext,
  AvailablePomodoroModesContext,
  SwitchPomodoroModeContext,
  TogglePomodoroModeActivityContext,
  ResetPomodoroModeContext,
} from "../contexts/PomodoroModeContext.js";
import PropTypes from "prop-types";
import { playAlarm } from "../../assets/sounds/SimpleSounds/SimpleSounds.js";

/**
 * Provides the values for Pomodoro modes context
 *
 * @param {React.JSX.Element} children Uses react's built-in prop 'children'
 * @returns
 */
const PomodoroModesContextProvider = ({ children }) => {
  const [mode, setMode] = useState(POMODORO_OBJECTS.default);
  const [modes, setModes] = useState(POMODORO_OBJECTS);

  const isValid = (newModeKey) => {
    for (const key in POMODORO_OBJECTS)
      if (newModeKey === POMODORO_OBJECTS[key]) return true;
    return false;
  };

  const syncModes = useCallback(() => {
    for (const key in modes)
      if (modes[key].name === mode.name) {
        const updatedModes = {};
        updatedModes[key] = mode;
        setModes({ ...modes, ...updatedModes });
      }
  }, [mode, modes]);

  const switchMode = useCallback(
    (newModeKey) => {
      if (isValid(newModeKey)) {
        syncModes();
        setMode(modes[newModeKey]);
      } else
        throw Error(
          "String doesn't map to a valid pomodoro mode key, use the global constant."
        );
    },
    [syncModes, modes]
  );

  const updateMode = useCallback(() => {
    if (mode.timeLeft === 0) {
      setMode({ ...mode, isActive: false });
      playAlarm();
      // TODO: Implement logic to switch mode based on pomodoro pattern (┬┬﹏┬┬)
    } else if (mode.isActive) {
      setMode((prev) => ({ ...mode, timeLeft: prev.timeLeft - 1 }));
    }
  }, [mode]);

  useEffect(() => {
    let timeoutId; // Not strictly functional, but rules are meant to be broken, ama'right?( ´･･)ﾉ(._.`)
    if (mode.isActive && mode.timeLeft > 1)
      timeoutId = setTimeout(() => updateMode(), 1000);

    return () => clearTimeout(timeoutId);
  }, [mode.isActive, mode.timeLeft, updateMode]);

  const toggleCurrentModeActive = useCallback(() => {
    setMode((prev) => ({ ...mode, isActive: !prev.isActive }));
  }, [mode]);

  const resetMode = useCallback(() => setMode(POMODORO_OBJECTS.default), []);

  return (
    <CurrentPomodoroModeContext.Provider value={mode}>
      <AvailablePomodoroModesContext.Provider value={modes}>
        <SwitchPomodoroModeContext.Provider value={switchMode}>
          <ResetPomodoroModeContext.Provider value={resetMode}>
            <TogglePomodoroModeActivityContext.Provider
              value={toggleCurrentModeActive}
            >
              {children}
            </TogglePomodoroModeActivityContext.Provider>
          </ResetPomodoroModeContext.Provider>
        </SwitchPomodoroModeContext.Provider>
      </AvailablePomodoroModesContext.Provider>
    </CurrentPomodoroModeContext.Provider>
  );
};

PomodoroModesContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PomodoroModesContextProvider;
