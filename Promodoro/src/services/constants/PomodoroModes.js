import { DEFAULT_SETTINGS_CONFIG } from "./PomodoroSettings";

const {
  time: { sessionDurations },
} = DEFAULT_SETTINGS_CONFIG;

export const DEFAULT_POMODORO_MODE = {
  name: "Pomodoro",
  timeLeft: sessionDurations.pomodoro,
  timeTotal: sessionDurations.pomodoro,
  isActive: false,
};

export const POMODORO_MODE_KEYS = {
  default: "default",
  focus: "focus",
  shortBreak: "shortBreak",
  longBreak: "longBreak",
};

export const POMODORO_OBJECTS = {
  default: { ...DEFAULT_POMODORO_MODE, key: POMODORO_MODE_KEYS.default },
  focus: { ...DEFAULT_POMODORO_MODE, key: POMODORO_MODE_KEYS.focus },
  shortBreak: {
    ...DEFAULT_POMODORO_MODE,
    timeLeft: sessionDurations.shortBreak,
    timeTotal: sessionDurations.shortBreak,
    key: POMODORO_MODE_KEYS.shortBreak,
    name: "Short Break",
  },
  longBreak: {
    ...DEFAULT_POMODORO_MODE,
    timeLeft: sessionDurations.longBreak,
    timeTotal: sessionDurations.longBreak,
    key: POMODORO_MODE_KEYS.longBreak,
    name: "Long Break",
  },
};

export const POMODORO_MODES_LIST = [
  POMODORO_OBJECTS.focus,
  POMODORO_OBJECTS.shortBreak,
  POMODORO_OBJECTS.longBreak,
];
