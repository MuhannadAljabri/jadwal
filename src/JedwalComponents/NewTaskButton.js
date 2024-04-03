import React, { useState } from 'react';
import CategoryButton from './CategoryButton';

function AddTaskButton({ onAddTask, categories }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState('None');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [description, setDescription] = useState('');
  const [activeTab, setActiveTab] = useState('');
  const [deadline, setDeadline] = useState('');

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const handleAddTask = () => {
    if (taskTitle.trim() !== '') {
      onAddTask(taskTitle, priority, description, deadline);
      setTaskTitle('');
      setPriority('Medium');
      setSelectedCategory(''); 
      setDescription('');
      setShowOverlay(false);
      setActiveTab('');
      setDeadline('');
    }
  };

  return (
    <div>
      <div onClick={toggleOverlay} className = "plus-sign">
          <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-plus"
        viewBox="0 0 16 16"
      >
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg>
      </div>
      {showOverlay && (
        <div className="popup-plus">
            <span className="close-btn" onClick={toggleOverlay}>×</span>
            <h2>Add Task</h2>
            <input
              type="text"
              placeholder="Enter task title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />

          <div className = "tabs">
            {['Project', 'Class', 'Assignment'].map(tabName => (
              <div 
              key = {tabName}
              className = {`tab ${activeTab === tabName.toLowerCase() ? 'active' : ''}`}
              onClick={() => setActiveTab(tabName.toLowerCase())}
              >
    
                {tabName}
                {activeTab === tabName.toLowerCase() && (
                  <span className="checkmark">✓</span> )}
              </div>
            ))}
            </div>

          <select className='task-dropdown' value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}>
            <option className = "dropdown-item" value="">Choose Category</option>
            {categories.map((category, index) => (
              <option className = "dropdown-item" key={index} value={category}>{category}</option>
              ))}
            </select>
          < div className = "blah">
            <select className='task-dropdown' value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option className = "dropdown-item" value="None">Choose Priority </option>
              <option className = "dropdown-item" value="High">High</option>
              <option className = "dropdown-item" value="Medium">Medium</option>
              <option className = "dropdown-item" value="Low">Low</option>
            </select>
            
            <input
              type = "datetime-local"
              className = 'deadline-input'
              value = {deadline}
              onChange = {(e) => setDeadline(e.target.value)}
              style={{ marginTop: '5px' }} // Adjust the margin-top as needed

            />
          </div>
            <textarea className='description-box'
              placeholder="   Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button className='' onClick={handleAddTask}>Add</button>
        </div>
      )}
    </div>
  );
}

export default AddTaskButton;
