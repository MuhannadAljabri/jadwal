// TaskItem.js
import React, { useState } from 'react';

function TaskItem({ task }) {
  const [completed, setCompleted] = useState(false);

  const handleCheck = () => {
    setCompleted(!completed);
    if (!completed) {
      alert ('You have completed a task')
      
    }
  };
  

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <div>
        <h3 className='task-titles'>{task.taskTitle} <input className='checkbox' checked = {completed} type="checkbox" onChange={handleCheck} /></h3>
      </div>
    </li>
  );
}

export default TaskItem;
