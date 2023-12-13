import { useCurrentTask } from "../../services/hooks/useTaskListContext.js";
import "./CurrentTaskHeader.css";

function CurrentTaskHeader() {
  const task = useCurrentTask();
  if (typeof task === "undefined") return;

  return (
    <div className="current-task-header">
      <h4>{`#${task.id ?? "0"}`}</h4>
      <h3>{task.title ?? ""}</h3>
    </div>
  );
}

export default CurrentTaskHeader;
