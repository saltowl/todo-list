import React from 'react';
import './todo-list-item.css';

export default function TodoListItem({ label, important = false, done = false }) {
  return (
    <span
      className={`todo-list-item ${important ? 'important' : ''} ${done ? 'done' : ''}`}
    >
      <span className="todo-list-item__label">{label}</span>

      <button type="button" className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button" className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
}
