import PropTypes from "prop-types";

/**
 * Dynamic Check Icon Component
 *
 * @param {object} props Properties
 * @param {boolean} props.filled Whether to display filled or not
 * @returns {JSX.Element} Rendered check icon component
 */
function CheckIcon({ filled }) {
  const filledCheckIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="filled-check-icon"
      className="filled-check-icon"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-.091,15.419c-.387.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707Z" />
    </svg>
  );
  const emptyCheckIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="empty-check-icon"
      className="empty-check-icon"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="m16.298,8.288l1.404,1.425-5.793,5.707c-.387.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701Zm7.702,3.712c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z" />
    </svg>
  );

  return <>{filled ? filledCheckIcon : emptyCheckIcon}</>;
}

CheckIcon.propTypes = { filled: PropTypes.bool };

export default CheckIcon;
