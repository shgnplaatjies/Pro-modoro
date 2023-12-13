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
  default: { key: POMODORO_MODE_KEYS.default, ...DEFAULT_POMODORO_MODE },
  focus: { key: POMODORO_MODE_KEYS.focus, ...DEFAULT_POMODORO_MODE },
  shortBreak: {
    key: POMODORO_MODE_KEYS.shortBreak,
    name: "Short Break",
    ...DEFAULT_POMODORO_MODE,
  },
  longBreak: {
    key: POMODORO_MODE_KEYS.longBreak,
    name: "Long Break",
    ...DEFAULT_POMODORO_MODE,
  },
};
