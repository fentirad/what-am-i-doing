import React, { Component } from 'react';
import '../styles/todo-item.scss';
import Button from './Button';
import Checkbox from './Checkbox';

class TodoItem extends Component {
  editTodoRef = React.createRef();

  handleCompletedOnChange = () => {
    const todo = {
        ...this.props.todo,
        complete: !this.props.todo.complete
    };
    this.props.updateTodo(this.props.todoKey, todo);
  };

  handleEditTodoOnChange = (e) => {
    const todo = {
        ...this.props.todo,
        value: this.editTodoRef.current.value
    };
    this.props.updateTodo(this.props.todoKey, todo);
  }

  render() {
    const {
        complete,
        value
    } = this.props.todo;

    const itemClasses = [
        'todo-item-text',
        complete ? 'completed' : ''
    ].join(' ');

    return (
      <li className="todo-item">
        <div className="todo-item-complete">
          <Checkbox
            onChangeHandler={this.handleCompletedOnChange}
            classes="todo-item-completea"
            name="completed"
            checked={complete}
            label="" />
        </div>
        
        <div className={itemClasses}>
            <input
                className="todo-item-text-input"
                ref={this.editTodoRef}
                type="text"
                onChange={this.handleEditTodoOnChange}
                value={value}
            />
        </div>
        <div className="todo-item-delete">
          <Button
            classes="todo-item-deletea"
            action={() => this.props.deleteTodo(this.props.todoKey)}
            text="x" />
        </div>
      </li>
    );
  }
}

export default TodoItem;
