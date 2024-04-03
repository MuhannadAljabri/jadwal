// TaskItem.js
import React, { useState } from 'react';

function TaskItem({ task }) {
  const [completed, setCompleted] = useState(false);

  const handleCheck = () => {
    setCompleted(!completed);
  };

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <div>
        <h3>{task.title}</h3>
      </div>
    </li>
  );
}

export default TaskItem;
