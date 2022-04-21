import { useState } from "react";
import Task from "./Task";
import TaskInput from "./TaskInput";

function App() {
  const [arr, setArr] = useState([]);

  const addTask = (input) => {
    if (input) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        task: input,
      };
      setArr(arr => [...arr, newTask])
    }
  };

  const removeTask = (id) => {
    setArr(arr=>[...arr.filter((todo) => todo.id !== id)]);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="headerWrapper">
          <h1 className="header">You have: {arr.length} Todos</h1>
        </div>
        {arr.map((todo) => {
          return <Task todo={todo} key={todo.id} removeTask={removeTask} />;
        })}
        <TaskInput addTask={addTask} />
      </div>
    </div>
  );
}

export default App;