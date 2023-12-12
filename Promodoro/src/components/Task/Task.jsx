import PropTypes from "prop-types";
import TaskMinimized from "./Minimized/TaskMinimized.jsx";
import TaskMaximized from "./Maximized/TaskMaximized.jsx";
import {
  TaskMaximizedPropTypes,
  TaskMinimizedPropTypes,
} from "../../services/constants/PropTypeShapes.js";

/**
 * Dynamic Task component adapter
 *
 * @param {object} props Properties
 * @param {boolean} props.expanded Whether to render maximized or minimized view
 * @param {{boolean}} props.taskData Whether to render maximized or minimized view
 * @returns
 */

function Task({ expanded, taskData }) {
  return expanded ? (
    <TaskMaximized {...taskData} />
  ) : (
    <TaskMinimized {...taskData} />
  );
}

Task.propTypes = {
  expanded: PropTypes.bool.isRequired,
  taskData: PropTypes.oneOf([TaskMaximizedPropTypes, TaskMinimizedPropTypes]),
};

export default Task;
