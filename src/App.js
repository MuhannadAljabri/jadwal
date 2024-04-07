import { useState } from "react";
import "./App.css";
import Home from "./JedwalComponents/Home";
import CategoryButton from "./JedwalComponents/CategoryButton";
import "./NewTask.css";
import AddTaskButton from "./JedwalComponents/NewTaskButton";
import logo from "./logo.svg";
import TaskLayout from "./JedwalComponents/TaskLayout";
import PomoTimer from "./JedwalComponents/PomoTimer";
import ModeDropdown from "./JedwalComponents/ModeDropdown";
import TaskLists from './JedwalComponents/TaskLayout';


function App() {
  // State to hold the list of categories
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleAddCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };
  const handleAddTask = (taskTitle, priority, category, deadline, description) => {
    setTasks([...tasks, { taskTitle, priority, category,deadline, description }]);
  };

  return (
    <div className="App">
      <PomoTimer />
      <div className="top-row">
        <div className="logo">
          <img src={logo} alt="Logo" height="60" width="100" />
        </div>
        <CategoryButton onAddCategory={handleAddCategory} />
        <div>
          <AddTaskButton onAddTask={handleAddTask} categories={categories} />
        </div>
      </div>

      <div>
        {" "}
        <ModeDropdown></ModeDropdown>
      </div>
      <div>
        {" "}
        <TaskLists tasks={tasks} />
      </div>
      
    </div>
  );
}

export default App;
