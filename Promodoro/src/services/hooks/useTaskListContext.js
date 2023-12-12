import { useContext } from "react";
import {
  CurrentTaskContext,
  AvailableTasksContext,
  UpdateTaskListContext,
} from "../contexts/TaskListContext.js";

export const useCurrentTaskList = () => useContext(CurrentTaskContext);

export const useAvailableTaskList = () => useContext(AvailableTasksContext);

export const useUpdateTaskList = () => useContext(UpdateTaskListContext);
