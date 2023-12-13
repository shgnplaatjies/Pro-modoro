import { createApplicationContextProvider } from "../utilities/createApplicationContextProvider.jsx";
import PomodoroModesContextProvider from "./PomodoroModeContextProvider.jsx";
import TaskListContextProvider from "./TaskListContextProvider.jsx";
import LongBreakIntervalContextProvider from "./LongBreakIntervalContextProvider.jsx";

const ApplicationContextHierarchy = [
  LongBreakIntervalContextProvider,
  PomodoroModesContextProvider,
  TaskListContextProvider,
];

export const ApplicationContextProvider = createApplicationContextProvider(
  ApplicationContextHierarchy
);
