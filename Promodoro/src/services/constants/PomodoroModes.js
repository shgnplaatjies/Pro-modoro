export const DEFAULT_POMODORO_MODE = {
  name: "Pomodoro",
  timeLeft: 60 * 25,
  timeTotal: 60 * 25,
  isActive: false,
};

export const POMODORO_OBJECTS = {
  default: { key: "default", ...DEFAULT_POMODORO_MODE },
  focus: { key: "focus", ...DEFAULT_POMODORO_MODE },
  shortBreak: {
    key: "shortBreak",
    name: "Short Break",
    ...DEFAULT_POMODORO_MODE,
  },
  longBreak: { key: "longBreak", name: "Long Break", ...DEFAULT_POMODORO_MODE },
};
