import "./Pomodoro.css";
import GeneralStatsList from "./GeneralStatsList/GeneralStatsList.jsx";
import TimerWidget from "../TimerWidget/TimerWidget.jsx";
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
      <div className="mode-selector"></div>
      <TimerWidget />
      <TasksList />
      <GeneralStatsList />
    </div>
  );
}

export default Pomodoro;
