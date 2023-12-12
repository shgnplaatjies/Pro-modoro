import PlusIcon from "../../../assets/componentized/PlusIcon/PlusIcon";
import { useAddTaskContext } from "../../../services/hooks/useTaskListContext";

/**
 * Renders a button to add a new task
 *
 * @returns {JSX.Element} Task Button
 */
function AddTaskButton() {
  const addNewTask = useAddTaskContext();

  return (
    <button type="button" className="add-new-task" onClick={addNewTask}>
      <PlusIcon />
      <p>Add Task</p>
    </button>
  );
}

export default AddTaskButton;
