import { useState } from 'react';
import './App.css';
import Home from './JedwalComponents/Home';
import Body from './JedwalComponents/Body';
import InputOverlay from './JedwalComponents/NewTaskButton';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  // State to hold the selected dropdown option
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="App">
      <button onClick={() => setShowOverlay(true)} className="plus-button">
        {showOverlay && <InputOverlay closeOverlay={() => setShowOverlay(false)} />}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div className="dropdown-container">
        <h2>Select an Option</h2>
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">Select Mode</option>
          <option value="Student">Student</option>
          <option value="Personal">Personal</option>
          <option value="All">All</option>
          {/* Add more options here as needed */}
        </select>
      </div>

      <Home />
      <Body />
    </div>
  );
}

export default App;
