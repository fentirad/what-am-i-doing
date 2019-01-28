import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/add-todo.scss';

class AddTodoForm extends Component {
  static propTypes = {
    createTodo: PropTypes.func
  }
  
  addTodoRef = React.createRef();
  
  initializeTodoAndClearInput = () => {
    const todoValue = {
      complete: false,
      value: this.addTodoRef.current.value
    };

    this.props.createTodo(todoValue);

    this.addTodoRef.current.value = '';
  }

  handleKeyUp = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    this.initializeTodoAndClearInput();
  }

  render() {
    return (
    <div className="add-todo">
      <input
        ref={this.addTodoRef}
        type="text"
        className="add-todo-input"
        onKeyUp={this.handleKeyUp}
      />
      <Button
        classes="todo-item-create"
        action={(e) => this.initializeTodoAndClearInput()}
        text="+" />
    </div>
    );
  }
}

export default AddTodoForm;
