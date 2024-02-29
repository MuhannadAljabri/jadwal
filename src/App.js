import { useState, useEffect } from 'react';
import './App.css';
import Home from './JedwalComponents/Home';
import Body from './JedwalComponents/Body';
import InputOverlay from './JedwalComponents/NewTaskButton';


function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowOverlay(true)} className="plus-button">
        {showOverlay && <InputOverlay closeOverlay={() => setShowOverlay(false)} />}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Home />
      <Body />
      <div />

    </div>
  );
}

export default App;
