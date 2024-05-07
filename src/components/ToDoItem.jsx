import React, { useState } from "react";

function ToDoItem(props) {
  const [isComplete, setComplete] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Function to toggle completion status of the item
  function toggleCompletion() {
    setComplete(prevComplete => !prevComplete);
  }

  return (
    <div
      className="todoItem"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <li
        style={{ textDecoration: isComplete ? "line-through" : "none" }}
        onClick={toggleCompletion}
      >
        {props.text}
      </li>
      {hovered && (
        <button onClick={() => props.onChecked(props.id)}>
          <span>Delete</span>
        </button>
      )}
    </div>
  );
}

export default ToDoItem;
