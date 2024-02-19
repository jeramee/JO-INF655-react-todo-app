// TaskInputForm.js

import React, { useState } from 'react';

const TaskInputForm = ({ onAddTask }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.trim() !== '') {
      onAddTask({ description: taskDescription, completed: false });
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInputForm;
