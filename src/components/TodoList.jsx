import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const items = {
      item1: 'item 1',
      item2: 'item 2',
      item3: 'item 3'
    };

    return (
    <ul className="todo-list">
        {Object.keys(items).map((itemKey) => (
          <TodoItem key={itemKey} text={items[itemKey]} />
        ))}
    </ul>
    );
  }
}

export default TodoList;


