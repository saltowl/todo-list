import React from 'react';
import './app-header.css';

export default React.memo(function AppHeader({ label, doneCount, todoCount }) {
  return (
    <header className="d-flex app-header">
      <h1 className="app-header__label">{label}</h1>
      <h2 className="app-header__info">
        {todoCount} more to do, {doneCount} done
      </h2>
    </header>
  );
});
