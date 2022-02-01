import React from "react";

import Task from "../single-task/single-task.component";
import "./task-manager.component.scss";

class TaskManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let newTasks = this.state.tasks.slice();
    this.setState(
      {
        tasks: newTasks.concat([{ task: e.target[0].value, isDone: false }]),
      },
      () => console.log(this.state)
    );
    e.target[0].value = "";
    // COLOCAR LIMITE P/ 5 TASKS
  };

  filterFunc = (index, otherIndex, value) => {
    if (index !== otherIndex) {
      return value;
    }
  };

  taskClick = (i) => {
    let newTasks = this.state.tasks.slice();
    let result = newTasks.filter((task, index) =>
      this.filterFunc(index, i, task)
    );

    this.setState({ tasks: result });
  };

  render() {
    return (
      <div className="TaskContainer">
        <div className="Tasks">
          <ul>
            {this.state.tasks.map((task, i) => (
              <Task key={i} task={task} i={i} filter={this.taskClick} />
            ))}
          </ul>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="taskInput"
            name="taskInput"
            minLength="1"
            required
            disabled={this.state.tasks.length < 4 ? false : true}
          />
          <button
            type="submit"
            disabled={this.state.tasks.length < 4 ? false : true}
          >
            <img
              src="https://img.icons8.com/officexs/16/000000/plus.png"
              alt="plus"
            />
          </button>
        </form>
      </div>
    );
  }
}

export default TaskManager;
