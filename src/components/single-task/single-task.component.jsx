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
        <img
          src="https://img.icons8.com/officexs/16/000000/minus.png"
          alt="minus"
        />
      </button>
    </div>
  );
}

export default Task;
