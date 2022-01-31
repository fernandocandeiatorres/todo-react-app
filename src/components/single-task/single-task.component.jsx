import React from "react";
import "./single-task.component.scss";

function Task({ task, i, filter }) {
  return (
    <div className="SingleTask">
      <li>{task.task}</li>
      <button
        onClick={() => {
          filter(i);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Task;
