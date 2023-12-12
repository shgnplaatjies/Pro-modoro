import PlusIcon from "../../../assets/componentized/PlusIcon/PlusIcon";

/**
 * Renders a button to add a new task
 *
 * @returns {JSX.Element} Task Button
 */
function AddTaskButton() {
  return (
    <button type="button" className="add-new-task">
      <PlusIcon />
      <p>Add Task</p>
    </button>
  );
}

export default AddTaskButton;
