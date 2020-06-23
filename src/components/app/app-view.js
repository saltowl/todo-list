import React from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';

export default function App() {
  const todos = [
    { label: 'ToDo1', id: 0, done: false },
    { label: 'ToDo2', important: true, id: 1, done: true },
  ];
  const doneCount = todos.filter((todo) => todo.done).length;
  const todoCount = todos.length - doneCount;

  return (
    <div className="app">
      <AppHeader doneCount={doneCount} todoCount={todoCount} label={'Todo List'} />
      <div className="tools d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todos} />
    </div>
  );
}
