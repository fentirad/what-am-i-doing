import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/add-todo.scss';

class AddTodoForm extends Component {
  static propTypes = {
    createTodo: PropTypes.func
  }

  handleKeyUp = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    const todoValue = {
      complete: false,
      value: e.currentTarget.value
    };

    this.props.createTodo(todoValue);
  }

  render() {
    return (
    <div className="add-todo">
      <input
        type="text"
        className="add-todo-input"
        onKeyUp={this.handleKeyUp}
      />
      <Button
        classes="todo-item-create"
        action={() => console.log(`add todo btn`)}
        text="+" />
    </div>
    );
  }
}

export default AddTodoForm;
