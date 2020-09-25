import React from 'react';
import { Route, Redirect, useHistory } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import TaskList from './components/taskList.js'
import CreateTask from './components/createTask';
import EditTask from './components/editTask';

function App() {
  return (
    <div>
      <Route exact path="/">
        <TaskList />
      </Route>
      <Route path="/create">
        <CreateTask />
      </Route>
      <Route path="/edit">
        <EditTask />
      </Route>
    </div>
  );
}

export default App;
