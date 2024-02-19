// Task.js
import React, { useState } from 'react';
import './Task.css';

const Task = ({ id, description, completed, onToggleComplete, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSaveEdit = () => {
    onEdit(id, editedDescription);
    setEditing(false);
  };

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleComplete}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <span>{description}</span>
      )}
      {isEditing ? (
        <>
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <button onClick={() => setEditing(true)}>Edit</button>
      )}
      <button onClick={onDelete}>X</button>
    </div>
  );
};

export default Task;
