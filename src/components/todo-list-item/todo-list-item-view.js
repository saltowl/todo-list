import React from 'react';
import './todo-list-item.css';

export default function TodoListItem({
  id,
  label,
  important,
  done,
  toggleTodoProperty,
  onDeleted,
}) {
  return (
    <span
      className={`todo-list-item ${important ? 'important' : ''} ${done ? 'done' : ''}`}
    >
      <span
        className="todo-list-item__label"
        onClick={() => toggleTodoProperty(id, 'done')}
      >
        {label}
      </span>

      <button
        type="b utton"
        className="btn btn-outline-success btn-sm float-right"
        onClick={() => toggleTodoProperty(id, 'important')}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
}
