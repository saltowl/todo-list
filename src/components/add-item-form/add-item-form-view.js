import React from 'react';
import './add-item-form.css';

export default function AddItemForm({ label, onLabelChange, onSubmit }) {
  return (
    <form className="add-item-form d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control add-item-form__input"
        onChange={onLabelChange}
        placeholder="to do..."
        value={label}
      />
      <button className="btn btn-outline-secondary">Add Item</button>
    </form>
  );
}
