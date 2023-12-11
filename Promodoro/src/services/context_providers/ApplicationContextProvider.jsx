import PomodoroModesContextProvider from "./PomodoroModeContextProvider.jsx";
import { createApplicationContextProvider } from "../utilities/createApplicationContextProvider.jsx";

const ApplicationContextHierarchy = [PomodoroModesContextProvider];

export const ApplicationContextProvider = createApplicationContextProvider(
  ApplicationContextHierarchy
);
