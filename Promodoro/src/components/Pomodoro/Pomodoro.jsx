import "./Pomodoro.css";

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
      <div className="timer-component"></div>
      <section className="pomodoro-task-title">
        <h2>Tasks</h2>
        <button className="pomodoro-tasks-settings">
          {/* <svg className="hamburger-icon"></svg> */}
        </button>
      </section>
      <div className="tasks-widget">
        <div className="tasks-title"></div>
        <ul className="tasks-list">
          <li className="task-list-item">
            <article className="minimized-task-widget">
              <section>
                <div className="progress-icon">
                  {/* Add logic for which icon to show here */}
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
            <article className="maximized-task-widget">
              <h3 className="task-title">{"Suh'in"}</h3>
              <h4>Actual/Estimated Pomodoros</h4>
              <div className="pomodoro-progress-section">
                <input type="number" placeholder="0"></input>
                <p>/</p>
                <input type="number" value={1}></input>
                <button type="button" className="up">
                  {/* <svg className="up-chevron"></svg> */}
                </button>
                <button type="button" className="down">
                  {/* <svg className="down-chevron"></svg> */}
                </button>
              </div>
              <textarea
                rows={3}
                className="task-note"
                placeholder="Enter some additional notes about this task here."
                value={"Value of the task note from the useApplicationContext"}
              ></textarea>
              <div className="task-actions">
                <button type="button" className="delete"></button>
                <span className="secondary-buttons">
                  <button type="button" className="discard-changes"></button>
                  <button type="button" className="save-changes"></button>
                </span>
              </div>
            </article>
            <table className="general-pomodoro-stats">
              <tr className="general-pomodoro-stat">
                <td className="general-pomodoro-stat-label">{"Pomos:"}</td>
                <td className="general-pomodoro-stat-value">{"1/2"}</td>
              </tr>
            </table>
          </li>
        </ul>
        <button type="button" className="add-new-task">
          <svg className="plus-icon"></svg>
          <p>Add Task</p>
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;
