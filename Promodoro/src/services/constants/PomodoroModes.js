export const DEFAULT_POMODORO_MODE = {
  name: "Pomodoro",
  timeLeft: 60 * 25,
  timeTotal: 60 * 25,
  isActive: false,
};

export const POMODORO_OBJECTS = {
  default: DEFAULT_POMODORO_MODE,
  focus: DEFAULT_POMODORO_MODE,
  shortBreak: { name: "Short Break", ...DEFAULT_POMODORO_MODE },
  longBreak: { name: "Long Break", ...DEFAULT_POMODORO_MODE },
};
