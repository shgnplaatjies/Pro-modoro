import PropTypes from "prop-types";

export const TaskMaximizedPropTypes = {
  id: PropTypes.number,
  complete: PropTypes.bool,
  cyclesElapsed: PropTypes.number,
  cyclesEstimated: PropTypes.number,
  title: PropTypes.string,
  titlePlaceholder: PropTypes.string,
  noteText: PropTypes.string,
  isNew: PropTypes.bool,
};

export const TaskMinimizedPropTypes = {
  id: PropTypes.number,
  complete: PropTypes.bool,
  cyclesElapsed: PropTypes.number,
  cyclesEstimated: PropTypes.number,
  title: PropTypes.string,
  noteText: PropTypes.string,
  isNew: PropTypes.bool,
};

export const ContextProviderPropTypes = {
  children: PropTypes.element.isRequired,
};
