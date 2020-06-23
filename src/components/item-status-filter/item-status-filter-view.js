import React from 'react';

export default function ItemStatusFilter() {
  return (
    <div className="bt-group">
      <button className="btn btn-info">All</button>
      <button className="btn btn-outline-secondary">Active</button>
      <button className="btn btn-outline-secondary">Done</button>
    </div>
  );
}
