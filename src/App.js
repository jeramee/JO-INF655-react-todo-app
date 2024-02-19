import React, { useState, useEffect } from 'react';
import Task from './components/Task';
import TaskInputForm from './components/TaskInputForm';

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, onEdit: handleEditTask }]);
  };

  const handleEditTask = (index, newDescription) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].description = newDescription;
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <TaskInputForm onAddTask={handleAddTask} />
      <div>
        {tasks.map((task, index) => (
          <Task
            key={index}
            id={index}  // Add id prop to uniquely identify each task
            description={task.description}
            completed={task.completed}
            onToggleComplete={() => handleToggleComplete(index)}
            onDelete={() => handleDeleteTask(index)}
            onEdit={handleEditTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
