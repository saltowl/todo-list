import React, { useState, useRef } from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

export default React.memo(function TodoList({ todos, onItemDeleted, insertTodoBefore }) {
  const [selected, setSelected] = useState(null);
  const list = useRef(null);

  const elems = todos.map((item) => (
    <li
      key={item.id}
      id={item.id}
      className={`list-group-item ${selected === item.id ? 'selected' : ''}`}
      onDragStart={() => setSelected(item.id)}
      onDragEnd={() => setSelected(null)}
      draggable
    >
      <TodoListItem {...item} onDeleted={() => onItemDeleted(item.id)} />
    </li>
  ));

  const getNextElement = (cursorPosition, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

    return cursorPosition < currentElementCenter
      ? currentElement
      : currentElement.nextElementSibling;
  };

  const onDragOver = (e) => {
    e.preventDefault();
    const activeElement = list.current.querySelector('.selected');
    const currentElement = e.target;
    const isMoveable =
      activeElement !== currentElement &&
      currentElement.classList.contains(`list-group-item`);

    if (isMoveable) {
      const nextElement = getNextElement(e.clientY, currentElement);
      if (
        nextElement &&
        activeElement !== nextElement.previousElementSibling &&
        activeElement !== nextElement
      ) {
        insertTodoBefore(activeElement.id, nextElement.id);
      }
    }
  };

  return (
    <ul className="list-group" onDragOver={onDragOver} ref={list}>
      {elems}
    </ul>
  );
});
