import React, { Component } from 'react';
import './App.css';
import TodoData from './data.json';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

class App extends Component {
  state = {
    todos: TodoData,
    creatingTodo: false
  }

  handleNewTodo = newTodo => this.setState({ todos: [ newTodo, ...this.state.todos ] });

  handleTodoDelete = todoToDelete => {
    const newTodoList = this.state.todos.filter(todo => todo.task !== todoToDelete);
    this.setState({ todos: newTodoList });
  }

  handleCreatingTodo = () => {
    this.state.creatingTodo ? this.setState({ creatingTodo: false }) : this.setState({ creatingTodo: true });
  }

  handleStatusChange = changedTodo => {
    const newTodoList = this.state.todos.map(todo => {
      if (todo.task === changedTodo) {
        console.log(todo);
        const newStatus = todo.status === 'incomplete' ? 'complete' : 'incomplete'; 
        return {
          task: todo.task,
          status: newStatus
        }
      } else {
        return todo
      }
    });
    this.setState({ todos: newTodoList });
    console.log(this.state.todos);
  }

  filterTodos = (e) => {
    console.log(e);
    const filteredTodos = this.state.todos.filter(todo => todo.status === e.target.value);
    this.setState({ todos: filteredTodos });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1 className="App-title">Do I Have To Do?</h1> */}
        </header>
        <select onChange={e => this.filterTodos(e)}>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <NewTodo handleNewTodo={this.handleNewTodo} creatingTodo={this.state.creatingTodo} handleCreatingTodo={this.handleCreatingTodo} />
        <TodoList todos={this.state.todos} handleTodoDelete={this.handleTodoDelete} handleStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
}

export default App;
