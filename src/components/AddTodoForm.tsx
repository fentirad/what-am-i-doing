import * as React from 'react';
import { observer } from 'mobx-react';
import Button from './Button';
import '../styles/add-todo.scss';
import TodoStore, { Todo } from '../stores/TodoStore';

export interface AddTodoFormProps {
  todoStore: TodoStore
}

@observer
class AddTodoForm extends React.Component<AddTodoFormProps> {  
  private addTodoRef: React.RefObject<HTMLInputElement> = React.createRef();
  
  initializeTodoAndClearInput = (): void => {
    const todoValue: Todo = {
      complete: false,
      value: this.addTodoRef.current.value
    };

    this.props.todoStore.createTodo(todoValue);

    this.addTodoRef.current.value = '';
  }

  handleKeyUp = (e): void => {
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
