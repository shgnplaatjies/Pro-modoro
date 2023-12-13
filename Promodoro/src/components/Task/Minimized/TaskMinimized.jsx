import { useState } from "react";
import PlusIcon from "../../../assets/componentized/PlusIcon/PlusIcon.jsx";
import CheckIcon from "../../../assets/componentized/CheckIcon/CheckIcon.jsx";
import { TaskMinimizedPropTypes } from "../../../services/constants/PropTypeShapes.js";
import "./TaskMinimized.css";
import VerticalDotsIcon from "../../../assets/componentized/VerticalDotsIcon/VerticalDotsIcon.jsx";
import { useUpdateTaskListContext } from "../../../services/hooks/useTaskListContext.js";

/**
 * Renders the minimized view of a Task
 *
 * @param {object} props properties
 * @param {boolean} props.complete Marks task as complete for display
 * @param {string} props.title Task title for display
 * @param {number} props.cyclesElapsed Actual cycles for display
 * @param {number} props.cyclesEstimated  Estimated cycles for display
 * @param {string} props.noteText Task note for display
 * @param {any} props.other Other task data
 *
 * @returns {JSX.Element} Minimized Task
 */
function TaskMinimized({
  complete,
  cyclesElapsed,
  cyclesEstimated,
  title,
  noteText,
  ...other
}) {
  const updateTask = useUpdateTaskListContext();

  const toggleComplete = () => {
    updateTask({
      complete: !complete,
      cyclesElapsed,
      cyclesEstimated,
      title,
      noteText,
      ...other,
    });
  };

  return (
    <article className="minimized-task-widget">
      <section className="main-task-content">
        <div>
          <button
            type="button"
            className="completion-button"
            onClick={toggleComplete}
          >
            {complete ? <CheckIcon /> : <PlusIcon />}
          </button>
          <h3 className={`task-title ${complete ? "line-through" : ""}`}>
            {title}
          </h3>
        </div>
        <div>
          <h3 className="pomodoro-progress">
            {cyclesElapsed}/{cyclesEstimated}
          </h3>
          <button type="button" className="settings">
            <VerticalDotsIcon />
          </button>
        </div>
      </section>
      <aside className="notes-section">
        <p>{noteText}</p>
      </aside>
    </article>
  );
}

TaskMinimized.propTypes = TaskMinimizedPropTypes;

export default TaskMinimized;
