import React from "react";

function Task({ task, i, filter }) {
  return (
    <div>
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
