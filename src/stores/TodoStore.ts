import {
  observable,
  computed,
  autorun
} from 'mobx';

export interface Todo {
  complete: boolean
  value: string
}

class TodoStore {
  static storeId: string = 'what-am-i-doing';
  @observable todos: {[key: string]: Todo} = {};

  constructor() {
    const localStorageRef: string = localStorage.getItem(TodoStore.storeId);
    if (localStorageRef) {
      this.todos = JSON.parse(localStorageRef);
    }

    autorun(() => {
      console.log(`hey-${Date.now()}`);
      localStorage.setItem(
        TodoStore.storeId,
        JSON.stringify(this.todos)
      );
    });
  }

  @computed get todoCount(): number {
    const todoKeys: string[] = Object.keys(this.todos);
    return todoKeys.length;
  }

  @computed get completedTodoCount(): number {
    const todoKeys: string[] = Object.keys(this.todos);
    return todoKeys.filter(key => {
      const todo = this.todos[key];
      return todo.complete === true;
    }).length;
  }

  @computed get allTodosComplete(): boolean {
    const todoKeys: string[] = Object.keys(this.todos);
    if (todoKeys.length === 0) {
      return false;
    }

    const allTodosComplete: boolean = todoKeys.reduce((prev, key) => {
      const todo = this.todos[key];
      return prev && todo.complete;
    }, true);

    return allTodosComplete;
  }

  createTodo = (todo: Todo): void => {
    const newTodoKey: string = `todo-${Date.now()}`;
    this.todos[newTodoKey] = todo;
  };

  updateTodo = (key: string, updatedTodo: Todo): void => {
    this.todos[key] = updatedTodo;
  };

  deleteTodo = (key: string): void => {
    delete this.todos[key];
  };

  completeAllTodos = (): void => {
    Object.keys(this.todos).forEach((key: string): void => {
      const todo: Todo = {
        ...this.todos[key],
        complete: true
      };

      this.todos[key] = todo;
    });
  };

  uncompleteAllTodos = (): void => {
    Object.keys(this.todos).forEach((key: string): void => {
      const todo: Todo = {
        ...this.todos[key],
        complete: false
      };
      
      this.todos[key] = todo;
    });
  };

  deleteAllTodos = (): void => {
    this.todos = {};
  };
}

export default TodoStore;
