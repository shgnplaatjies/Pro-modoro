import { createContext } from "react";
import { POMODORO_OBJECTS } from "../constants/PomodoroModes";

export const CurrentPomodoroModeContext = createContext({
  ...POMODORO_OBJECTS.default,
});

export const AvailablePomodoroModesContext = createContext(POMODORO_OBJECTS);

export const SwitchPomodoroModeContext = createContext((modeKey) => {
  if (POMODORO_OBJECTS[modeKey]) throw Error("Invalid Pomodoro Mode Key");
});

export const TogglePomodoroModeActivityContext = createContext(() => {});

export const ResetPomodoroModeContext = createContext(() => {});

export const NextPomodoroModeContext = createContext(() => {});

export default {
  CurrentPomodoroModeContext,
  AvailablePomodoroModesContext,
  SwitchPomodoroModeContext,
  TogglePomodoroModeActivityContext,
  ResetPomodoroModeContext,
  NextPomodoroModeContext,
};
