import ChevronIcon from "../../../assets/componentized/Chevron/ChevronIcon/ChevronIcon.jsx";
import { useState } from "react";
import { TaskMinimizedPropTypes } from "../../../services/constants/PropTypeShapes.js";

/**
 * Renders the maximized view of a Task
 *
 * @param {object} props Custom component properties
 * @param {string} props.title Task title for display
 * @param {number} props.actualCycles Actual cycles for display
 * @param {number} props.estimatedCycles  Estimated cycles for display
 * @param {string} props.note Task note for display
 * @param {boolean} props.newTask Hides delete button and actual estimate
 *
 * @returns {JSX.Element} Minimized Task
 */
function TaskMaximized({
  title,
  actualCycles,
  estimatedCycles = 1,
  note,
  newTask,
}) {
  const [cycleEstimation, setCycleEstimation] = useState(estimatedCycles);
  const maxEstimation = 0; // TODO: Store in context hook

  const decrementEstimatedCycles =
    cycleEstimation > 0
      ? () => setCycleEstimation((prev) => prev - 1)
      : () => {};

  const incrementEstimatedCycles =
    cycleEstimation > maxEstimation
      ? () => setCycleEstimation((prev) => prev + 1)
      : () => {};

  const taskEstimationFormVars = {
    formTitle: "taskEstimationForm",
    cycleEstimationInput: "cycleEstimationInput",
    taskNoteInput: "taskNoteInput",
  };

  return (
    <article className="maximized-task-widget">
      <form name={taskEstimationFormVars.formTitle}>
        <input
          type="text"
          className="task-title"
          placeholder="What are you working on?"
        ></input>
        <h4>{!newTask && "Actual /"} Estimated Cycles</h4>
        <div className="pomodoro-progress-section">
          {!newTask && (
            <>
              <input type="number" placeholder={actualCycles}></input>
              <p>/</p>
            </>
          )}
          <input
            type="number"
            name={taskEstimationFormVars.cycleEstimationInput}
            htmlFor={taskEstimationFormVars.formTitle}
          ></input>
          <button
            type="button"
            className="up"
            onClick={incrementEstimatedCycles}
          >
            <ChevronIcon direction={"up"} />
          </button>
          <button
            type="button"
            className="down"
            onClick={decrementEstimatedCycles}
          >
            <ChevronIcon direction={"down"} />
          </button>
        </div>
        <textarea
          rows={3}
          className="task-note"
          placeholder={note}
          name={taskEstimationFormVars.taskNoteInput}
          form={taskEstimationFormVars.formTitle}
        ></textarea>
        <div className="task-actions">
          {!newTask && <button type="button" className="delete"></button>}
          <span className="secondary-buttons">
            <button type="button" className="discard-changes"></button>
            <button
              type="submit"
              form={taskEstimationFormVars.formTitle}
              className="save-changes"
            ></button>
          </span>
        </div>
      </form>
    </article>
  );
}

TaskMaximized.propTypes = TaskMinimizedPropTypes;

export default TaskMaximized;
