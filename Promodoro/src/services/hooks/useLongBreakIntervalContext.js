import { useContext } from "react";
import {
  CurrentLongBreakIntervalContext,
  MaxLongBreakIntervalContext,
  UpdateCurrentLongBreakIntervalContext,
  IncrementCurrentLongBreakIntervalContext,
  ResetCurrentLongBreakIntervalContext,
  UpdateMaxLongBreakIntervalContext,
  ResetMaxLongBreakIntervalContext,
} from "../contexts/LongBreakIntervalContext.js";

export const useCurrentLongBreakIntervalContext = () =>
  useContext(CurrentLongBreakIntervalContext);

export const useMaxLongBreakIntervalContext = () =>
  useContext(MaxLongBreakIntervalContext);

export const useUpdateCurrentLongBreakIntervalContext = () =>
  useContext(UpdateCurrentLongBreakIntervalContext);

export const useIncrementCurrentLongBreakIntervalContext = () =>
  useContext(IncrementCurrentLongBreakIntervalContext);

export const useResetCurrentLongBreakIntervalContext = () =>
  useContext(ResetCurrentLongBreakIntervalContext);

export const useUpdateMaxLongBreakIntervalContext = () =>
  useContext(UpdateMaxLongBreakIntervalContext);

export const useResetMaxLongBreakIntervalContext = () =>
  useContext(ResetMaxLongBreakIntervalContext);

export default {
  useCurrentLongBreakIntervalContext,
  useMaxLongBreakIntervalContext,
  useUpdateCurrentLongBreakIntervalContext,
  useIncrementCurrentLongBreakIntervalContext,
  useResetCurrentLongBreakIntervalContext,
  useUpdateMaxLongBreakIntervalContext,
  useResetMaxLongBreakIntervalContext,
};
