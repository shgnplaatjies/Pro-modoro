import { useAvailablePomodoroModes } from "../../services/hooks/usePomodoroModeContext.js";
import ModeSelectorButton from "./ModeSelectorButton/ModeSelectorButton.jsx";

function ModeSelector() {
  const availableModes = useAvailablePomodoroModes();
  return (
    <ul className="mode-selector">
      {availableModes.map((item) => {
        const modeConfig = { modeKey: item.key, ...item };
        return (
          <li key={item.key}>
            <ModeSelectorButton {...modeConfig} />
          </li>
        );
      })}
    </ul>
  );
}

export default ModeSelector;
