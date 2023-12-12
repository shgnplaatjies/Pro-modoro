import PlusIcon from "../../../assets/componentized/PlusIcon/PlusIcon.jsx";
import CheckIcon from "../../../assets/componentized/CheckIcon/CheckIcon.jsx";
import { TaskMinimizedPropTypes } from "../../../services/constants/PropTypeShapes.js";
import { useState } from "react";

/**
 * Renders the minimized view of a Task
 *
 * @param {object} props properties
 * @param {boolean} props.isComplete Marks task as complete for display
 * @param {string} props.title Task title for display
 * @param {number} props.actualCycles Actual cycles for display
 * @param {number} props.estimatedCycles  Estimated cycles for display
 * @param {string} props.note Task note for display
 *
 * @returns {JSX.Element} Minimized Task
 */
function TaskMinimized({
  isComplete,
  title,
  actualCycles,
  estimatedCycles,
  note,
}) {
  const [completion, setCompletion] = useState(isComplete);

  const toggleComplete = () => {
    // TODO: Change state of the tasks list context too
    setCompletion((prev) => !prev);
  };

  return (
    <article className="minimized-task-widget">
      <section>
        <button
          type="button"
          className="completion-button"
          onClick={toggleComplete}
        >
          {completion ? <CheckIcon /> : <PlusIcon />}
        </button>
        <h3 className="title">{title}</h3>
        <h3 className="pomodoro-progress">
          {actualCycles}/{estimatedCycles}
        </h3>
        <button type="button" className="settings-button"></button>
      </section>
      <aside className="notes-section">
        <p>{note}</p>
      </aside>
    </article>
  );
}

TaskMinimized.propTypes = TaskMinimizedPropTypes;

export default TaskMinimized;
