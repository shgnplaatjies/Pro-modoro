import PomodoroModesContextProvider from "./PomodoroModeContextProvider.jsx";
import { createApplicationContextProvider } from "../utilities/createApplicationContextProvider.jsx";
import TaskListContextProvider from "./TaskListContextProvider.jsx";

const ApplicationContextHierarchy = [
  PomodoroModesContextProvider,
  TaskListContextProvider,
];

export const ApplicationContextProvider = createApplicationContextProvider(
  ApplicationContextHierarchy
);
