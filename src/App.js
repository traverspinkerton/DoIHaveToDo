import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Do I Have To Do?</h1>
        </header>
        <p className="App-intro">
          Time to get your ish done
        </p>
        <TodoList />
      </div>
    );
  }
}

export default App;
