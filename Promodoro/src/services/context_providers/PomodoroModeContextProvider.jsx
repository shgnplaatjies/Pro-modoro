import { useCallback, useState, useEffect } from "react";
import {
  POMODORO_OBJECTS,
  POMODORO_MODE_KEYS,
} from "../constants/PomodoroModes.js";
import {
  CurrentPomodoroModeContext,
  AvailablePomodoroModesContext,
  SwitchPomodoroModeContext,
  TogglePomodoroModeActivityContext,
  ResetPomodoroModeContext,
  NextPomodoroModeContext,
} from "../contexts/PomodoroModeContext.js";
import { playAlarm } from "../../assets/sounds/SimpleSounds/SimpleSounds.js";
import { ContextProviderPropTypes } from "../constants/PropTypeShapes.js";
import {
  useCurrentLongBreakIntervalContext,
  useIncrementCurrentLongBreakIntervalContext,
  useMaxLongBreakIntervalContext,
} from "../hooks/useLongBreakIntervalContext.js";

/**
 * Provides the values for Pomodoro modes context
 *
 * @param {React.JSX.Element} children Uses react's built-in prop 'children'
 * @returns
 */
function PomodoroModesContextProvider({ children }) {
  const currentInterval = useCurrentLongBreakIntervalContext();
  const incrementCurrentInterval =
    useIncrementCurrentLongBreakIntervalContext();
  const maxInterval = useMaxLongBreakIntervalContext();

  const [mode, setMode] = useState(POMODORO_OBJECTS.default);
  const [modes, setModes] = useState(POMODORO_OBJECTS);

  const isValid = (newModeKey) => {
    for (const key in POMODORO_OBJECTS)
      if (newModeKey === POMODORO_OBJECTS[key]) return true;
    return false;
  };

  const syncModes = useCallback(() => {
    if (modes[mode.key])
      setModes((prev) => {
        const updatedModes = {};
        updatedModes[mode.key] = mode;
        return { ...prev, ...updatedModes };
      });
    else
      throw Error(
        "This mode has been corrupted and cannot sync, check that it contains a key property"
      );
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

  const nextMode = useCallback(() => {
    if (mode.key === POMODORO_MODE_KEYS.focus) {
      if (currentInterval === maxInterval) {
        setMode(POMODORO_MODE_KEYS.longBreak);
        incrementCurrentInterval();
      } else {
        setMode(POMODORO_MODE_KEYS.shortBreak);
        incrementCurrentInterval();
      }
    } else {
      setMode(POMODORO_MODE_KEYS.focus);
      incrementCurrentInterval();
    }
  }, [currentInterval, incrementCurrentInterval, maxInterval, mode.key]);

  const updateMode = useCallback(() => {
    if (mode.timeLeft === 0) {
      setMode({ ...mode, isActive: false });
      playAlarm();
      // TODO: Implement logic to switch mode based on pomodoro pattern
    } else if (mode.isActive) {
      setMode((prev) => ({ ...mode, timeLeft: prev.timeLeft - 1 }));
    }
  }, [mode]);

  useEffect(() => {
    const timeoutId =
      mode.isActive && mode.timeLeft >= 0
        ? setTimeout(() => updateMode(), 1000)
        : undefined;

    return () => clearTimeout(timeoutId);
  }, [mode.isActive, mode.timeLeft, updateMode]);

  const toggleCurrentModeActive = useCallback(() => {
    setMode((prev) => ({ ...mode, isActive: !prev.isActive }));
  }, [mode]);

  const resetMode = useCallback(() => {
    setMode(POMODORO_OBJECTS.default);
  }, []);

  return (
    <CurrentPomodoroModeContext.Provider value={mode}>
      <NextPomodoroModeContext.Provider value={nextMode}>
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
      </NextPomodoroModeContext.Provider>
    </CurrentPomodoroModeContext.Provider>
  );
}

PomodoroModesContextProvider.propTypes = ContextProviderPropTypes;

export default PomodoroModesContextProvider;
