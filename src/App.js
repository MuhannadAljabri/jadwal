import { useState } from 'react';
import './App.css';
import Home from './JedwalComponents/Home';
import PlusButton from './JedwalComponents/NewTaskButton';
import Body from './JedwalComponents/Body';
import InputOverlay from './JedwalComponents/NewTaskButton';
import CategoryButton from './JedwalComponents/CategoryButton';


function App() {

  // State to hold the list of categories
  const [categories, setCategories] = useState([]);

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAddCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  return (
    <div className="App">

      <Home />
      <CategoryButton onAddCategory={handleAddCategory} />
      {categories.map((category, index) => (
      <div key={index}>{category}</div>
      ))}
    </div>
  );
}

export default App;
