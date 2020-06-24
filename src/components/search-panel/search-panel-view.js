import React from 'react';
import './search-panel.css';

export default React.memo(function SearchPanel({
  placeholder = 'type to search',
  onChange,
  value,
}) {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
});
