import React from "react";
import "./NewTodoForm.css";

function NewTodoForm() {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div className="new-todo-form ">
      <input
        type="text"
        className="new-todo-input"
        placeholder="Take dog outside for a walk.."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
}

export default NewTodoForm;
