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

      <Home />
    </div>
  );
}

export default App;
