// src/Overlay.js
import React, { useState } from 'react';

const Overlay = ({ isVisible, onClose }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>Add Task</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Overlay;
