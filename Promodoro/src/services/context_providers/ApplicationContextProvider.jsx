import PomodoroModesContextProvider from "./PomodoroModeContextProvider.jsx";
import { createApplicationContextProvider } from "../utilities/createApplicationContextProvider.jsx";
import TaskListContextProvider from "./TaskListContextProvider.jsx";

const ApplicationContextHierarchy = [
  TaskListContextProvider,
  PomodoroModesContextProvider,
];

export const ApplicationContextProvider = createApplicationContextProvider(
  ApplicationContextHierarchy
);
