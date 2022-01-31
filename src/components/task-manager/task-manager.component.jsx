import React from "react";

import Task from "../single-task/single-task.component";

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
  };

  taskClick = (i) => {
    let newTasks = this.state.tasks;
    let result = newTasks.filter(({ task }, j) => task[j] !== task[i]);
    this.setState({ tasks: result });
    console.log(result);
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
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default TaskManager;
