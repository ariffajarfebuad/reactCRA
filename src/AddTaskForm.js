import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Tambah tugas baru"
        value={task}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Tambah</button>
    </div>
  );
};

export default AddTaskForm;
