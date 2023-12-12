import PlusIcon from "../../../assets/componentized/PlusIcon/PlusIcon";

/**
 * Renders a button to add a new task
 *
 * @returns {JSX.Element} Task Button
 */
function AddTaskButton() {
  const addNewTask = () => {
    // TODO: Add new task to list using context hook
  };

  return (
    <button type="button" className="add-new-task" onClick={addNewTask}>
      <PlusIcon />
      <p>Add Task</p>
    </button>
  );
}

export default AddTaskButton;
