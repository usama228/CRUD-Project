import React from 'react';
import { FaEdit, FaTrash, FaSave, FaArrowUp, FaArrowDown } from 'react-icons/fa';

function TodoItem({ index, todo, handleDelete, toggleEdit, handleEditChange, toggleComplete, changePriority }) {
  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleString();
  };

  return (
    <li className={`todo-item ${todo.isCompleted ? 'completed' : ''} ${todo.priority}`}>
      <div className="task-main">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleComplete(todo.id)}
          className="complete-checkbox"
        />
        
        <strong>{index + 1}.</strong>

        {todo.isEditing ? (
          <>
            <input
              className="edit-input"
              type="text"
              value={todo.text}
              onChange={(e) => handleEditChange(todo.id, e.target.value)}
            />
            <button onClick={() => toggleEdit(todo.id, false)} className="action-btn">
              <FaSave />
            </button>
          </>
        ) : (
          <>
            <span className="task-text">{todo.text}</span>
            <button onClick={() => toggleEdit(todo.id, true)} className="action-btn">
              <FaEdit />
            </button>
          </>
        )}
        
        <div className="priority-controls">
          <button 
            onClick={() => changePriority(todo.id, 'high')} 
            className={`priority-btn ${todo.priority === 'high' ? 'active' : ''}`}
          >
            <FaArrowUp />
          </button>
          <button 
            onClick={() => changePriority(todo.id, 'medium')} 
            className={`priority-btn ${todo.priority === 'medium' ? 'active' : ''}`}
          >
            •
          </button>
          <button 
            onClick={() => changePriority(todo.id, 'low')} 
            className={`priority-btn ${todo.priority === 'low' ? 'active' : ''}`}
          >
            <FaArrowDown />
          </button>
        </div>
        
        <button onClick={() => handleDelete(todo.id)} className="delete-btn">
          <FaTrash />
        </button>
      </div>
      
      <div className="task-meta">
        <span className="date">Created: {formatDate(todo.createdAt)}</span>
        {todo.isCompleted && (
          <span className="date">Completed: {formatDate(todo.completedAt)}</span>
        )}
      </div>
    </li>
  );
}

export default TodoItem;