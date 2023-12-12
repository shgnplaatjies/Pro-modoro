import PropTypes from "prop-types";

export const TaskMaximizedPropTypes = {
  title: PropTypes.string.isRequired,
  actualCycles: PropTypes.number.isRequired,
  estimatedCycles: PropTypes.number.isRequired,
  note: PropTypes.string,
};

export const TaskMinimizedPropTypes = {
  isComplete: PropTypes.bool,
  title: PropTypes.string,
  actualCycles: PropTypes.number,
  estimatedCycles: PropTypes.number,
  note: PropTypes.string,
};
