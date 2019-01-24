import React, { Component } from 'react';
import Header from './components/Header'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import './styles/app.scss';

class App extends Component {
  state = {
    todos: {}
  };

  createTodo = (todo) => {
    const todos = { ...this.state.todos };
    todos[`todo-${Date.now()}`] = todo;
    this.setState({ todos });
  };

  updateTodo = (key, updatedTodo) => {
    const todos = { ...this.state.todos };
    todos[key] = updatedTodo;
    this.setState({ todos });
  };

  completeTodo = (key, updatedTodo) => {
    const todos = { ...this.state.todos };
    todos[key] = updatedTodo;
    this.setState({ todos });
  };

  deleteTodo = key => {
    const todos = { ...this.state.todos };
    todos[key] = null;
    this.setState({ todos });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <AddTodoForm
          createTodo={this.createTodo} />
        <TodoList
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo} />
        <Footer />
      </div>
    );
  }
}

export default App;
