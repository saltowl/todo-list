import React from 'react';
import './search-panel.css';

export default function SearchPanel({ placeholder = 'type to search' }) {
  return (
    <input type="text" className="form-control search-input" placeholder={placeholder} />
  );
}
