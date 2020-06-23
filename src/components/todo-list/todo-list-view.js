import React from 'react';
import TodoListItem from '../todo-list-item';

export default function TodoList({ todos }) {
  const elems = todos.map((item, i) => {
    const { id, ...rest } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...rest} />
      </li>
    );
  });
  return <ul className="list-group">{elems}</ul>;
}
