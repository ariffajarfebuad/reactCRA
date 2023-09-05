import React, { useState } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Aplikasi To-Do List</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
