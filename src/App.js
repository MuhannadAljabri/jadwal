import React, { useState } from "react";
import "./App.css";
import Overlay from "./Buttons/NewTask";

function App() {
  const [activeTab, setActiveTab] = useState("todo");
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  // Function to toggle the overlay
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="App">
      <button onClick={() => setOverlayVisible(true)} className="plus-button">
      <Overlay isVisible={overlayVisible} onClose={() => setOverlayVisible(false)} />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className="canvas"
        style={{ background: activeTab === "todo" ? "white" : "#f0f0f0" }}
      >
        {activeTab === "todo" ? <p>To Do List</p> : <p>Calendar View</p>}
      </div>

      <div className="tabs">
        <button
          onClick={() => setActiveTab("todo")}
          className={activeTab === "todo" ? "active" : ""}
        >
          <p>To Do</p>
        </button>
        <button
          onClick={() => setActiveTab("calendar")}
          className={activeTab === "calendar" ? "active" : ""}
        >
          <p>Calendar</p>
        </button>
      </div>
    </div>
  );
}

export default App;
