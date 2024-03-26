import { useState } from 'react';
import './App.css';
import Home from './JedwalComponents/Home';
import CategoryButton from './JedwalComponents/CategoryButton';
import './NewTask.css';
import AddTaskButton from './JedwalComponents/NewTaskButton'

function App() {

  // State to hold the list of categories
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

  const handleAddCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };
  const handleAddTask = (taskTitle, priority, description) => {
    setTasks([...tasks, { title: taskTitle, priority, description }]);
  };

  return (
    <div className="App">

      <Home />
      <div className='top-row'>
      <CategoryButton onAddCategory={handleAddCategory} />

            {categories.map((category, index) => (
      <div key={index}>{category}</div>
      ))}
      <div><AddTaskButton onAddTask={handleAddTask} /></div>

      </div>

    </div>
  );
}

export default App;
