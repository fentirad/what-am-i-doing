import React, { Component } from 'react';
import '../styles/todo-item.scss';

class TodoItem extends Component {
  render() {
    const {
        text
    } = this.props;

    return (
    <li className="todo-item">{text}</li>
    );
  }
}

export default TodoItem;
