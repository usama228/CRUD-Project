import React, { useState } from 'react';
import TodoList from './components/TodoList';
import { FaPlus } from 'react-icons/fa';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all'); 

  const handleAdd = () => {
    if (task.trim() !== '') {
      const newTask = { 
        id: Date.now(), 
        text: task, 
        isEditing: false,
        isCompleted: false,
        createdAt: new Date(),
        completedAt: null,
        priority: 'medium' // 'low', 'medium', 'high'
      };
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

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
          completedAt: todo.isCompleted ? null : new Date()
        };
      }
      return todo;
    }));
  };

  const changePriority = (id, priority) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, priority } : todo
    ));
  };

  const priorityValue = { high: 3, medium: 2, low: 1 };

 const filteredTodos = todos
  .filter(todo => {
    if (filter === 'active') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    return true;
  })
  .sort((a, b) => priorityValue[b.priority] - priorityValue[a.priority]);


  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.isCompleted));
  };

  return (
    <div className="app-container">
      <h1 className="title">My To-Do App 📝</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button onClick={handleAdd} className="add-btn">
          <FaPlus />
        </button>
      </div>

      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'active' ? 'active' : ''} 
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''} 
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button onClick={clearCompleted} className="clear-btn">
          Clear Completed
        </button>
      </div>

      <TodoList
        todos={filteredTodos}
        handleDelete={handleDelete}
        toggleEdit={toggleEdit}
        handleEditChange={handleEditChange}
        toggleComplete={toggleComplete}
        changePriority={changePriority}
      />

      <div className="stats">
        <p>Total tasks: {todos.length}</p>
        <p>Completed: {todos.filter(t => t.isCompleted).length}</p>
      </div>
    </div>
  );
}

export default App;