import React, { Component } from 'react';
import Header from './components/Header'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import './styles/app.scss';

class App extends Component {
  static storeId = 'what-am-i-doing'
  state = {
    todos: {},
    allTodosComplete: false
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem(this.storeId);
    if (localStorageRef) {
        this.setState({
            todos: JSON.parse(localStorageRef)
        }, this.computeAllTodosCompleted);
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
        this.storeId,
        JSON.stringify(this.state.todos)
    );
  }

  computeAllTodosCompleted = () => {
    const { todos } = this.state;
    const todoKeys = Object.keys(todos);
    if (todoKeys.length === 0) {
      this.setState({ allTodosComplete: false });
      return;
    }

    const allTodosComplete = todoKeys.reduce((prev, key) => {
      const todo = todos[key];
      return prev && todo.complete;
    }, true);
    this.setState({ allTodosComplete });
  }

  createTodo = (todo) => {
    const todos = { ...this.state.todos };
    todos[`todo-${Date.now()}`] = todo;
    this.setState({ todos }, this.computeAllTodosCompleted);
  };

  updateTodo = (key, updatedTodo) => {
    const todos = { ...this.state.todos };
    todos[key] = updatedTodo;
    this.setState({ todos }, this.computeAllTodosCompleted);
  };

  deleteTodo = key => {
    const todos = { ...this.state.todos };
    delete todos[key];
    this.setState({ todos }, this.computeAllTodosCompleted);
  };

  completeAllTodos = () => {
    const todos = Object.keys(this.state.todos).map(key => {
      const todo = {
        ...this.state.todos[key],
        complete: true
      }
      return todo;
    });
    this.setState({ todos }, this.computeAllTodosCompleted);
  };

  uncompleteAllTodos = () => {
    const todos = Object.keys(this.state.todos).map(key => {
      const todo = {
        ...this.state.todos[key],
        complete: false
      }
      return todo;
    });
    this.setState({ todos }, this.computeAllTodosCompleted);
  };

  deleteAllTodos = () => {
    const todos = { };
    this.setState({ todos }, this.computeAllTodosCompleted);
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
          deleteTodo={this.deleteTodo} />
        <Footer
          todos={this.state.todos}
          completeAll={this.completeAllTodos}
          uncompleteAll={this.uncompleteAllTodos}
          deleteAll={this.deleteAllTodos}
          allTodosCompleted={this.state.allTodosComplete}/>
      </div>
    );
  }
}

export default App;
