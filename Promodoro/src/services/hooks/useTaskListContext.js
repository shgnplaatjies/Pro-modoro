import { useContext } from "react";
import {
  CurrentTaskContext,
  AvailableTasksContext,
  AddTaskContext,
  DeleteTaskContext,
  ToggleTaskCompleteContext,
  SelectCurrentTaskContext,
  UpdateTaskListContext,
  IncrementTaskListTaskContext,
  DecrementTaskListTaskContext,
} from "../contexts/TaskListContext.js";

export const useCurrentTask = () => useContext(CurrentTaskContext);

export const useAvailableTaskList = () => useContext(AvailableTasksContext);

export const useAddTaskContext = () => useContext(AddTaskContext);

export const useDeleteTaskContext = () => useContext(DeleteTaskContext);

export const useUpdateTaskListContext = () => useContext(UpdateTaskListContext);

export const useIncrementTaskListTaskContext = () =>
  useContext(IncrementTaskListTaskContext);

export const useDecrementTaskListTaskContext = () =>
  useContext(DecrementTaskListTaskContext);

export const useToggleTaskCompleteContext = () =>
  useContext(ToggleTaskCompleteContext);

export const useSelectCurrentTaskContext = () =>
  useContext(SelectCurrentTaskContext);
