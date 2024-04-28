import React from "react";

function Task({ task, handleDelete }) {
  const handleDeleteTask = () => {
    handleDelete(task.text);
  };

  return (
    <div className="task">
      <div className="text">{task.text}</div>
      <div className="label">{task.category}</div>
      <button className="delete" onClick={handleDeleteTask}>
        X
      </button>
    </div>
  );
}

export default Task;
