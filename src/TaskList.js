import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div>
      <h2>Daftar Tugas</h2>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDeleteTask={() => onDeleteTask(index)} />
      ))}
    </div>
  );
};

export default TaskList;
