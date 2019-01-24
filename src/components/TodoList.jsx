import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const {
      todos,
      updateTodo,
      completeTodo,
      deleteTodo
    } = this.props

    return (
    <ul className="todo-list">
        {Object.keys(todos).map((todoKey) => (
          <TodoItem
            key={todoKey}
            todoKey={todoKey}
            todo={todos[todoKey]}
            updateTodo={updateTodo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo} />
        ))}
    </ul>
    );
  }
}

export default TodoList;


