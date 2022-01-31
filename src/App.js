import React from "react";
import TaskManager from "./components/task-manager/task-manager.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <div className="Header">
            <h1>React To Do</h1>
          </div>
          <TaskManager />
        </div>
      </div>
    );
  }
}

export default App;
