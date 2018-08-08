import React, { Component } from 'react';

import './App.css';
import ToDoList from "./TodoList";


class App extends Component {
  render() {
    return (
      <div className="App">
     <header>Obligatory React todo list</header>
     <ToDoList />
      </div>
    );
  }
}

export default App;
