import { createContext } from "react";
import { DEFAULT_TASK } from "../constants/TaskDefaults.js";

export const CurrentTaskContext = createContext(DEFAULT_TASK);

export const AvailableTasksContext = createContext([DEFAULT_TASK]);

export const UpdateTaskListContext = createContext(() => {});

export const ResetTaskListContext = createContext(() => {});

export default {
  CurrentTaskContext,
  AvailableTasksContext,
  UpdateTaskListContext,
  ResetTaskListContext,
};
