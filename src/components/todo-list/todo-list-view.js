import React from 'react';
import TodoListItem from '../todo-list-item';

export default function TodoList({ todos, onItemDeleted }) {
  const elems = todos.map((item) => (
    <li key={item.id} className="list-group-item">
      <TodoListItem {...item} onDeleted={() => onItemDeleted(item.id)} />
    </li>
  ));
  return <ul className="list-group">{elems}</ul>;
}
