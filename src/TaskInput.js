import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const inputChange = (e) => {
    setInput(e.currentTarget.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  const inputKeyPress = (e) => {
    if (e.key === "Enter") {
      inputSubmit(e);
    }
  };

  return (
    <form onSubmit={inputSubmit}>
      <input
        value={input}
        type="text"
        onChange={inputChange}
        onKeyDown={inputKeyPress}
        className="input"
        placeholder="Enter Item"
      />
      <button className="submit">Submit</button>
    </form>
  );
}

export default TaskInput;
