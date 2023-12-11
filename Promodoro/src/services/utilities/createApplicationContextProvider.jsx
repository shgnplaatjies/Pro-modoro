import React from "react";
export const createApplicationContextProvider = (providers) => {
  if (providers.length === 1) return providers[0];

  const [currentProvider, ...remainingProviders] = providers;

  const NestedProvider = () => {
    React.createElement(
      currentProvider,
      null,
      createApplicationContextProvider(remainingProviders) // recursion ( ´･･)ﾉ(._.`)
    );
  };

  return NestedProvider;
};
