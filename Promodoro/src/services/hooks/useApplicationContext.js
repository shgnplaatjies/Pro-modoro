import { useContext } from "react";
import {
  CurrentPomodoroModeContext,
  AvailablePomodoroModesContext,
  UpdatePomodoroModeContext,
} from "../contexts/PomodoroModeContext.js";

export const useCurrentPomodoroMode = () =>
  useContext(CurrentPomodoroModeContext);

export const useAvailablePomodoroModes = () =>
  useContext(AvailablePomodoroModesContext);

export const useUpdatePomodoroMode = () =>
  useContext(UpdatePomodoroModeContext);
