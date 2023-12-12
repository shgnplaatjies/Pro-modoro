import "./Pomodoro.css";
import GeneralStatsList from "./GeneralStatsList/GeneralStatsList.jsx";
import VerticalDotsIcon from "../../assets/componentized/VerticalDotsIcon/VerticalDotsIcon.jsx";
import PlusIcon from "../../assets/componentized/PlusIcon/PlusIcon.jsx";
import CheckIcon from "../../assets/componentized/CheckIcon/CheckIcon.jsx";
import ChevronDownIcon from "../../assets/componentized/Chevron/ChevronDownIcon/ChevronDownIcon.jsx";
import {
  useCurrentPomodoroMode,
  useAvailablePomodoroModes,
} from "../../services/hooks/usePomodoroModeContext.js";
import TimerWidget from "../TimerWidget/TimerWidget.jsx";

/**
 * Renders the various Pomodoro app modes
 *
 * @param {object} props properties
 * @param {string} props.mode Pomodoro mode to render
 */
function Pomodoro() {
  const mode = useCurrentPomodoroMode();
  const modes = useAvailablePomodoroModes();

  return (
    <div className="pomodoro-widget">
      <div className="mode-selector"></div>
      <div className="timer-widget">
        <TimerWidget />
      </div>
      <section className="pomodoro-tasks-widget">
        <h2>Tasks</h2>
        <button className="pomodoro-tasks-settings">
          <VerticalDotsIcon />
        </button>
      </section>
      <div className="tasks-list-widget">
        <ul className="tasks-list">
          <li className="task-list-item">
            <article className="minimized-task-widget">
              <section>
                <div className="progress-icon">
                  {mode.name == modes.default.name ? (
                    <PlusIcon />
                  ) : (
                    <CheckIcon />
                  )}
                </div>
                <h3 className="title">{"Suh'in"}</h3>
                <h3 className="pomodoro-progress">
                  {"0"}/{"3"}
                </h3>
                <button type="button" className="settings-button"></button>
              </section>
              <aside className="notes-section">
                <p>{"This is a note you've added to your task"}</p>
              </aside>
            </article>
          </li>
          <li className="task-list-item">
            <article className="maximized-task-widget">
              <h3 className="task-title">{"Suh'in"}</h3>
              <h4>Actual/Estimated Pomodoros</h4>
              <div className="pomodoro-progress-section">
                <input type="number" placeholder="0"></input>
                <p>/</p>
                <input type="number" value={1}></input>
                <button type="button" className="up">
                  <ChevronDownIcon />
                </button>
                <button type="button" className="down">
                  <ChevronDownIcon />
                </button>
              </div>
              <textarea
                rows={3}
                className="task-note"
                placeholder="Enter some additional notes about this task here."
                value={
                  "Value of the task's note from the useApplicationContext"
                }
              ></textarea>
              <div className="task-actions">
                <button type="button" className="delete"></button>
                <span className="secondary-buttons">
                  <button type="button" className="discard-changes"></button>
                  <button type="button" className="save-changes"></button>
                </span>
              </div>
            </article>
          </li>
        </ul>
        <button type="button" className="add-new-task">
          <PlusIcon />
          <p>Add Task</p>
          <GeneralStatsList />
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;
