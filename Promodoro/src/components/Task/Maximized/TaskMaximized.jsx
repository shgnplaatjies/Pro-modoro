import ChevronIcon from "../../../assets/componentized/Chevron/ChevronIcon/ChevronIcon.jsx";
import { useState } from "react";
import { TaskMinimizedPropTypes } from "../../../services/constants/PropTypeShapes.js";

/**
 * Renders the maximized view of a Task
 *
 * @param {object} props Custom component properties
 * @param {string} props.title Task title for display
 * @param {number} props.cyclesElapsed Actual cycles for display
 * @param {number} props.cyclesEstimated  Estimated cycles for display
 * @param {string} props.note Task note for display
 * @param {boolean} props.isNew Hides delete button and actual estimate
 *
 * @returns {JSX.Element} Minimized Task
 */
function TaskMaximized({
  cyclesElapsed,
  cyclesEstimated,
  title,
  noteText,
  isNew,
}) {
  const [cycleEstimation, setCycleEstimation] = useState(cyclesEstimated);
  const maxEstimation = 10; // TODO: Store in context hook

  const decrementCyclesEstimated =
    cycleEstimation > 0
      ? () => setCycleEstimation((prev) => prev - 1)
      : undefined;

  const incrementCyclesEstimated =
    cycleEstimation > maxEstimation
      ? () => setCycleEstimation((prev) => prev + 1)
      : undefined;

  const taskEstimationFormVars = {
    formTitle: "taskEstimationForm",
    cycleEstimationInput: "cycleEstimationInput",
    taskNoteInput: "taskNoteInput",
  };

  return (
    <article className="maximized-task-widget">
      <form name={taskEstimationFormVars.formTitle}>
        <input type="text" className="task-title" placeholder={title}></input>
        <h4>{!isNew && "Actual /"} Estimated Cycles</h4>
        <div className="pomodoro-progress-section">
          {!isNew && (
            <>
              <input type="number" placeholder={cyclesElapsed}></input>
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
            onClick={incrementCyclesEstimated}
          >
            <ChevronIcon direction={"up"} />
          </button>
          <button
            type="button"
            className="down"
            onClick={decrementCyclesEstimated}
          >
            <ChevronIcon direction={"down"} />
          </button>
        </div>
        <textarea
          rows={3}
          className="task-note"
          placeholder={noteText}
          name={taskEstimationFormVars.taskNoteInput}
          form={taskEstimationFormVars.formTitle}
        ></textarea>
        <div className="task-actions">
          {!isNew && <button type="button" className="delete"></button>}
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
