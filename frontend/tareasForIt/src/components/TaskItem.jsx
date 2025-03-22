export const TaskItem = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.completed ? 'Completed' : 'Pending'}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};