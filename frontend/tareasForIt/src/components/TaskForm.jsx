import { useState } from 'react';
import { createTask, updateTask } from '../services/ApiServices';

export const TaskForm = ({ taskToEdit }) => {
  const [task, setTask] = useState(taskToEdit || { title: '', description: '', completed: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskToEdit) {
      await updateTask(taskToEdit.id, task); 
    } else {
      await createTask(task); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
      />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Create Task'}</button>
    </form>
  );
};
