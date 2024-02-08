import { createContext } from "react";
import { DEFAULT_TASK } from "../constants/TaskDefaults.js";

export const CurrentTaskContext = createContext(DEFAULT_TASK);

export const AvailableTasksContext = createContext([DEFAULT_TASK]);

export const ResetTaskListContext = createContext(() => {});

export const AddTaskContext = createContext(() => {});

export const DeleteTaskContext = createContext(() => {});

export const ToggleTaskCompleteContext = createContext(() => {});

export const SelectCurrentTaskContext = createContext(() => {});

export const IncrementTaskListTaskContext = createContext(() => {});

export const UpdateTaskListContext = createContext(() => {});

export default {
  CurrentTaskContext,
  AvailableTasksContext,
  ResetTaskListContext,
  AddTaskContext,
  DeleteTaskContext,
  ToggleTaskCompleteContext,
  SelectCurrentTaskContext,
  UpdateTaskListContext,
  IncrementTaskListTaskContext,
};
