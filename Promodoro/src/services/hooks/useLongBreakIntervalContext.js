import { useContext } from "react";
import {
  CurrentLongBreakIntervalContext,
  MaxLongBreakIntervalContext,
  SwitchCurrentLongBreakIntervalContext,
  IncrementCurrentLongBreakIntervalContext,
  ResetCurrentLongBreakIntervalContext,
  UpdateMaxLongBreakIntervalContext,
  ResetMaxLongBreakIntervalContext,
} from "../contexts/LongBreakIntervalContext.js";

export const useCurrentLongBreakIntervalContext = () =>
  useContext(CurrentLongBreakIntervalContext);

export const useMaxLongBreakIntervalContext = () =>
  useContext(MaxLongBreakIntervalContext);

export const useSwitchCurrentLongBreakIntervalContext = () =>
  useContext(SwitchCurrentLongBreakIntervalContext);

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
  useSwitchCurrentLongBreakIntervalContext,
  useIncrementCurrentLongBreakIntervalContext,
  useResetCurrentLongBreakIntervalContext,
  useUpdateMaxLongBreakIntervalContext,
  useResetMaxLongBreakIntervalContext,
};
