import { createContext } from "react";

export const CurrentLongBreakIntervalContext = createContext();

export const MaxLongBreakIntervalContext = createContext();

export const IncrementCurrentLongBreakIntervalContext = createContext(() => {});

export const UpdateCurrentLongBreakIntervalContext = createContext(() => {});

export const ResetCurrentLongBreakIntervalContext = createContext(() => {});

export const UpdateMaxLongBreakIntervalContext = createContext(() => {});

export const ResetMaxLongBreakIntervalContext = createContext(() => {});

export default {
  CurrentLongBreakIntervalContext,
  MaxLongBreakIntervalContext,
  UpdateCurrentLongBreakIntervalContext,
  ResetCurrentLongBreakIntervalContext,
  UpdateMaxLongBreakIntervalContext,
  ResetMaxLongBreakIntervalContext,
  IncrementCurrentLongBreakIntervalContext,
};
