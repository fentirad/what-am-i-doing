import * as React from 'react';
import Header from './components/Header'
import AddTodoForm, { AddTodoFormProps } from './components/AddTodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import './styles/app.scss';
import { observer } from 'mobx-react';
import TodoStore from './stores/TodoStore';

export interface AppProps {
  todoStore: TodoStore
}

@observer
export class App extends React.Component<AppProps> {
  render() {
    const {
      todoStore
    } = this.props;

    const addTodoFormProps: AddTodoFormProps = {
      todoStore
    }

    return (
      <div className="app">
        <Header />
        <AddTodoForm {...addTodoFormProps} />
        <TodoList
          todoStore={todoStore} />
        <Footer
          todoStore={todoStore} />
      </div>
    );
  }
};
