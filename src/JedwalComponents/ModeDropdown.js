// JedwalComponents/ModeDropdown.js
import React, { useState } from 'react';

const ModeDropdown = () => {
  const [selectedMode, setSelectedMode] = useState('ALL'); // Default mode

  const handleChange = (event) => {
    setSelectedMode(event.target.value);
    // Add any additional logic here if you want to do something when the mode changes
  };

  return (
    <div className="mode-dropdown-wrapper">
      <label htmlFor="mode-select" className="mode-label">Mode:</label>
      <select id="mode-select" value={selectedMode} onChange={handleChange} className="mode-select">
        <option value="Student">Student</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="All">All</option>
      </select>
    </div>
  );
};

export default ModeDropdown;
