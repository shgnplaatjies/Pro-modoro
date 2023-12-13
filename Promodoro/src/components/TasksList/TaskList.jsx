import AddTaskButton from "./AddTaskButton/AddTaskButton.jsx";
import Task from "../Task/Task.jsx";
import VerticalDotsIcon from "../../assets/componentized/VerticalDotsIcon/VerticalDotsIcon.jsx";
import { useAvailableTaskList } from "../../services/hooks/useTaskListContext.js";
import "./TaskList.css";

/**
 * Renders the various Pomodoro app modes
 *
 * @param {object} props properties
 * @param {string} props.mode Pomodoro mode to render
 */
function TasksList() {
  const taskListData = useAvailableTaskList();

  return (
    <div className="tasks-list-widget">
      <div className="pomodoro-tasks-header">
        <h2>Tasks</h2>
        <button className="pomodoro-tasks-settings">
          <VerticalDotsIcon />
        </button>
      </div>
      <ul className="tasks-list">
        {taskListData.map((item) => (
          <li key={item.id}>
            <Task {...item} />
          </li>
        ))}
      </ul>
      <AddTaskButton />
    </div>
  );
}

export default TasksList;
