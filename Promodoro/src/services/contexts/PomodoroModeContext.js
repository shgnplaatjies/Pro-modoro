/* eslint-disable no-unused-vars */
import { createContext } from "react";
import { POMODORO_MODES } from "../constants/PomodoroModes";

export const CurrentPomodoroModeContext = createContext(POMODORO_MODES.default);

export const AvailablePomodoroModesContext = createContext(POMODORO_MODES);

export const UpdatePomodoroModeContext = createContext((modeKey) => {});

export const ResetPomodoroModeContext = createContext(() => {});

export default {
  CurrentPomodoroModeContext,
  AvailablePomodoroModesContext,
  UpdatePomodoroModeContext,
  ResetPomodoroModeContext,
};
