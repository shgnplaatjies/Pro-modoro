import { useCallback, useState } from "react";
import {
  CurrentTaskContext,
  AvailableTasksContext,
  ResetTaskListContext,
  AddTaskContext,
  DeleteTaskContext,
  ToggleTaskCompleteContext,
  SelectCurrentTaskContext,
  UpdateTaskListContext,
} from "../contexts/TaskListContext.js";
import {
  DEFAULT_TASK,
  DEFAULT_TASK_TITLE,
  DEFAULT_TASK_TITLE_PLACEHOLDER,
} from "../constants/TaskDefaults.js";
import { ContextProviderPropTypes } from "../constants/PropTypeShapes.js";

function TaskListContextProvider({ children }) {
  const [taskList, setTaskList] = useState([]);
  const [currentTask, setCurrentTask] = useState(taskList[0]);

  const addTask = useCallback(
    ({
      complete = false,
      cyclesElapsed = DEFAULT_TASK.cyclesElapsed,
      cyclesEstimated = DEFAULT_TASK.cyclesEstimated,
      noteText = DEFAULT_TASK.noteText,
      title = DEFAULT_TASK_TITLE,
      titlePlaceholder = DEFAULT_TASK_TITLE_PLACEHOLDER,
    }) => {
      const id = taskList.length ? taskList[taskList.length - 1].id++ : 0;

      setTaskList((prev) => {
        prev.push({
          id,
          complete,
          cyclesElapsed,
          cyclesEstimated,
          noteText,
          title,
          titlePlaceholder,
        });
        return prev;
      });
    },
    [taskList]
  );

  const deleteTask = useCallback(
    (id) => setTaskList((prev) => prev.filter((task) => task.id !== id)),
    []
  );

  const resetTaskList = useCallback(() => {
    setTaskList([]);
  }, []);

  const toggleTaskComplete = useCallback(
    (id) =>
      setTaskList((prev) =>
        prev.map((task) => {
          return task.id === id ? { ...task, complete: !task.complete } : task;
        })
      ),
    []
  );

  const selectCurrentTask = useCallback(
    (id) => setCurrentTask(taskList.filter((task) => task.id === id)),
    [taskList]
  );

  const updateTask = useCallback(({ changedProps }) => {
    const { id } = changedProps;
    if (id !== typeof undefined)
      setTaskList((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, ...changedProps } : task
        )
      );
    else throw Error("Task with that ID could not be found");
  }, []);

  return (
    <CurrentTaskContext.Provider value={currentTask}>
      <AvailableTasksContext.Provider value={taskList}>
        <ResetTaskListContext.Provider value={resetTaskList}>
          <AddTaskContext.Provider value={addTask}>
            <DeleteTaskContext.Provider value={deleteTask}>
              <UpdateTaskListContext.Provider value={updateTask}>
                <ToggleTaskCompleteContext.Provider value={toggleTaskComplete}>
                  <SelectCurrentTaskContext.Provider value={selectCurrentTask}>
                    {children}
                  </SelectCurrentTaskContext.Provider>
                </ToggleTaskCompleteContext.Provider>
              </UpdateTaskListContext.Provider>
            </DeleteTaskContext.Provider>
          </AddTaskContext.Provider>
        </ResetTaskListContext.Provider>
      </AvailableTasksContext.Provider>
    </CurrentTaskContext.Provider>
  );
}

TaskListContextProvider.propTypes = ContextProviderPropTypes;

export default TaskListContextProvider;
