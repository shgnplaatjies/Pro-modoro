import PropTypes from "prop-types";
import "./ChevronIcon.css";

/**
 * Dynamic Chevron Component
 *
 * @param {object} props Properties
 * @param {'up' | 'down' | 'left' | 'right'} props.direction Direction
 * @param {boolean} props.circled Whether it's circled
 * @returns
 */
function ChevronIcon({ direction, circled }) {
  return circled ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="chevron-circle-left"
      className={`chevron-icon circled ${direction}`}
      viewBox="0 0 24 24"
    >
      <path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM2,12A10,10,0,1,1,12,22,10.011,10.011,0,0,1,2,12Z" />
      <path d="M8,12a2.993,2.993,0,0,1,.752-1.987c.291-.327.574-.637.777-.84L12.353,6.3a1,1,0,0,1,1.426,1.4L10.95,10.58c-.187.188-.441.468-.7.759a1,1,0,0,0,0,1.323c.258.29.512.57.693.752L13.779,16.3a1,1,0,0,1-1.426,1.4L9.524,14.822c-.2-.2-.48-.507-.769-.833A2.99,2.99,0,0,1,8,12Z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="chevron-down-icon"
      className={`chevron-icon ${direction}`}
      viewBox="0 0 24 24"
    >
      <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
    </svg>
  );
}

ChevronIcon.propTypes = {
  direction: PropTypes.oneOf(["up", "down", "left", "right"]).isRequired,
  circled: PropTypes.bool,
};

export default ChevronIcon;
