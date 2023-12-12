import { useCurrentPomodoroMode } from "../../../services/hooks/usePomodoroModeContext";

function TimerClock() {
  const { timeLeft } = useCurrentPomodoroMode();

  const timeLeftSeconds = timeLeft % 60;

  const timeLeftMinutes = Math.floor((timeLeft % 3600) / 60);

  const timeLeftHours = Math.floor(timeLeft / 3600);

  const addTrailingZero = (value) => (value !== 0 ? `0${value}` : "00");

  return (
    <div className="timer-clock">
      <h1>
        {timeLeftHours > 0 &&
          (timeLeftHours > 9
            ? `${timeLeftHours}:`
            : `${addTrailingZero(timeLeftHours)}:`)}
        {timeLeftMinutes > 9
          ? `${timeLeftMinutes}:`
          : `${addTrailingZero(timeLeftMinutes)}:`}

        {timeLeftSeconds > 9
          ? timeLeftSeconds
          : addTrailingZero(timeLeftSeconds)}
      </h1>
    </div>
  );
}

export default TimerClock;
