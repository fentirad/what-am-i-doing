import React, { Component } from 'react';
import Header from './components/Header'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import './styles/app.scss';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <AddTodoForm
          todoStore={this.props.todoStore} />
        <TodoList
          todoStore={this.props.todoStore} />
        <Footer
          todoStore={this.props.todoStore} />
      </div>
    );
  }
}

export default App;
