import "./Pomodoro.css";
import GeneralStatsList from "./GeneralStatsList/GeneralStatsList.jsx";
import CurrentTaskHeader from "../CurrentTaskHeader/CurrentTaskHeader.jsx";
import Timer from "../Timer/Timer.jsx";
import TasksList from "../TasksList/TaskList.jsx";

/**
 * Renders the various Pomodoro app modes
 *
 * @param {object} props properties
 * @param {string} props.mode Pomodoro mode to render
 */
function Pomodoro() {
  return (
    <div className="pomodoro-widget">
      <Timer />
      <CurrentTaskHeader />
      <TasksList />
      <GeneralStatsList />
    </div>
  );
}

export default Pomodoro;
