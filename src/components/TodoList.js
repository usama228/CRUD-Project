import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, handleDelete, toggleEdit, handleEditChange, toggleComplete, changePriority }) {
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
          toggleComplete={toggleComplete}
          changePriority={changePriority}
        />
      ))}
    </ul>
  );
}

export default TodoList;