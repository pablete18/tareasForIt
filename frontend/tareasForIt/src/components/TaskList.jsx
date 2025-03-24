import { useState, useEffect } from 'react';
import { getTask, deleteTask } from '../services/ApiServices';
import { useNavigate } from 'react-router-dom';
import TaskItem from './TaskItem';

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();


  const loadTasks = async () => {
    setIsLoading(true); 
    const taskData = await getTask();
    setTasks(taskData);
    setIsLoading(false); 
  };

  useEffect(() => {
    loadTasks();
  }, []); 


  const handleDelete = async (id) => {
    try {
      await deleteTask(id); 
      setTasks(tasks.filter(task => task.id !== id)); 
    } catch (error) {
      console.log('Error al eliminar tarea', error);
    }
  };

  const handleEdit = (task) => {
    console.log(task.id);
    
    navigate(`/edit/${task.id}`, { state: { taskToEdit: task } });
  };

  

  
  const handleCreate = () => {
    navigate('/create');
  };

  return (
    <div>
      
      <button onClick={handleCreate}>Crear Nueva Tarea</button>
      

      {isLoading ? (
        <p>Cargando tareas...</p>
      ) : (
        tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDelete={handleDelete} 
            onEdit={handleEdit} 
          />
        ))
      )}
    </div>
  );
};