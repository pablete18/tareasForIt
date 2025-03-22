import { useState, useEffect } from 'react';
import { getTask} from '../services/ApiServices'
import TaskItem from './TaskItem';

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const taskData = await getTask()
      setTasks(taskData);
    };
    loadTasks();
  }, []);

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};