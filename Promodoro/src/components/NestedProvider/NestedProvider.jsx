import PropTypes from "prop-types";

/**
 * Provides a nested context provider hierarchy
 *
 * @param {object} props Properties
 * @param {element} props.children Children elements
 * @param {JSX.Element} props.RecursiveProvider Represents all up-stream providers recursively
 * @param {JSX.Element} props.CurrentProviders Represents current provider
 */
function NestedProviders({ RecursiveProvider, CurrentProvider, children }) {
  return (
    <RecursiveProvider>
      <CurrentProvider>{children}</CurrentProvider>
    </RecursiveProvider>
  );
}

NestedProviders.propTypes = {
  RecursiveProvider: PropTypes.elementType,
  CurrentProvider: PropTypes.elementType,
  children: PropTypes.element,
};

export default NestedProviders;
