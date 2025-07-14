import React from 'react';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';

function TodoItem({ index, todo, handleDelete, toggleEdit, handleEditChange }) {
  return (
    <li className="todo-item">
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
      <button onClick={() => handleDelete(todo.id)} className="delete-btn">
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem;
