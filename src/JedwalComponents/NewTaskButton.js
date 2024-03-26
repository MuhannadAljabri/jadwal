import React, { useState } from 'react';

function AddTaskButton({ onAddTask }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState('None');
  const [description, setDescription] = useState('');

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const handleAddTask = () => {
    if (taskTitle.trim() !== '') {
      onAddTask(taskTitle, priority, description);
      setTaskTitle('');
      setPriority('Medium');
      setDescription('');
      setShowOverlay(false);
    }
  };

  return (
    <div>
      <div onClick={toggleOverlay}>
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
              placeholder="    Enter task title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <select className='task-dropdown' value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option className = "dropdown-item" value="None">None </option>
              <option className = "dropdown-item" value="High">High</option>
              <option className = "dropdown-item" value="Medium">Medium</option>
              <option className = "dropdown-item" value="Low">Low</option>
            </select>
            <textarea className='description-box'
              placeholder="Enter task description"
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
