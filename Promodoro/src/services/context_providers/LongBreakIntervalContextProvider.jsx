import { useState, useCallback } from "react";
import { ContextProviderPropTypes } from "../constants/PropTypeShapes.js";
import {
  CurrentLongBreakIntervalContext,
  SwitchCurrentLongBreakIntervalContext,
  ResetCurrentLongBreakIntervalContext,
  MaxLongBreakIntervalContext,
  UpdateMaxLongBreakIntervalContext,
  ResetMaxLongBreakIntervalContext,
  IncrementCurrentLongBreakIntervalContext,
} from "../contexts/LongBreakIntervalContext.js";

function LongBreakIntervalContextProvider({ children }) {
  const defaultMaxLongBreakInterval = 10;

  const [currentLongBreakInterval, setCurrentLongBreakInterval] = useState(0);
  const [maxLongBreakInterval, setMaxLongBreakInterval] = useState(
    defaultMaxLongBreakInterval
  );

  const updateCurrentLongBreakInterval = useCallback((newInterval) => {
    setCurrentLongBreakInterval(newInterval);
  }, []);

  const resetCurrentLongBreakInterval = useCallback(() => {
    setCurrentLongBreakInterval(0);
  }, []);

  const updateMaxLongBreakInterval = useCallback(
    (newMax) => setMaxLongBreakInterval(newMax),
    []
  );

  const resetMaxLongBreakInterval = useCallback(() => {
    setMaxLongBreakInterval(defaultMaxLongBreakInterval);
  }, []);

  const incrementCurrentLongBreakInterval = useCallback(() => {
    if (currentLongBreakInterval < maxLongBreakInterval)
      setCurrentLongBreakInterval((prev) => prev + 1);
    else if (currentLongBreakInterval === maxLongBreakInterval)
      resetCurrentLongBreakInterval();
    else
      throw Error(
        "Invalid operation, currentLongBreakInterval shouldn't be larger than the max"
      );
  }, [
    currentLongBreakInterval,
    maxLongBreakInterval,
    resetCurrentLongBreakInterval,
  ]);

  return (
    <MaxLongBreakIntervalContext.Provider value={maxLongBreakInterval}>
      <UpdateMaxLongBreakIntervalContext.Provider
        value={updateMaxLongBreakInterval}
      >
        <ResetMaxLongBreakIntervalContext.Provider
          value={resetMaxLongBreakInterval}
        >
          <CurrentLongBreakIntervalContext.Provider
            value={currentLongBreakInterval}
          >
            <ResetCurrentLongBreakIntervalContext.Provider
              value={resetCurrentLongBreakInterval}
            >
              <SwitchCurrentLongBreakIntervalContext.Provider
                value={updateCurrentLongBreakInterval}
              >
                <IncrementCurrentLongBreakIntervalContext.Provider
                  value={incrementCurrentLongBreakInterval}
                >
                  {children}
                </IncrementCurrentLongBreakIntervalContext.Provider>
              </SwitchCurrentLongBreakIntervalContext.Provider>
            </ResetCurrentLongBreakIntervalContext.Provider>
          </CurrentLongBreakIntervalContext.Provider>
        </ResetMaxLongBreakIntervalContext.Provider>
      </UpdateMaxLongBreakIntervalContext.Provider>
    </MaxLongBreakIntervalContext.Provider>
  );
}

LongBreakIntervalContextProvider.propTypes = ContextProviderPropTypes;

export default LongBreakIntervalContextProvider;
