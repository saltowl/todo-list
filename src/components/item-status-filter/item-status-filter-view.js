import React from 'react';

export default React.memo(function ItemStatusFilter({ filterTodos, buttons, active }) {
  const buttonsGroup = buttons.map(({ label, filter }, i) => (
    <button
      className={`btn ${active === i ? 'btn-info' : 'btn-outline-secondary'}`}
      onClick={() => filterTodos(filter)}
      key={`filter-status-${filter}`}
    >
      {label}
    </button>
  ));

  return <div className="bt-group">{buttonsGroup}</div>;
});
