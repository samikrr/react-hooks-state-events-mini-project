import React from "react";
import Task from "./Task"; 

function TaskList({ tasks, handleDelete }) {
  const handleDeleteTask =(text) => {
    handleDelete(tasks.filter((task)=> task.text !== text));
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.text} task={task} handleDelete={handleDeleteTask} />
      ))}
    </div>

  );
}

export default TaskList;
