function Task({ todo, removeTask }) {
    return (
      <div key={todo.id} className="task">
        <div>{todo.task}</div>
        <div className="deleteTask" onClick={() => removeTask(todo.id)}></div>
      </div>
    );
  }
  
  export default Task;
  