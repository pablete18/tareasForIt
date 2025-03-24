import { useState,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createTask, updateTask } from '../services/ApiServices';

export const TaskForm = () => {
  const { state } = useLocation();
  const taskToEdit = state ? state.taskToEdit : null; 
  const navigate = useNavigate();

  const [task, setTask] = useState(taskToEdit || {  id: Date.now().toString(),title: '', description: '', completed: false });

  useEffect(() => {
    if (taskToEdit) {
      setTask({ ...taskToEdit }); 
    }
  }, [taskToEdit]
)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({ ...task, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (taskToEdit) {
      await updateTask(task); 
    } else {
      await createTask(task);       
    }

    navigate('/'); 
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
      <div>
        <label>
          completada?:
          <input
            type="checkbox"
            name="completed"
            checked={task.completed}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">{taskToEdit ? 'Update Task' : 'Create Task'}</button>
    </form>
  );
};