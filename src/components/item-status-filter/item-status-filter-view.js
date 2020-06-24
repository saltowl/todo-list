import React from 'react';

export default function ItemStatusFilter({ filterTodos, buttons, active }) {
  const buttonsGroup = buttons.map(({ label, filter }, i) => (
    <button
      className={`btn ${active === i ? 'btn-info' : 'btn-outline-secondary'}`}
      onClick={() => filterTodos(filter)}
    >
      {label}
    </button>
  ));

  return <div className="bt-group">{buttonsGroup}</div>;
}
