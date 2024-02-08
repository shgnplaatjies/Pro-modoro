import ChevronIcon from "../../../assets/componentized/Chevron/ChevronIcon/ChevronIcon.jsx";
import { TaskMinimizedPropTypes } from "../../../services/constants/PropTypeShapes.js";
import "./TaskMaximized.css";
import { DEFAULT_TASK } from "../../../services/constants/TaskDefaults.js";
import { useIncrementTaskListTaskContext } from "../../../services/hooks/useTaskListContext.js";

/**
 * Renders the maximized view of a Task
 *
 * @param {object} props Custom component properties
 * @param {number} props.cyclesElapsed Actual cycles for display
 * @param {number} props.cyclesEstimated  Estimated cycles for display
 * @param {boolean} props.isNew Hides delete button and actual estimate
 * @param {string} props.note Task note for display
 * @param {boolean} props.placeholder Placeholder text for display
 * @param {string} props.title Task title for display
 * @param {string} props.taskId Task Id to render relevant data
 *
 * @returns {JSX.Element} Minimized Task
 */
function TaskMaximized({
  cyclesElapsed,
  cyclesEstimated,
  title,
  noteText,
  placeholder,
  isNew,
  taskId,
}) {
  const maxEstimation = 10; // TODO: Store in context hook

  const incrementTaskListTask = useIncrementTaskListTaskContext();

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
          placeholder={placeholder}
          defaultValue={title}
        />
        <h4 className="estimated-cycles-text">
          {!isNew && "Act /"} Est Cycles
        </h4>
        <div className="pomodoro-progress-section">
          <div className="cycle-estimation-inputs">
            {!isNew && (
              <>
                <input
                  type="number"
                  className="cycles-elapsed"
                  placeholder={DEFAULT_TASK.cyclesElapsed}
                  defaultValue={cyclesElapsed}
                ></input>
                <p>/</p>
              </>
            )}
            <input
              type="number"
              className="cycles-estimated"
              name={taskEstimationFormVars.cycleEstimationInput}
              htmlFor={taskEstimationFormVars.formTitle}
              value={cyclesEstimated}
            />
          </div>
          <div className="cycle-estimation-buttons">
            <button
              type="button"
              className="up"
              onClick={() => incrementTaskListTask(taskId)}
            >
              <ChevronIcon direction={"up"} />
            </button>
            <button
              type="button"
              className="down"
              onClick={() => incrementTaskListTask(taskId)}
            >
              <ChevronIcon direction={"down"} />
            </button>
          </div>
        </div>
        <textarea
          rows={3}
          className="task-note"
          placeholder={noteText}
          name={taskEstimationFormVars.taskNoteInput}
          form={taskEstimationFormVars.formTitle}
        ></textarea>
        <div className="task-actions">
          <span className="secondary-buttons">
            <button type="button" className="discard-changes">
              Cancel
            </button>
            <button
              type="submit"
              form={taskEstimationFormVars.formTitle}
              className="save-changes"
            >
              Save
            </button>
          </span>
          {isNew && (
            <button type="button" className="delete">
              Delete
            </button>
          )}
        </div>
      </form>
    </article>
  );
}

TaskMaximized.propTypes = TaskMinimizedPropTypes;

export default TaskMaximized;
