import { useCallback, useState, useEffect } from "react";
import {
  POMODORO_MODE_KEYS,
  POMODORO_MODES_LIST,
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

  const [mode, setMode] = useState(POMODORO_MODES_LIST[0]);
  const [modes, setModes] = useState(POMODORO_MODES_LIST);

  const isValid = (newModeKey) => {
    for (const modeObj of POMODORO_MODES_LIST)
      if (newModeKey === modeObj.key) return true;
    return false;
  };

  const toggleCurrentModeActive = useCallback(
    () => setMode((prev) => ({ ...mode, isActive: !prev.isActive })),
    [mode]
  );

  const resetMode = useCallback(
    () =>
      setMode((prevMode) =>
        POMODORO_MODES_LIST.find((item) => item.key == prevMode.key)
      ),
    []
  );

  const syncModes = useCallback(() => {
    setModes((prevModes) => {
      const updatedModes = prevModes.map((item) => {
        if (item.key === mode.key) return mode;
        return item;
      });
      return updatedModes;
    });
  }, [mode]);

  const switchMode = useCallback(
    (newModeKey) => {
      if (isValid(newModeKey)) {
        syncModes();
        const newMode = modes.find((item) => item.key === newModeKey);

        setMode({ ...newMode, isActive: false });
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
        switchMode(POMODORO_MODE_KEYS.longBreak);
      } else {
        switchMode(POMODORO_MODE_KEYS.shortBreak);
      }
    } else
      switchMode(
        POMODORO_MODES_LIST.find((item) => item.key == POMODORO_MODE_KEYS.focus)
          .key
      );

    resetMode();
    incrementCurrentInterval();
  }, [
    currentInterval,
    incrementCurrentInterval,
    maxInterval,
    mode.key,
    resetMode,
    switchMode,
  ]);

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
