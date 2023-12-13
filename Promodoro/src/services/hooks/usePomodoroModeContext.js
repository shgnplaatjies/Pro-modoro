import { useContext } from "react";
import {
  CurrentPomodoroModeContext,
  AvailablePomodoroModesContext,
  SwitchPomodoroModeContext,
  TogglePomodoroModeActivityContext,
  ResetPomodoroModeContext,
  NextPomodoroModeContext,
} from "../contexts/PomodoroModeContext.js";

export const useCurrentPomodoroMode = () =>
  useContext(CurrentPomodoroModeContext);

export const useAvailablePomodoroModes = () =>
  useContext(AvailablePomodoroModesContext);

export const useSwitchPomodoroMode = () =>
  useContext(SwitchPomodoroModeContext);

export const useTogglePomodoroModeActivityContext = () =>
  useContext(TogglePomodoroModeActivityContext);

export const useResetPomodoroModeContext = () =>
  useContext(ResetPomodoroModeContext);

export const useNextPomodoroModeContext = () =>
  useContext(NextPomodoroModeContext);
