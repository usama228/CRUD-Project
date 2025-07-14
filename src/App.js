import React, { useState } from 'react';
import TodoList from './components/TodoList';
import { FaPlus } from 'react-icons/fa';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim() !== '') {
      const newTask = { id: Date.now(), text: task, isEditing: false };
      setTodos([...todos, newTask]);
      setTask('');
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleEdit = (id, status) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isEditing: status } : todo
    ));
  };

  const handleEditChange = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="app-container">
      <h1 className="title">To-Do App 📝</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd} className="add-btn">
          <FaPlus />
        </button>
      </div>

      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        toggleEdit={toggleEdit}
        handleEditChange={handleEditChange}
      />
    </div>
  );
}

export default App;
