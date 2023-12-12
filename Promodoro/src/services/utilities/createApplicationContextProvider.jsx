import PropTypes from "prop-types";
import NestedProviders from "../../components/NestedProvider/NestedProvider.jsx";

export const createApplicationContextProvider = (providers) => {
  if (providers.length === 1) return providers[0];

  return providers.reduce((AccumulatedProviders, CurrentProvider) => {
    function NestedProviderHierarchy({ children }) {
      return (
        <NestedProviders
          RecursiveProvider={AccumulatedProviders}
          CurrentProvider={CurrentProvider}
        >
          {children}
        </NestedProviders>
      );
    }

    NestedProviderHierarchy.propTypes = {
      children: PropTypes.element,
    };

    return NestedProviderHierarchy;
  });
};
