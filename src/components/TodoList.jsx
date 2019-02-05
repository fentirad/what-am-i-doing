import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodoItem from './TodoItem';
import '../styles/todo-list.scss';

@observer
class TodoList extends Component {
  renderItems() {
    const {
      todos
    } = this.props.todoStore;

    return Object.keys(todos).map(todoKey => {
      if (!todos[todoKey]) {
        return null;
      }
      
      return (
      <TodoItem
        key={todoKey}
        todoKey={todoKey}
        todo={todos[todoKey]}
        updateTodo={this.props.todoStore.updateTodo}
        deleteTodo={this.props.todoStore.deleteTodo} />
      )
    });
  }
  render() {
    const {
      todos
    } = this.props.todoStore;

    return (
    <ul className="todo-list">
        {todos && 
          Object.keys(todos).map((todoKey) => (
          <TodoItem
            key={todoKey}
            todoKey={todoKey}
            todo={todos[todoKey]}
            updateTodo={this.props.todoStore.updateTodo}
            deleteTodo={this.props.todoStore.deleteTodo} />
        ))}
    </ul>
    );
  }
}

export default TodoList;


