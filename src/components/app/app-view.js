import React from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import AddItemForm from '../add-item-form';

export default React.memo(function App({
  todos,
  filteredTodos,
  addItem,
  deleteItem,
  filterTodos,
  handleSearch,
}) {
  const doneCount = todos.filter(({ done }) => done).length;
  const todoCount = todos.length - doneCount;

  return (
    <div className="app">
      <AppHeader doneCount={doneCount} todoCount={todoCount} label={'Todo List'} />
      <div className="tools d-flex">
        <SearchPanel onChange={handleSearch} />
        <ItemStatusFilter filterTodos={filterTodos} />
      </div>
      <TodoList todos={filteredTodos} onItemDeleted={deleteItem} />
      <AddItemForm onItemAdded={addItem} />
    </div>
  );
});
