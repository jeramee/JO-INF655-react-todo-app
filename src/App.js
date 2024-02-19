// App.js

import React, { useState } from 'react';
import Task from './components/Task';
import TaskInputForm from './components/TaskInputForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
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

  return (
    <div className="App">
      <TaskInputForm onAddTask={handleAddTask} />
      <div>
        {tasks.map((task, index) => (
          <Task
            key={index}
            description={task.description}
            completed={task.completed}
            onToggleComplete={() => handleToggleComplete(index)}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
