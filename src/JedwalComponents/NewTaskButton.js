import React, { useState } from 'react';

function InputOverlay({ closeOverlay }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    if (inputValue !== "") {
        event.preventDefault();
        alert(`New task added: ${inputValue}`);
        closeOverlay();
    }
    else {
        event.preventDefault();
        alert(`Task cannot be empty`);
        closeOverlay();
    }
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <form onSubmit={handleSubmit}>
          <label>
            <input placeholder = "Task Title" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </label>
          <button type="submit">Add</button>
        </form>
        <button onClick={() => closeOverlay()}>Close</button>

      </div>
    </div>
  );
}

export default InputOverlay;
