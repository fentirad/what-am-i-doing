import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Button from './Button';
import '../styles/add-todo.scss';

@observer
class AddTodoForm extends Component {  
  addTodoRef = React.createRef();
  
  initializeTodoAndClearInput = () => {
    const todoValue = {
      complete: false,
      value: this.addTodoRef.current.value
    };

    this.props.todoStore.createTodo(todoValue);

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
        classes="add-todo-button"
        action={(e) => this.initializeTodoAndClearInput()}
        text="+" />
    </div>
    );
  }
}

export default AddTodoForm;
