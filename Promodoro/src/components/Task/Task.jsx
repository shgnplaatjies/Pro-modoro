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
 * @param {boolean} props.isNew Whether to render maximized or minimized view
 * @param {{boolean}} props.other Other Task props
 * @returns
 */

function Task({ expanded, isNew, ...other }) {
  return expanded || isNew ? (
    <TaskMaximized {...other} />
  ) : (
    <TaskMinimized {...other} />
  );
}

Task.propTypes = {
  expanded: PropTypes.bool,
  isNew: PropTypes.bool,
  other: PropTypes.oneOf([TaskMaximizedPropTypes, TaskMinimizedPropTypes]),
};

export default Task;
