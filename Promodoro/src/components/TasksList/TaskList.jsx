import AddTaskButton from "./AddTaskButton/AddTaskButton";
import Task from "../Task/Task";
import VerticalDotsIcon from "../../assets/componentized/VerticalDotsIcon/VerticalDotsIcon";
/**
 * Renders the various Pomodoro app modes
 *
 * @param {object} props properties
 * @param {string} props.mode Pomodoro mode to render
 */
function TasksList() {
  const taskListData = [
    // TODO: Pull from useTaskListContext
    {
      id: 0,
      isComplete: false,
      title: "MaximizedTitle",
      actualCycles: 2,
      estimatedCycles: 7,
      note: "Placeholder Note For Maximized",
    },
    {
      id: 1,
      isComplete: true,
      title: "MinimizedTitle",
      actualCycles: 2,
      estimatedCycles: 7,
      note: "Placeholder Note For Minimized",
    },
  ];

  const openPomodoroSettings = () => {
    // TODO: Implement settings post-MVP
  };

  return (
    <div className="tasks-list-widget">
      <div className="pomodoro-tasks-header">
        <h2>Tasks</h2>
        <button
          className="pomodoro-tasks-settings"
          onClick={openPomodoroSettings}
        >
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
