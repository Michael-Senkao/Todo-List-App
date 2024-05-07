import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  // Function to handle input change
  function handleChange(event) {
    setInputText(event.target.value);
  }

  // Function to handle add button click
  function handleAddClick() {
    if (inputText.trim() !== "") {
      props.onAdd(inputText);
      setInputText("");
    }
  }

  return (
    <div className="form">
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
