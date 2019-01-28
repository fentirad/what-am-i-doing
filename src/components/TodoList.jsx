import React, { Component } from 'react';
import TodoItem from './TodoItem';
import '../styles/todo-list.scss';

class TodoList extends Component {
  renderItems() {
    const {
      todos,
      updateTodo,
      deleteTodo
    } = this.props

    return Object.keys(todos).map(todoKey => {
      if (!todos[todoKey]) {
        return null;
      }
      
      return (
      <TodoItem
        key={todoKey}
        todoKey={todoKey}
        todo={todos[todoKey]}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo} />
      )
    });
  }
  render() {
    const {
      todos,
      updateTodo,
      deleteTodo
    } = this.props

    return (
    <ul className="todo-list">
        {todos && 
          Object.keys(todos).map((todoKey) => (
          <TodoItem
            key={todoKey}
            todoKey={todoKey}
            todo={todos[todoKey]}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo} />
        ))}
    </ul>
    );
  }
}

export default TodoList;


