import React from 'react';

const Task = ({ task, onDeleteTask }) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDeleteTask}>Hapus</button>
    </div>
  );
};

export default Task;
