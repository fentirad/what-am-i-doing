import {
  observable,
  computed,
  autorun
} from 'mobx';

class TodoStore {
  static storeId = 'what-am-i-doing'
  @observable todos = {};

  constructor() {
    const localStorageRef = localStorage.getItem(TodoStore.storeId);
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

  @computed get todoCount() {
    const todoKeys = Object.keys(this.todos);
    return todoKeys.length;
  }

  @computed get completedTodoCount() {
    const todoKeys = Object.keys(this.todos);
    return todoKeys.filter(key => {
      const todo = this.todos[key];
      return todo.complete === true;
    }).length;
  }

  @computed get allTodosComplete() {
    const todoKeys = Object.keys(this.todos);
    if (todoKeys.length === 0) {
      return false;
    }

    return todoKeys.reduce((prev, key) => {
      const todo = this.todos[key];
      return prev && todo.complete;
    }, true);
  }

  createTodo = todo => {
    const newTodoKey = `todo-${Date.now()}`;
    this.todos[newTodoKey] = todo;
  };

  updateTodo = (key, updatedTodo) => {
    this.todos[key] = updatedTodo;
  };

  deleteTodo = key => {
    delete this.todos[key];
  };

  completeAllTodos = () => {
    Object.keys(this.todos).forEach(key => {
      const todo = {
        ...this.todos[key],
        complete: true
      }

      this.todos[key] = todo;
    });
  };

  uncompleteAllTodos = () => {
    Object.keys(this.todos).forEach(key => {
      const todo = {
        ...this.todos[key],
        complete: false
      }
      
      this.todos[key] = todo;
    });
  };

  deleteAllTodos = () => {
    this.todos = {};
  };
}

export default TodoStore;
