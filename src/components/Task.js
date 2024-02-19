// Task.js

import React from 'react';
import './Task.css';

const Task = ({ description, completed, onToggleComplete, onDelete }) => {
  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleComplete}
      />
      <span>{description}</span>
      <button onClick={onDelete}>X</button>
    </div>
  );
};

export default Task;
