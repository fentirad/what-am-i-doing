import React, { Component } from 'react';
import './styles/_vars.scss';
import './styles/app.scss';
import Header from './components/Header'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <AddTodoForm />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
