import React, { Component } from 'react';
import '../styles/todo-item.scss';
import Button from './Button';
import Checkbox from './Checkbox';

class TodoItem extends Component {
  handleInputChange = () => {
    const todo = {...this.props.todo};
    todo.complete = !todo.complete;
    this.props.updateTodo(this.props.todoKey, todo);
  };

  render() {
    const {
        complete,
        value
    } = this.props.todo;

    return (
      <li className="todo-item">
        <div className="todo-item-complete">
          <Checkbox
            onChangeHandler={this.handleInputChange}
            classes="todo-item-completea"
            name="completed"
            checked={complete}
            label="" />
        </div>
        
        <span className="todo-item-text">{value}</span>
        <div className="todo-item-delete">
          <Button
            classes="todo-item-deletea"
            action={() => console.log(`clicked button for: ${value}`)}
            text="x" />
        </div>
      </li>
    );
  }
}

export default TodoItem;
