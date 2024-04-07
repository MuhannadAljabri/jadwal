import React, { useState, useEffect } from 'react';
import cancelIcon from '../../src/img/cancelIcon.svg'
import settingsButton from '../../src/img/settingsbutton.svg'

const PomoTimer = () => {
  const [workTime, setWorkTime] = useState(25 * 60); // Default work time is 25 minutes (in seconds)
  const [breakTime, setBreakTime] = useState(5 * 60); // Default break time is 5 minutes (in seconds)
  const [timeLeft, setTimeLeft] = useState(workTime); // Initial time left is work time
  const [timerActive, setTimerActive] = useState(false);
  const [timerType, setTimerType] = useState('work'); // 'work' or 'break'
  const [showSettings, setShowSettings] = useState(false); // State to control visibility of settings popup

  useEffect(() => {
    let interval;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Switch between work and break time
      if (timerType === 'work') {
        alert('Work time is over. Take a break!');
        setTimeLeft(breakTime);
        setTimerType('break');
      } else {
        alert('Break time is over. Get back to work!');
        setTimeLeft(workTime);
        setTimerType('work');
      }
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft, workTime, breakTime, timerType]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setTimerActive(!timerActive);
  };

  const resetTimer = () => {
    if (timerType === 'work') {
      setTimeLeft(workTime);
    } else {
      setTimeLeft(breakTime);
    }
    setTimerActive(false);
    setShowSettings(false); // Close timer settings
  };

  return (
    <div className="pomodoro-timer">
      <h1 className = "timer-type">{timerType === 'work' ? 'Work' : 'Break'}</h1>
      <h1 className = "Pomo-header">Pomodoro Timer</h1>
      {timerActive && <div className="timer-display">{formatTime(timeLeft)}</div>}
      <div className="timer-controls">
        <button className="Start-button" onClick={toggleTimer}>{timerActive ? 'PAUSE' : 'START'}</button>
        <button className="Settings-button" onClick={() => setShowSettings(true)}>
          <img src={settingsButton} alt="settings button" />
        </button>
      </div>

      {/* Popup for timer settings */}
      {showSettings && (
        <div className="timer-settings-popup">
          <div className="timer-settings">
            <h1>Timer Settings</h1>
            <label htmlFor="workTime">Work Time (minutes): </label>
            <input type="number" id="workTime" value={workTime / 60} placeholder = "min" onChange={(e) => setWorkTime(parseInt(e.target.value) * 60)} />
            <br />
            <label htmlFor="breakTime">Break Time (minutes): </label>
            <input type="number" id="breakTime" value={breakTime / 60} placeholder = "min" onChange={(e) => setBreakTime(parseInt(e.target.value) * 60)} />
          </div>
          <button className="Reset-button" onClick={resetTimer}>Set</button>
          <button className="cancel-button" onClick={() => setShowSettings(false)}>
          <span className="close-btn" >×</span>
          </button>
        </div>      )}
    </div>
  );
};

export default PomoTimer;
