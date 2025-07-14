import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, handleDelete, toggleEdit, handleEditChange }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          index={index}
          todo={todo}
          handleDelete={handleDelete}
          toggleEdit={toggleEdit}
          handleEditChange={handleEditChange}
        />
      ))}
    </ul>
  );
}

export default TodoList;
