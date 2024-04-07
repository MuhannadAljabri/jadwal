// TaskLists.js
import React from 'react';
import TaskList from './TaskList';

function TaskLists({ tasks }) {
  // Split tasks into today and tomorrow tasks
  const todayTasks = tasks.filter(task => task.deadline.toDateString() === new Date().toDateString());
  const tomorrowTasks = tasks.filter(task => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return task.deadline.toDateString() === tomorrow.toDateString();
  });

  return (
    <div className="task-lists">
      <div className='top-row1'><TaskList title="Today" tasks={todayTasks} />
      <TaskList title="Tomorrow" tasks={tomorrowTasks} /></div>
      
    </div>
  );
}

export default TaskLists;
